import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open_modal, close_modal } from "../../redux/diff";
import {parentcat_byid} from '../../redux/parentcategory';

import {DeleteOutlined,EditOutlined } from "@ant-design/icons";
import Updateparentcat from "./updateparentcat";
const Allparentcategories = () => {
  const dispatch = useDispatch();
  const { allparentcategories } = useSelector((state) => state.parentcategory);

  
  const  openModal = (parencatid) => {


dispatch(parentcat_byid(parencatid));



    dispatch(open_modal());
    console.log("open modal"); 






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
className=" w-[66px] h-[77px]"
>
<img src={parentcat.image.secure_url} alt="" />

</div>

<div className=" self-center flex gap-7  ml-8">

<p className=" self-center">
<DeleteOutlined
 onClick={()=>openModal(parentcat._id)}

className='   text-blue-400 cursor-pointer  hover:text-red-500  text-2xl font-bold' />
</p>


<p>
<EditOutlined    className='   text-white cursor-pointer  bg-yellow-200 rounded-3xl p-2  hover:text-green-500  text-2xl font-bold' />
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
