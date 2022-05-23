import React from 'react';
import  {useDispatch,useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import {Select} from '@chakra-ui/react'
import axios from "axios";
import {toast} from "react-toastify";
import {fetch_lectures} from '../../redux/lecture'


const Createform = () => {
const [name,setName] = useState("");
const [title,setTitle] = useState("");
const [desc,setDesc] = useState("");
const [url,setUrl] = useState("");
const [course,setCourse] = useState("");
const [extend,setExtend] = useState(false);
const [obj,setObj] = useState({});

const {allcourses}  = useSelector((state) => state.course)
const { userinfo, token } = useSelector((state) => state.user);

const dispatch = useDispatch();


const API = axios.create({ baseURL: "http://localhost:5000/api/lecture" });

API.interceptors.request.use((req) => {
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



const handlesubmit = async (e) => {
    e.preventDefault();
    console.log('course------------>',course);


    try {
      API.post("/create", {
     
        name,
      
title,
        desc,
        url,
        // duration,
       
        course,
      })
        .then((res) => {
          setObj(res?.data?.lecture);

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



// const handlesubmit = () => {




//     // setName("");
//     // setTitle("");
//     // setDesc("");
//     // setUrl("");
//     // setCourse("");
//     // setExtend(false);
// }


    return (
        <div className=' min-h-[355px] sm:mb-[144px] lg: mb-10'>
          <div>

<div className=' sm:text-center mt-4 ml-12 lg:text-left'>

<h1 className=' font-bold text-xl '>
create form  {course}   


</h1>

</div>



{/* // form inputs-- */}

<div className=' ml-8'>

<form>

<div>
<label className='pr-4 w-[150px] inline-block font-bold text-[17px]'> lecture name</label>

<input
 onChange={(e) => { setName(e.target.value)} }


placeholder='name' className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"/>

</div>


{/* -title  */}


<div>
<label className='pr-4 w-[150px] inline-block font-bold text-[17px]'> lecture title</label>

<input
 onChange={(e) => { setTitle(e.target.value)} }


placeholder='title' className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"/>

</div>



<div>
<label className='pr-4 w-[150px] inline-block font-bold text-[17px]'> lecture desc</label>

<input
 onChange={(e) => { setDesc(e.target.value)} }

placeholder='desc' className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"/>

</div>



<div>
<label className='pr-4 w-[150px] inline-block font-bold text-[17px]'> lecture link url</label>

<input 
 onChange={(e) => { setUrl(e.target.value)} }

placeholder='link' className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"/>

</div>


{/* ----select course -k */}


<div

className=' select-corse text-center '
>

<div
className=' w-[277px]'

>




<Select
   onChange={(e) => { setCourse(e.target.value); }}
      
      style={{ width: '200px' }}>
       
  
       {allcourses.map((sub) => {
                      return <option value={sub._id}>{sub.name}</option>;
                    })}


      </Select>

      </div>

</div>


{/* -bittm */}


<div>

<button
onClick= {handlesubmit}

className=' font-bold text-white bg-teal-500 p-2 rounded-full shadow-2xl w-[200px] mt-6 mb-6'>

Createlecture  

</button>

</div>



</form>



</div>




          </div>



        </div>
    );
}

export default Createform;
