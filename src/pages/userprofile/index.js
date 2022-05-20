import React from 'react';
import axios from 'axios';

import { useDispatch,useSelector } from 'react-redux';
import { useState, useEffect,useRef } from 'react';
import {UploadOutlined }
from '@ant-design/icons';

import { useParams } from 'react-router-dom';
import {Input} from '@chakra-ui/react'

const Userprofile = () => {

const fileref = useRef();
const [imagefile,setImagefile] = useState('');


const [showimage,setShowimage] = useState('');

// handle image upload file change

const handleChangeImages = (event) => {
    const fileUploaded = event.target.files[0];
    console.log("fileUploaded", fileUploaded);
    setImagefile(fileUploaded);
    console.log("files-main-images", imagefile);


  };

// send this image when click to cloudinary


const handleclick = async (event) => {
    event.preventDefault();

const formData = new FormData();
formData.append('file', imagefile);
formData.append('upload_preset', "mystory123");

formData.append("folder", "/userprofile");

const uploadRes1 = await axios.post(
    "https://api.cloudinary.com/v1_1/maher9911133/image/upload",
    formData
  );

  const { url, secure_url, public_id } = uploadRes1.data;

  setShowimage(url)
  console.log("showimage------>", showimage);




}




    const { id } = useParams();
    console.log('id',id);
    const dispatch = useDispatch();
    const { userinfo } = useSelector((state) => state.user);


// click button to upload file

const handleClickfile = (event) => {
    fileref.current.click();
  };




    return (
        <div className='ml-[90px]'>

<div className=' text-center mb-[40px] mt-[25px] font-bold text-2xl'>

<h1 className='  w-[222px] bg-blue-400 mx-auto text-white p-3 rounded-3xl'>{userinfo.name} Profile</h1>

</div>


<div className=' grid grid-cols-12'>




{/* -----left---- */}
<div className=' lg:col-span-4 sm:col-span-12'>


{/* ----flex image and info start0 */}

<div className=' flex  gap-8  sm:flex-row lg:flex-col'>





<div className=' w-[250px] h-[250px]'>

{userinfo.image ? <img src={userinfo.image} alt=""/> : <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>}



</div>


<div className=' user-data'>

<div className='sm:text-center lg:text-left text-xl mb-[22px] font-bold'>
    <h1>
        User Information
    </h1>
</div>

<div>

<h1 className='font-bold'>Name : <span className='bg-green-300 p-2 rounded-2xl  ml-3'>{userinfo.name}</span></h1>






</div>



</div>


</div>

{/* -------flex end------- */}


</div>
{/* -left end--- */}



{/* -right start-  */}



<div className=' sm:mt-[40px] lg:mt-[10px] lg:col-span-7 sm:col-span-12 '>


<div className=' text-center'>

<h1 className='h1 w-[300px] mx-auto bg-yellow-600 p-2  rounded-2xl text-white'>
update {userinfo.name} Profile
</h1>




</div>



<div>

<div className='image-upload'>

<button
type='submit'
onClick={handleClickfile}
className='font-bold text-xl'

> <UploadOutlined  className='text-[44px]  bg-green-400 p-1 rounded-3xl mr-[22px]' /> Upload Image </button>


<input type="file" 
onChange= {handleChangeImages}

className='  hidden' ref={fileref} />


{/* --show image after upload image to cloudinary */}

<button

type='submit'
onClick={handleclick}
>send to cloudinary</button>

<div>

<img src={showimage} alt="" />

</div>




</div>


</div>



</div>



{/* -right end- */}



</div>
{/* --grid end-- */}

            
        </div>
    );
}

export default Userprofile;
