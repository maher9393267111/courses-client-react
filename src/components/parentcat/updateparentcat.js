import React, { useState,useEffect,useRef } from "react";
import ModalComp from "./modal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetch_all_parentcategory,singlecat_reset } from "../../redux/parentcategory";
import {  close_modal} from "../../redux/diff";
import { UploadOutlined } from "@ant-design/icons";


import { Box, Button, Flex, Grid, Spacer } from "@chakra-ui/react";
import { Input } from "antd";
import { toast } from "react-toastify";

const Updateparentcat = () => {

const {singleparentcategory} = useSelector((state) => state.parentcategory);


const fileref = useRef();
const dispatch = useDispatch();
const { userinfo, token } = useSelector((state) => state.user);
const { currentcreted } = useSelector((state) => state.parentcategory);
const [imageshow, setImageshow] = useState("");

const [name, setName] = useState("");
const [image, setImage] = useState("");


const handleClickfile = (event) => {
    event.preventDefault();
    fileref.current.click();
  };

  const handleChangeImages = (event) => {
    const file = event.target.files[0];
    console.log(file);

    setImage(file);
    console.log("handle image change-->", file);
  };


  const API = axios.create({ baseURL: "http://localhost:5000/api/parentcat" });

  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
  });


  const handleSubmit = async (e) => {
    e.preventDefault();


    try{

 

    const imagedelete =  singleparentcategory?.image?.public_id;
 
    console.log("image---to Remove", imagedelete);
    // destroy old image from cloudinary
    const oldimagedata = API.post(`/removeimage`,{image:imagedelete} );
    





    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mystory123");

    formData.append("folder", "/parentcat");

    const uploadRes1 = await axios.post(
      "https://api.cloudinary.com/v1_1/maher9911133/image/upload",
      formData
    );

    const { url, secure_url, public_id } = uploadRes1.data;

    const imageobje = {};

    imageobje.secure_url = secure_url;
    imageobje.public_id = public_id;
    console.log("imageobje->", imageobje);

    e.preventDefault();
    console.log("name", name);
    console.log("image", image);

    API.put(`/updateParentCat/${singleparentcategory && singleparentcategory._id}`, { name, image: imageobje })
    .then((res) => {
      console.log("res", res);
      setImageshow(res.data.parentcat.image.secure_url);

      toast.success(
        `Parent Category${res.data.parentcat.name} updated Successfully`)


        

            console.log(" reset modal went here workkk");
            dispatch(singlecat_reset());
            dispatch(close_modal());
            
                    
            


    })
    .catch((err) => {
      console.log("err", err);
      toast.error(err.response.data.message);
    });

    // then fetch all parent categories

    setTimeout(() => {
      API.get("/allParentCats")
        .then((res) => {
          console.log("res", res);
          localStorage.setItem(
            "parentcat",
            JSON.stringify(res.data.parentcats)
          );
          dispatch(fetch_all_parentcategory());
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err.response.data.message);
        });
    }, 1500);

    }catch(err){
        console.log("error in component ath here", err);
        
        }
  };
 







  return (
    <div>
      <ModalComp title='Update Parentcategory'>

<div className=" h-[244px] ">


{singleparentcategory.image && 
<img 

 className="w-12 h-12 mx-auto bg-slate-300" src={  singleparentcategory?.image.secure_url } alt="" />

}
<div className="form-update">


<form className="mt-4">
                <div className=" mx-4">
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    className="   
      outline outline-1 outline-blue-200 
 
 

"
                    placeholder={singleparentcategory.name}
                  />
                </div>

                {/* image upload--- */}

                <div>
                  <div className="image-upload mt-6 mb-12">
                    <button
                      type="submit"
                      onClick={handleClickfile}
                      className="font-bold text-xl"
                    >
                      {" "}
                      <UploadOutlined className="text-[44px]  bg-green-400 p-1 rounded-3xl mr-[22px]" />{" "}
                      Upload Image{" "}
                    </button>

                    <input
                      type="file"
                      onChange={handleChangeImages}
                      className="hidden"
                      ref={fileref}
                    />

                
                  </div>

                  {/* -----end image upload---  */}
                </div>

                <div>
                  <button 
                  className=" bg-blue-400 text-white p-3 w-[140px] rounded-2xl text-md hover:bg-blue-800"
                  
                  onClick={handleSubmit}>update Now</button>
                </div>
              </form>





</div>







</div>



      </ModalComp>
    </div>
  );
};

export default Updateparentcat;
