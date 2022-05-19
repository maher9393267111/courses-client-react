import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { fetch_userinfo } from '../redux/user';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {

 
    const dispatch = useDispatch();
    const {userinfo} = useSelector(state => state.user);





    return (
        <div>
            <h1 className=''>Home page</h1>

<div>


<h1>form data {userinfo.name}</h1>




</div>


        </div>
    );
}

export default Home;
