import React from 'react';
import { Form, Input, InputNumber, Button,Select }from 'antd';
import {useState, useEffect} from 'react';
import axios from "axios";
import FileBase64 from "react-file-base64";

import { useDispatch,useSelector } from 'react-redux';
const { Option } = Select;


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
const [price, setPrice] = useState("");
const [instructor, setInstructor] = useState("");
const [category, setCategory] = useState("");
const [duration, setDuration] = useState("");
const [subcategory, setSubcategory] = useState("");

const [lecturesnumber, setLecturesnumber] = useState("");

const [togglebase, setTogglebase] = useState(false);

const { subcategories } = useSelector((state) => state.subcategory);

const { userinfo, token } = useSelector((state) => state.user);
const { allparentcategories } = useSelector((state) => state.parentcategory);



    const onFinish = (values) => {
        console.log(values);
       
        setName(values.name);
        setTitle(values.title);
        setInstructor(values.instructor);
        setDuration(values.duration);
        setCategory(values.category);
        setSubcategory(values.subcategory);
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




    return (
        <div className=' mt-[33px]'>
            <div>
                <div>

<div>
    <h1 className=' bg-lime-200 w-[200px]  p-2 rounded-2xl font-bold ml-4 '>
        Create Course Form {subcategory}
    </h1>
</div>

{/* -form-- */}


<div>


<div className='  w-[450px] mx-12 mt-12 '>

<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
    
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




 <Form.Item
    
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


 <Form.Item
    
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
<div

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


    </div>




{/* -subcategory- */}

<div

className='mb-6 flex gap-2 mt-6 text-center'
>

<div  className='font-bold w-20 mr-4'>
    Sub-Category 
</div>


<Form.Item name="subcategory" noStyle>
      <Select
   
      
      style={{ width: '200px' }}>
       
  
       {subcategories.map((sub) => {
                      return <Option value={sub._id}>{sub.name}</Option>;
                    })}


      </Select>
    </Form.Item>


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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
        </div>




        </Form>

</div>

</div>



                </div>
            </div>
        </div>
    );
}

export default Createcourse;
