import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { fetch_userinfo } from '../../redux/user';
import { useDispatch,useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
const Register = () => {




    const dispatch = useDispatch();
    const {userinfo} = useSelector(state => state.user);
    const navigate = useNavigate();

const [data, setData] = useState([]);

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');





const handleSubmit = (e) => {
    console.log(name,email,password);
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
    })
    .then(res => {
        console.log(res);
        // save  res.data in local storage
        localStorage.setItem('usertoken',res.data.token);
     const savelocal =  localStorage.setItem('user',JSON.stringify(res.data.user));
        dispatch(fetch_userinfo());
      // dispatch(fetch_userinfo(JSON.parse(localStorage.getItem('user')))); // in same time update data in redux store


if(res.data.message){

    toast.success(res.data.message);

}


setTimeout(() => {
    navigate('/');
}, 2000);


      //  setData(res.data);
       // console.log('data in set----->',data);
        setMessage(res.data.message);
        setName('');
        setEmail('');
        setPassword('');
    })

    .catch(err => {
        console.log(err);
        toast.error(err.response.data.msg);
      
    })
}





    return (
        
<div>


<div>
<h1>Register Page {userinfo.name} </h1>
</div>


<div className=' mx-auto  w-[466px] h-[555px]    shadow-2xl'>


<div className=' text-xl font-bold text-center relative top-[40px] mb-[90px] mt-[22px]'>

    <h1 className=' bg-blue-300 w-[222px] mx-auto p-2 rounded-2xl hover:text-3xl hover:text-white transition-all duration-400'> Register Form</h1>
</div>


<form className=' text-center '>


<div className='mb-[40px] mx-auto mt-[30px] w-[100%] text-center ml-[20px] mr-[22px]'>

<label class="block text-xl text-gray-700 font-bold mb-2" for="name">
        Name
      </label>
      <input
      onChange={(e) => setName(e.target.value)}
      valuye={name}
      class="shadow appearance-none w-[54%] border   rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name"/>


</div>



{/* -------email--- */}

<div className='mb-[40px] mx-auto mt-[30px] w-[100%] text-center ml-[20px] mr-[22px]'>

<label class="block text-gray-700 text-xl font-bold mb-2" for="emaillabel">
        Email
      </label>
      <input
      onChange={(e) => setEmail(e.target.value)}
      valuye={email}
      class="shadow appearance-none w-[54%] border rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emallabel" type="email" placeholder="Email"/>


</div>


{/* -pass--- */}


<div className='mb-[40px] mx-auto mt-[30px] w-[100%] text-center ml-[20px] mr-[22px]'>

<label class="block text-gray-700 text-xl font-bold mb-2" for="password">
    Password
      </label>
      <input
      onChange={(e) => setPassword(e.target.value)}
      valuye={password}
      class="shadow appearance-none w-[54%] border rounded-2xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="password"/>


</div>




<div className=' text-[22px] font-bold '>

<button 
onClick={handleSubmit}
type="submit"
className=' bg-green-600 text-center text-white p-3 rounded-2xl hover:text-black'> click to Register</button>


</div>








</form>




    </div>




</div>



    );
}

export default Register;
