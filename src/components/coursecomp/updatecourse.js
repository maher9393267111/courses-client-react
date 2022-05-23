import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetch_courses} from '../../redux/course'
import Modalcomp from '../modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import FileBase64 from "react-file-base64";
import { FormControl,FormLabel,Input,Select,Box,Grid,Spacer } from '@chakra-ui/react';
const Updatecourse = () => {

    const { singlecourse } = useSelector((state) => state.course);
    const dispatch = useDispatch();
    
    const { subcategories } = useSelector((state) => state.subcategory);

    const { userinfo, token } = useSelector((state) => state.user);

const [name, setName] = useState("");
const [title, setTitle] = useState("");
const [image, setImage] = useState("");
const [subcategory, setSubcategory] = useState("");
const [togglebase, setTogglebase] = useState(false);
const [obj , setObj] = useState({});
const [desc, setDesc] = useState("");
const [price, setPrice] = useState(0);
const [instructor, setInstructor] = useState("");
const [duration, setDuration] = useState("");



const getFiles = (files) => {
    console.log(files);
    setImage(files.base64);
    console.log('get base64 files--->',image);
    setTogglebase(true);
    
  };


// url for api
//  http://localhost:5000/api/course/upcourse
const API = axios.create({ baseURL: "http://localhost:5000/api/course" });

API.interceptors.request.use((req) => {
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



// hannle submit

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("send images", image);

    try {
      API.put(`/updatecourse/${singlecourse?._id}`, {
        image: image ? image : singlecourse.image,
        name: name ? name : singlecourse.name,
      
title: title ? title : singlecourse.title,
        desc:desc ? desc : singlecourse.desc,
        price: price ? price : singlecourse.price,
        duration : duration ? duration : singlecourse.duration,
        instructor : instructor ? instructor : singlecourse.instructor,
        subcategory : subcategory ? subcategory : singlecourse.subcategory,
      })
        .then((res) => {
          setObj(res?.data?.course);

          toast.success(
            ` course ${res.data.course.name}  updated successfully`
          );
        })
        // then fetch all courses
        .then(() => {
          API.get("/allcourses").then((res) => {
            console.log(
              "RES ALL Courses",
              res.data.courses,
              "-----------",
              res
            );
            localStorage.setItem("courses", JSON.stringify(res.data.courses));
            dispatch(fetch_courses());
          });
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };







    return (
        <div>
            <div>

<Modalcomp  title=' Update Course'>

<div
className='P-3 mb-[5px] bg-teal-400 text-white p-4 text-xl  shadow-xl  hover:text-black'

>

update course component
</div>




<div>


{/* ---show course info- */}

<div className='flex  '>

{/* -name- */}
<h1
className='font-bold pb-3 self-center  rounded-xl  bg-green-200 w-28 text-center '
>{singlecourse && singlecourse?.name}</h1>

{/* --iamge- */}
<div
className=' w-[55px] h-[55px] mx-auto mt-4 mb-6 '

>

    <img 
    className=' rounded-[50%] w-full h-full object-cover'
    src={singlecourse?.image} alt="" />
</div>


</div>



{/* -----update course form -- */}

<div>


{/* --------form start- */}
<div>


<div className=' flex'>




<FormControl
width='222px'
isRequired>
  <FormLabel htmlFor='coursename'>course name</FormLabel>
  <Input
  onChange= {(e)=>setName(e.target.value)}
  
  id='name' placeholder=' name' />

{name}

</FormControl>




<FormControl
width='222px'

isRequired>
  <FormLabel htmlFor='course title'>course title</FormLabel>
  <Input
  onChange={(e)=>setTitle(e.target.value)}
  
  id='first-name' placeholder='title' />
</FormControl>


</div>


{/* -------- */}


{/* -select sub category and upload image flex */}


<div>

{/* ----select--- */}


<div>

    {/* {subcategory} */}

<Select
   onChange={(e) => { setSubcategory(e.target.value); }}
      
      style={{ width: '200px' }}>
       
  
       {subcategories.map((sub) => {
                      return <option value={sub._id}>{sub.name}</option>;
                    })}


      </Select>






</div>



{/* ----button- */}


<div>

<button
type='submit'
onClick={handleSubmit}
>upload </button>

</div>



</div>





<div>









</div>





</div>


{/* ---form end--- */}







</div>





</div>




</Modalcomp>


            </div>
        </div>
    );
}

export default Updatecourse;
