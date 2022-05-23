import React from 'react';
import {DeleteOutlined,EditOutlined} from '@ant-design/icons';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { fetch_lectures } from '../../redux/lecture';
import { toast } from 'react-toastify';
const AllLectures = () => {

const {allectures}  = useSelector((state) => state.lecture)
const {token, userinfo}  = useSelector((state) => state.user)

const dispatch = useDispatch();



const API = axios.create({ baseURL: "http://localhost:5000/api/lecture" });

API.interceptors.request.use((req) => {
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



const handleremove = async (lectureid) => {
 //   e.preventDefault();
    console.log('course------------>',lectureid);


    try {
      API.delete(`/remove/${lectureid}`)
        .then((res) => {
       

          toast.success(
            res.data.message
          );
        })
        // then fetch all courses
        .then(() => {
          API.get("/getall").then((res) => {
            console.log(
              "RES ALL lectures",
              res.data.lectures,
              "-----------",
              res
            );
            localStorage.setItem("lectures", JSON.stringify(res.data.lectures));
            dispatch(fetch_lectures());
          });
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };






    return (
        <div className=' sm:min-h-[200px] lg:h-auto'>
           <div>
               
               
               <div className=' font-bold text-center text-xl  lg:mt-12 mb-12'>

                  <h1 className=' w-[220px] mx-auto bg-green-300 p-2 rounded-full'>
                  all lectures
                      </h1> 
               </div>
               
               
<div className=' sm:text-center lg:mx-6 mb-24'>

     {allectures.map((lecture) => (
        
    <div>

<div className=' flex justify-between font-bold '>



{/* url---- */}

<div>
    <iframe src ={lecture.url}>



    </iframe>
</div>



{/* ----name---- */}
<div className=' ml-6 self-center'>
<h1 className=' mb-4 text-left'> 
<span className='    bg-teal-300    inline-block '>lecName : </span> {lecture.name}
</h1>

<h1 className='text-left' style={{}}>
    {/* id  {lecture._id}  */}
<span className=' bg-green-200   '>courseName: </span>  {lecture.course.name}
</h1>

</div>







{/* -=icons--- */}


<div className=' w-[102px] self-center mr-[30px]'>

<div>

<div>
<EditOutlined className='font-bold text-2xl mb-4 hover:text-green-600' />
</div>

<div>

<DeleteOutlined 

onClick= {() => handleremove(lecture._id)}
className='font-bold text-2xl    hover:text-red-700' />

</div>




</div>



</div>


</div>



      
    </div>
    

    ))} 
</div>


               
               </div> 



        </div>
    );
}

export default AllLectures;
