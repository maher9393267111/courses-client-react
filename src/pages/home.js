import React from 'react';
import axios from 'axios';
import MyContext from '../redux/context/index'
import { useState,useEffect,useContext } from 'react';
import { fetch_userinfo } from '../redux/user';
import { useDispatch,useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import AllLectures from '../components/lecture/allLectures';

const Home = () => {


    const {hello} = useContext(MyContext)
 
    const dispatch = useDispatch();
    const {userinfo} = useSelector(state => state.user);

const { allcourses } = useSelector(state => state.course);


let pageSize = 5
const [entries, setEntries] = useState([])
const [offset, setOffset] = useState(0)
const [hasMore, setHasMore] = useState(true)
const [scroll, setScroll] = useState(false)

// InfiniteScroll only for visualization since all files are loaded async at once.
const fetchData = async () => {
  try {      
    const newEntries = allcourses.slice(0, offset + 5);      
    setEntries(newEntries)
    setOffset((prevOffset) => prevOffset + pageSize)      
    entries.length === allcourses.length && setHasMore(false)             
  } catch (error) {
    console.log(error)
  }
}


useEffect(() => {

  
       
        

        fetchData()
      
    
  }, [])




    return (
        <div className=' m-6'>


{/* -container- */}
<div className=' ml-4'>

<div className=' mb-12 bg-green-300 p-4 font-bold text-2xl'>
<h1 className=' '>Home page  {hello}-- {entries.length}</h1>
</div>

     
{/* -contetnt----- */}
<div>

<InfiniteScroll
          dataLength={entries.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >

<div className=' grid  gap-4   grid-cols-12'>


{entries.map((course) => (
    
<div className=' mb-[12px]  sm:col-span-6  lg:col-span-4'>
{/* -------- */}
<div>

{/* ---image- */}

<div className=' w-[220px] h-[200px]'>

<img className=' w-full h-full' src={course.image} alt="" />


</div>


{/* -info */}
<div>
<div className='text-center mt-6 break-words w-[220px]'>

    <h1>{course.name.slice(0,course.name.length-10)}</h1>
</div>

</div>




</div>



</div>


))}


    
</div>
</InfiniteScroll>



<div>











</div>







</div>

</div>


        </div>
    );
}

export default Home;
