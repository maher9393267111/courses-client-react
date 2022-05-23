import React from 'react';
import { useState, useEffect } from 'react';
import Lecture  from '../../components/lecture/createlecture'
import {Box} from '@chakra-ui/react';
const LecturePage = () => {
    return (
        <div>
            
            
            
            <div>
            
            <div>

<Box className=' bg-teal-300 text-2xl pl-6  font-bold' borderWidth="1px" borderColor="gray.200" borderStyle="solid" rounded="md" p="4" >

Lecture Page 
</Box>
            </div>



{/* --------create compoment for lecture page */}

<div>


<Lecture />




</div>




            
            </div>
            
            
            </div>
    );
}

export default LecturePage;
