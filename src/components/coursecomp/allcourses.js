import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { open_modal, close_modal } from "../../redux/diff";
import { course_byid } from "../../redux/course";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Updatecourse from "./updatecourse";
const Allcourses = () => {
  const dispatch = useDispatch();
  const { allcourses } = useSelector((state) => state.course);

  // open modal

  const openModal = (courseid) => {
    dispatch(course_byid(courseid));

    dispatch(open_modal());
    console.log("open modal in from allcourses");
  };

  return (
    <div>
      <div>
        <div className=" mt-8 text-center font-bold">
          <h1 className=" bg-teal-300 mx-auto p-2 w-[12rem] rounded-full text-xl">
            AllCourses1
          </h1>
        </div>

        <div>
          <div>
            <div className=" mt-4 ml-4 font-bold text-[1.1rem]">
              <h1>all courses number : {allcourses?.length}</h1>
            </div>

            {/* all map- */}

            <div>
              {allcourses &&
                allcourses.map((course) => (
                  <div>
                    <div className="ml-7 mb-6 grid grid-cols-12">
                      {/* ----name- */}
                      <div className=" self-center mr-3   col-span-5">
                        <h1 className=" font-bold  pb-5">
                          name:{" "}
                          <span className="  bg-green-200 rounded-full p-2">
                            {" "}
                            {course.name.slice(1, 20)}{" "}
                          </span>
                        </h1>

                        <h1 className="mt-3 font-bold">
                          subCategory{" "}
                          <span className=" bg-teal-500 p-2 rounded-full text-white">
                            {course.subcategory.name}
                          </span>
                        </h1>
                      </div>

                      {/* -image- */}

                      <div className=" col-span-4 ">
                        <div className=" w-20 h-20">
                          <img
                            className=" w-full h-full object-cover"
                            src={course.image}
                            alt=""
                          />
                        </div>
                      </div>

                      {/* -icons- */}

                      <div className=" self-center col-span-2">
                        <div className=" flex  gap-6">
                          <h1 className=" font-bold text-xl hover:text-red-500">
                            <DeleteOutlined />
                          </h1>

                          <h1 className=" font-bold text-xl  hover:text-green-400">
                            <EditOutlined
                              onClick={(e) => openModal(course._id)}
                            />
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        
{/* -modal- */}
< Updatecourse />


      </div>
    </div>
  );
};

export default Allcourses;
