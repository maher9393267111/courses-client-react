import React from 'react';
import  {useDispatch,useSelector} from 'react-redux';

const Createform = () => {
    return (
        <div className=' min-h-[300px]'>
          <div>

<div className=' sm:text-center mt-4 ml-12 lg:text-left'>

<h1 className=' font-bold text-xl '>
create form


</h1>

</div>



{/* // form inputs-- */}

<div className=' ml-8'>

<form>

<div>
<label className='pr-4 w-[150px] inline-block font-bold text-[17px]'> lecture name</label>

<input placeholder='name' className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"/>

</div>


{/* -title  */}


<div>
<label className='pr-4 w-[150px] inline-block font-bold text-[17px]'> lecture title</label>

<input placeholder='title' className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"/>

</div>



<div>
<label className='pr-4 w-[150px] inline-block font-bold text-[17px]'> lecture desc</label>

<input placeholder='desc' className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"/>

</div>



<div>
<label className='pr-4 w-[150px] inline-block font-bold text-[17px]'> lecture link url</label>

<input placeholder='link' className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"/>

</div>



</form>



</div>




          </div>



        </div>
    );
}

export default Createform;
