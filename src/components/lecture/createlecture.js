import React from 'react';
import { useState, useEffect } from 'react';
import AllLectures from './allLectures';
import CreateForm from './createform';
const Createlecture = () => {
    return (
        <div>
           <div>


{/* ---gid  create and all- */}
<div className=' -200 grid grid-cols-12'>

{/* -----crete form here */}


< div className=' sm:col-span-12 lg:col-span-4 form-wrapper'>

<CreateForm />



</div>


{/* -all lectures component */}


<div className='sm:col-span-12  lg:col-span-8'>

<AllLectures/>




</div>






</div>




           </div>
        </div>
    );
}

export default Createlecture;
