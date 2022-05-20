import React from 'react';
import axios from 'axios';

import { useDispatch,useSelector } from 'react-redux';
import { useState, useEffect,useRef } from 'react';
import { fetch_userinfo } from '../../redux/user';
import {toast } from 'react-toastify';
import {UploadOutlined }
from '@ant-design/icons';

import { useParams } from 'react-router-dom';

import {Input,Button} from '@chakra-ui/react'

const Userprofile = () => {


    const { id } = useParams();
    console.log('id',id);
    const dispatch = useDispatch();
    const { userinfo,token } = useSelector((state) => state.user);


    const apiURL= `http://localhost:5000/api/auth/updateUser`;

    const API = axios.create({ baseURL: 'http://localhost:5000/api/auth' });

    API.interceptors.request.use((req) => {
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
        //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
      }
    
      return req;
    });




const fileref = useRef();
const [imagefile,setImagefile] = useState('');


const [showimage,setShowimage] = useState('');

const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');




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

  const imageobje ={}

    imageobje.secure_url = secure_url;
    imageobje.public_id = public_id;


  setShowimage(url)
  console.log("showimage------>", showimage);


// send this image to backend database to update user profile image

const userid =userinfo._id



const senddata = API.put(`/updateUser/${userid}`,{image:imageobje,name,email,password}).then(res => {
    
    console.log("res",res);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    dispatch(fetch_userinfo());
    toast.success(res.data.message);
    setImagefile('');
    //setShowimage('');
 

    }).catch(err => {
        console.log("err",err);
        toast.error(err.response.data.message);
    })





}




   


// click button to upload file

const handleClickfile = (event) => {
    fileref.current.click();
  };




    return (
        <div className='ml-[90px]'>

<div className=' text-center mb-[40px] mt-[25px] font-bold text-2xl'>

<h1 className='  w-[222px] bg-blue-400 mx-auto text-white p-3 rounded-3xl'>{userinfo.name} Profile</h1>

</div>


<div className=' grid grid-cols-12 mt-[60px]'>




{/* -----left---- */}
<div className=' lg:col-span-4 
sm:col-span-12'>


{/* ----flex image and info start0 */}

<div className=' flex  gap-8  sm:flex-row lg:flex-col'>





<div className=' w-[250px] h-[250px]'>

{userinfo.image ? <img src={userinfo.image.secure_url} alt=""/> : <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>}



</div>


<div className=' user-data'>

<div className='sm:text-center lg:text-left text-xl mb-[22px] font-bold'>
    <h1>
        User Information 
    </h1>
</div>

<div>

<h1 className='font-bold'>Name : <span className='bg-green-300 p-2 rounded-2xl  ml-3'>{userinfo.name}</span></h1>



<h1 className='font-bold'>Name : <span className='bg-green-300 p-2 rounded-2xl  ml-3'>{userinfo.email}</span></h1>




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

<div className='image-upload mt-6 mb-12'>

<button
type='submit'
onClick={handleClickfile}
className='font-bold text-xl'

> <UploadOutlined  className='text-[44px]  bg-green-400 p-1 rounded-3xl mr-[22px]' /> Upload Image </button>


<input type="file" 
onChange= {handleChangeImages}

className='  hidden' ref={fileref} />


{/* --show image after upload image to cloudinary */}

<Button
fontWeight={'bold'}
backgroundColor={'#00bcd4'}
marginLeft={'55px'}
rounded={'3xl'}



type='submit'
onClick={handleclick}
>send to cloudinary</Button>

<div>

<img src={showimage} alt="" />

</div>




</div>

{/* ---inputs  upload---- */}



<div className=' mt-6  '>

<div>

<form className=" text-center ">
          <div className="mb-[40px] mx-auto mt-[30px] w-[100%] text-center ml-[20px] mr-[22px]">
            <label
              class="block text-xl text-gray-700 font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              class="shadow appearance-none w-[54%] border   rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder={    userinfo.name}
            />
          </div>

          {/* -------email--- */}

          <div className="mb-[40px] mx-auto mt-[30px] w-[100%] text-center ml-[20px] mr-[22px]">
            <label
              class="block text-gray-700 text-xl font-bold mb-2"
              for="emaillabel"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              class="shadow appearance-none w-[54%] border rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emallabel"
              type="email"
              placeholder={    userinfo.email}
            />
          </div>

          {/* -pass--- */}

          <div className="mb-[40px] mx-auto mt-[30px] w-[100%] text-center ml-[20px] mr-[22px]">
            <label
              class="block text-gray-700 text-xl font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              class="shadow appearance-none w-[54%] border rounded-2xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
                placeholder={    userinfo.password}
            />
          </div>

          <div className=" text-[22px] font-bold ">
            <button
             onClick={handleclick}
              type="submit"
              className=" bg-green-600  mb-6 text-center text-white p-3 rounded-2xl hover:text-black"
            >
              {" "}
              click to Update{" "}
            </button>
          </div>
        </form>







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
