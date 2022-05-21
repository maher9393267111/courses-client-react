import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateSub from "./updateSub";
import axios from "axios";
import { subcat_byid } from "../../redux/sub-cat";
import { useState, useEffect, useRef } from "react";
import { Box, Flex, Grid, Spacer } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { open_modal, close_modal } from "../../redux/diff";
const AllSub = () => {
  const dispatch = useDispatch();

  const { subcategories } = useSelector((state) => state.subcategory);

  const openModal = (subid) => {
    dispatch(subcat_byid(subid));

    dispatch(open_modal());
    console.log("open modal in subcategory");
  };

  const API = axios.create({ baseURL: "http://localhost:5000/api" });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("usertoken")) {
      req.headers.Authorization = `Bearer ${localStorage.getItem("usertoken")}`;
    }

    return req;
  });

  return (
    <div>
      <div>
        <div className="text-center  font-bold text-xl   bg-emerald-300 p-2 rounded-3xl">
          <h1>ALL SUB CATEGORIES{subcategories.length}</h1>
        </div>

        {/* ---map- */}

        <div>
          <div className=" relative    lg:right-[150px] w-[555px] mt-12">
            {subcategories &&
              subcategories.map((sub) => (
                <div className=" flex sm:gap-8 lg:gap-16 mt-12 mb-12">
                  {/* -image- */}
                  <div>
                    <div className="">
                      <img
                        className="  sm:h-[80px] sm:w-[120px]   lg:h-[122px] lg:w-[155px] rounded-3xl object-cover  "
                        src={sub.image}
                        alt=""
                      />
                    </div>
                  </div>

                  {/* -name---- */}

                  <div className="self-center">
                    <h1 className=" font-bold text-xl">{sub.name}</h1>
                  </div>

                  {/* -icons- */}
                  <div className=" self-center">
                    <div className=" flex gap-12">
                      {/* -delete-- */}

                      <div>
                        <DeleteOutlined className="font-bold text-3xl  hover:text-red-500" />
                      </div>

                      {/* -edit- */}

                      <div>
                        <EditOutlined
                          onClick={(e) => openModal(sub._id)}
                          className="font-bold text-3xl  hover:text-green-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

{/* ---update modal shoe--- */}


<div>

<UpdateSub />

</div>

    </div>
  );
};

export default AllSub;
