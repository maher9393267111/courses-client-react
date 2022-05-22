import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modalcomp from '../modal';
const Updatecourse = () => {

    const { singlecourse } = useSelector((state) => state.course);
    const dispatch = useDispatch();
    


    return (
        <div>
            <div>

<Modalcomp  title=' Update Course'>

update course component

{singlecourse && singlecourse.name}


</Modalcomp>





            </div>
        </div>
    );
}

export default Updatecourse;
