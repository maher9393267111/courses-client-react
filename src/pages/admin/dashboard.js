import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {

    const dispatch = useDispatch();
    const { userinfo } = useSelector((state) => state.user);
    const navigate = useNavigate();


    useEffect(() => {
        console.log('userinfo',userinfo);

        if(userinfo.role === 'user'){

navigate('/');
        }

    }, [userinfo]);



    return (
        <div>
<h1> Admin Dashboard</h1>

<h2>{userinfo.role}</h2>


<div>


</div>

            
        </div>
    );
}

export default Dashboard;
