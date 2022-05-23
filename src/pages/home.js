import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { fetch_userinfo } from '../redux/user';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {



 
    const dispatch = useDispatch();
    const {userinfo} = useSelector(state => state.user);

const { allcourses } = useSelector(state => state.course);



    return (
        <div className=' m-6'>


{/* -container- */}
<div className=' ml-4'>

<div className=' bg-green-300 p-4 font-bold text-2xl'>
<h1 className=''>Home page</h1>
</div>

     
{/* -contetnt----- */}
<div>


<div>











</div>







</div>

</div>


        </div>
    );
}

export default Home;
