import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open_modal, close_modal } from "../../redux/diff";
import {parentcat_byid,fetch_all_parentcategory,singlecat_reset} from '../../redux/parentcategory';
import axios from "axios";



import {DeleteOutlined,EditOutlined } from "@ant-design/icons";
import Updateparentcat from "./updateparentcat";
import { toast } from "react-toastify";
const Allparentcategories = () => {
  const dispatch = useDispatch();
  const { allparentcategories,singleparentcategory } = useSelector((state) => state.parentcategory);

  
  const  openModal = (parencatid) => {


dispatch(parentcat_byid(parencatid));



    dispatch(open_modal());
    console.log("open modal"); 



  }

  const API = axios.create({ baseURL: 'http://localhost:5000/api' });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem('usertoken')) {
      req.headers.Authorization = `Bearer ${localStorage.getItem('usertoken')}`;
    }
  
    return req;
  });
  
  // const deleteParentCategory = (id) => API.delete(`/parentcat/removeparentcat/${id}`);





 
// delet api call
const  deleteparencat = (parencatid) => {

dispatch(parentcat_byid(parencatid));

// delete aprentcat image from cloudinary

const oldimage = singleparentcategory.image.public_id;

const deleteimg  = API.post(`/parentcat/removeimage`,{image:oldimage} );


// deelte parent category from server

const res = API.delete(`/parentcat/removeparentcat/${parencatid}`).then((res) => {
  console.log("delete parent category-->", res);
  toast.success(res.data.message);
 dispatch(singlecat_reset(parencatid));
  
}).then(()=>{
 const allparentcat =API.get('/parentcat/allparentcats').then((res) => {
    console.log("all parent categories-->", res);
    localStorage.setItem("parentcat", JSON.stringify(res.data.parentcats));
    dispatch(fetch_all_parentcategory());
  });
}).catch((err) => {
  console.log(err);
  toast.error(err.response.data.message);
});

// then fetch all parent categories again after delete one






}





  return (
    <div className="mt-12 pb-12">
      <div>
        <div className=" font-bold text-2xl ">
          <h1>All Parent Categories</h1>
          <p className="bg-green-400 h-[3px] w-[244px] mx-auto mt-3"></p>
        </div>

        {/* map */}

        <div>
          <div>
            {allparentcategories.map((parentcat) => (
              <div>

<div className=" mt-5  justify-around ml-[100px] w-[412px]  flex gap-12">

{/* ---name-- */}

<div className=" self-center ">
    <h1 className="font-bold text-xl  bg-blue-300 p-2 rounded-3xl">
        {parentcat.name}
    </h1>
</div>


{/* --image- */}


<div
className=" w-[100px]  h-[77px]"
>
<img className="w-full h-full object-cover rounded-2xl" src={parentcat.image.secure_url} alt="" />

</div>

<div className=" self-center flex gap-7  ml-8">

<p className=" self-center">
<DeleteOutlined
onClick={() => deleteparencat(parentcat._id)}


className='   text-blue-400 cursor-pointer  hover:text-red-500  text-2xl font-bold' />
</p>


<p>
<EditOutlined 
 onClick={()=>openModal(parentcat._id)}

className='   text-white cursor-pointer  bg-yellow-200 rounded-3xl p-2  hover:text-green-500  text-2xl font-bold' />
</p>


</div>



</div>




              </div>
            ))}
          </div>

{/* ----modal component- */}

<Updateparentcat/>



        </div>
      </div>
    </div>
  );
};

export default Allparentcategories;
