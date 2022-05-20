import React from 'react';
import Adminsidebar from './adminsidebar';
import {Box,Flex,Wrap,WrapItem,Avatar,Button,HStack,Input} from '@chakra-ui/react';
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

<div>

<Box p={4} color='white'  paddingLeft={'30px'} fontSize={'22px'}  w={'100%'} bg='tomato'> ADMIN Dashboard</Box>

</div>




<div className='grid ga-4 grid-cols-12'>



{/* -------sidebar--- */}


<div className=' col-span-3  lg:col-span-2'>

<Adminsidebar />


</div>



{/* ---content- */}


<div className='col-span-9 ml-5'>

Content


</div>





</div>






            
        </div>
    );
}

export default Dashboard;
