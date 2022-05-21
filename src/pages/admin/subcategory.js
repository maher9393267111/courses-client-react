import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {UploadOutlined} from '@ant-design/icons';

import FileBase64 from 'react-file-base64';
import axios from "axios";

import { Box, Select,Button, Flex, Grid, Spacer } from "@chakra-ui/react";
import { Input } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetch_all_subcategory} from "../../redux/sub-cat";

const Parentcategory = () => {
  const fileref = useRef();
  const dispatch = useDispatch();
  const { userinfo, token } = useSelector((state) => state.user);
  const { allparentcategories } = useSelector((state) => state.parentcategory);
  const [imageshow, setImageshow] = useState("");
  const [catid, setCatid] = useState("");

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState([]);

const  [obj,setObj] = useState({});

const handleClickfile = (event) => {
  event.preventDefault();
  fileref.current.click();
};


// handle image change bse64

const  getFiles =( files)=>{
  console.log(files);
  setImage(files.base64);

  
}





  const API = axios.create({ baseURL: "http://localhost:5000/api/subcat" });

  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
  });


 



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("send images",image);
  
  
    try {
  
      API.post("/createSubCat", {
        image: image,
        name,
        catid
      }).then((res) => {
     
      
       
        setObj(res?.data?.subscat);
  
        toast.success(`Subcategory ${res.data.subcat.name}  created successfully`);
      })
      // then fetch all subcategories
.then(()=>{
  API.get("/allSubCats").then((res) => {

    console.log("RES ALL SUB-CATEGORIES",res.data.allSubCats,'-----------',res);
    localStorage.setItem("subcat", JSON.stringify(res.data.allSubCats));
    dispatch(fetch_all_subcategory(res.data.allSubCats));


  });
})
  
    } catch (error) {
  
      console.log(error);
      toast.error(error.message);
    }
  
  
  };
  
  
 






 

  return (
    <div>
      
<div className=" text-center mt-12 mb-5">
<h1 className="text-xl font-bold mx-auto w-[250px] bg-blue-400 p-2 rounded-2xl text-white">sub Category Page</h1>
</div>


<div>

<div className=" shadow-2xl mt-6 shadow-[#bbb] w-[350px] h-[333px] mx-auto ">

<div>

<div className=" text-center mt-5 mb-5">
<h1 className="font-bold text-[14px]">Create form</h1>

</div>

{/* -name- */}

<div className=" text-center">

<input placeholder=" set category name" className="   rounded-3xl p-2 border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500


" type="text" onChange={(e)=>setName(e.target.value)} />


</div>



{/* -name end- */}


<div className="text-center">

<button
                      type="submit"
                      onClick={handleClickfile}
                      className="font-bold text-xl"
                    >
                      {" "}
                      <UploadOutlined className="text-[44px]  bg-green-400 p-1 rounded-3xl mr-[22px]" />{" "}
                      Upload Image{" "}
                    </button>

<div className=" mt-5">



<FileBase64
        multiple={ false }
        onDone={ getFiles }
        className="hidden mt-12"
                      ref={fileref}
        
        /> 

</div>
{/* -select-- */}
<div>


<div>

{/* fetch_all_subcategory */}

<Select
onChange={(e)=>setCatid(e.target.value)}
>

{allparentcategories.map((item) => { 

return (

  <option value={item._id}>{item.name}</option>

)

 
  
})}






</Select>





</div>



</div>



<button
className="mt-7 bg-blue-400 p-1 w-[100px] rounded-3xl text-white"
onClick={handleSubmit} 

>Create</button>



</div>




</div>


</div>




</div>







    </div>
  );
};

export default Parentcategory;
