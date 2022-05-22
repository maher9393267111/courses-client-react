import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Button, Flex, Grid, Spacer} from '@chakra-ui/react';
import Createcourse from '../../components/coursecomp/createcourse';

const Course = () => {
    return (
      
<div>
    <div className=' '>

<Box as='div' className= "  bg-slate-400 text-2xl      pl-9 text-white h-[70px]" borderWidth='1px' rounded='lg' p={4}> Create Course page   </Box>


    </div>

{/* ---create comp--- */}

<div className='mt-14 mb-12 '>

<Createcourse />



</div>

{/* ---create comp end--- */}







</div>

    );
}

export default Course;
