import React from 'react';
import { Link } from 'react-router-dom';

const Adminsidebar = () => {
    return (
        <div className='sidebar-admin mt-5 ml-5 h-[444px] bg-slate-200'>

           <div className='text-md text-center pt-3  font-bold'>
               
               adminsidebar
               
               </div> 


{/* -all links- */}

<div className=''>

<div>


<ul className='text-center   font-semibold'>

<li className='m'>
    <Link to={'/parentcat-create '}>
    
   

create parent-category

</Link>


    
</li>
<li className='m'>
    <Link to={'/sub-category'}>
create category


</Link>
</li>
<li>

</li>

<li className='m'>
    <Link to={'/create-course'}>
create Course


</Link>
</li>




<li className='m'>
    <Link to={'/lecture'}>

create lecture

</Link>

</li>
<li>

</li>
<li className='m'>


create.....

</li>




</ul>





</div>








</div>





        </div>
    );
}

export default Adminsidebar;
