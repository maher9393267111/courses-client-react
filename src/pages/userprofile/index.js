import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Userprofile = () => {



    const { id } = useParams();
    console.log('id',id);
    const dispatch = useDispatch();
    const { userinfo } = useSelector((state) => state.user);

    return (
        <div>

<div>

<h1>User Profile</h1>

</div>

<div>

<h1>{userinfo.name}</h1>

</div>



            
        </div>
    );
}

export default Userprofile;
