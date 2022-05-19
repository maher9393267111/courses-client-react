import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { fetch_userinfo } from '../redux/user';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();
    const {userinfo:{user}} = useSelector(state => state.user);

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
        dispatch(fetch_userinfo(res.data));
        setData(res.data);
        console.log('data in set----->',data);
        setMessage(res.data.message);
        setName('');
        setEmail('');
        setPassword('');
    })

    .catch(err => {
        console.log(err);
    })
}




    return (
        <div>
            <h1 className=''>Home page</h1>

<div>


<h1>form data {user.name}</h1>


<div 

>

<input placeholder='name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />


<input placeholder='emaik' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />


<input placeholder='pass' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />


<button  
onClick={handleSubmit}

> click</button>


</div>



</div>


        </div>
    );
}

export default Home;
