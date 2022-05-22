import React from 'react';
import { Form, Input, InputNumber, Button }from 'antd';
import {Select} from '@chakra-ui/react'
import {useState, useEffect} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import FileBase64 from "react-file-base64";
import {AspectRatio} from '@chakra-ui/react';
import {fetch_courses} from '../../redux/course'

import { useDispatch,useSelector } from 'react-redux';
import Allcourses from './allcourses';
const { Option } = Select;
const { TextArea } = Input;

//  http://localhost:5000/api/course/upcourse

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  




const Createcourse = () => {

const [name, setName] = useState("");
const [title, setTitle] = useState("");
const [image, setImage] = useState("");
const [desc, setDesc] = useState("");
const [price, setPrice] = useState(0);
const [instructor, setInstructor] = useState("");
const [category, setCategory] = useState("");
const [duration, setDuration] = useState("");
const [subcategory, setSubcategory] = useState("");
const [obj, setObj] = useState({});

const [lecturesnumber, setLecturesnumber] = useState("");

const [togglebase, setTogglebase] = useState(false);

const { subcategories } = useSelector((state) => state.subcategory);

const { userinfo, token } = useSelector((state) => state.user);
const { allparentcategories } = useSelector((state) => state.parentcategory);

const { namecourse } = useSelector((state) => state.course);
const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log(values);
       
        setName(values.name);
        setTitle(values.title);
        setInstructor(values.instructor);
        setDuration(values.duration);
        setPrice(values.price);
        setCategory(values.category);
    //    setSubcategory(values.subcategory);
      };

    const layout = {
        labelCol: {
          span: 3,
         
        },
        wrapperCol: {
          span: 16,
        },
      };


// handleimage change


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



const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("send images", image);

    try {
      API.post("/upcourse", {
        image: image,
        name,
      
title,
        desc,
        price,
        duration,
        instructor,
        subcategory
      })
        .then((res) => {
          setObj(res?.data?.course);

          toast.success(
            ` course ${res.data.course.name}  created successfully`
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
        <div className=' mt-[33px]'>
            <div>
                <div>

<div>
    <h1 className=' bg-lime-200 w-[200px]  p-2 rounded-2xl font-bold ml-4 '>
        Create Course Form 
price : {price}
    </h1>

    <h1>
    {/* <AspectRatio maxW='300px' ratio={2}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio> */}

    </h1>
</div>

{/* -form-- */}


<div className=' grid sm:gap-12 lg:gap-4 grid-cols-12 justify-between'>


{/* ------left side form-- */}


<div className='sm:col-span-12   lg:col-span-5  w-[450px] mx-12 mt-12     sm:mt-12 '>

<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
    onChange={(e) => { setName(e.target.value); }}
         name={[ 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


{/* ----title- */}


      <Form.Item
       onChange={(e) => { setTitle(e.target.value); }}
    name={[ 'title']}
   label="title"
   rules={[
     {
       required: true,
     },
   ]}
 >
   <Input />
 </Form.Item>


{/* -price- */}

<div>

<input
onChange={(e) => { setPrice(e.target.value); }}
className=''

type="number" />

</div>



{/* 
<Form.Item 
    name={[ 'price']}
    
    onChange={(e) => { {setPrice(e.target.value); 
    console.log('price changee--->',price);
    
    }}}

label="course price">
        <InputNumber />
      </Form.Item> */}



 <Form.Item
       onChange={(e) => { setInstructor(e.target.value); }}
    name={[ 'instructor']}
   label="instructor"
   rules={[
     {
       required: true,
     },
   ]}
 >
   <Input />
 </Form.Item>


 <>
 {/* {desc} */}
    <TextArea
    onChange={(e) => setDesc(e.target.value)}
    
    rows={4} placeholder={desc} />
    <br />
    <br />
 
  </>




 <Form.Item
    onChange={(e) => { setDuration(e.target.value); }}
    
    name={[ 'duration']}
   label="duration"
   rules={[
     {
       required: true,
     },
   ]}
 >
   <Input />
 </Form.Item>

{/* ----category--- */}
{/* <div

className='mb-6 flex gap-2 mt-6 text-center'
>

<div  className='font-bold mr-4'>
    category
</div>


<Form.Item name="category" noStyle>
      <Select
      
      style={{width: '200px'}}
      >
    
      {allparentcategories.map((item) => {
                      return <Option value={item._id}>{item.name}</Option>;
                    })}


     </Select>
    </Form.Item>


    </div> */}




{/* -subcategory- */}

<div

className='mb-6 flex gap-2 mt-6 text-center'
>

<div  className='font-bold w-20 mr-4'>
    Sub-Category  {subcategory}
</div>


{/* <Form.Item name="subcategory" noStyle> */}
      <Select
   onChange={(e) => { setSubcategory(e.target.value); }}
      
      style={{ width: '200px' }}>
       
  
       {subcategories.map((sub) => {
                      return <option value={sub._id}>{sub.name}</option>;
                    })}


      </Select>
    {/* </Form.Item> */}


    </div>


{/* -----upload image- */}


<div className='mt-4'>

    <div>
        <h1>Upload Image</h1>
    </div>

<div className=" mt-5">
                <FileBase64
                  multiple={false}
                  onDone={getFiles}
                  className="hidden mt-12"
                //   ref={fileref}
                />


{/* show image pracddd*/}

<div
className='w-12 h-12 mt-3 mb-3 justify-center'
>
    <img src={image} alt="" />
</div>


              </div>



</div>




<div className='pb-24'>


      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button
         onClick={ handleSubmit}
        type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
        </div>




        </Form>

</div>

{/* ----right side  allcourses---- */}


<div className='sm:col-span-12 lg:col-span-7 sm:min-h-[300px] mb-12 '>

<div>


<Allcourses/>

    
</div>

</div>


</div>



                </div>
            </div>
        </div>
    );
}

export default Createcourse;
