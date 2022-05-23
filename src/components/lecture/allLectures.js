import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { fetch_lectures, update_execute } from "../../redux/lecture";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const AllLectures = () => {
  const { allectures } = useSelector((state) => state.lecture);
  const { token, userinfo } = useSelector((state) => state.user);
  const [pageCount, setPageCount] = useState(20);

  const [page, setPage] = useState(1);
const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const API = axios.create({ baseURL: "http://localhost:5000/api/lecture" });

  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
  });

  // handle  update execute with specific id of lecture

  const handleUpdateExecute = async (id) => {
    dispatch(update_execute({ exec: true, id }));
  };


// paginate nu,ber page change

  const changePage = ({ selected }) => {

if (selected === 0) {
  setPageNumber(1);
  console.log("pageNumber is zero i well plus itttt to one--->",pageNumber);
} else {

    setPageNumber(selected);
    
    console.log("pageNumber selectedddd is change------->", pageNumber);
}
  };



// refetch all lectures when page change

    useEffect(() => {

API.get(`/getall?page=${pageNumber}`).then((res) => {
    console.log("res.data", res.data);
    setPageCount(res.data.numberOfPages);
    localStorage.setItem("lectures", JSON.stringify(res.data.lectures));
dispatch(fetch_lectures());
    }).catch((err) => {
        console.log("err", err);
        toast.error("Error fetching lectures");
    });

console.log("pageNumber in useeffect----->", pageNumber);
    }, [pageNumber]);



  const handleremove = async (lectureid) => {
    //   e.preventDefault();
    console.log("course------------>", lectureid);

    try {
      API.delete(`/remove/${lectureid}`)
        .then((res) => {
          toast.success(res.data.message);
        })
        // then fetch all courses
        .then(() => {
          API.get("/getall").then((res) => {
            console.log(
              "RES ALL lectures",
              res.data.lectures,
              "-----------",
              res
            );
            localStorage.setItem("lectures", JSON.stringify(res.data.lectures));
            dispatch(fetch_lectures());
          });
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className=" sm:min-h-[200px] lg:h-auto">
      <div>
        <div className=" font-bold text-center text-xl  lg:mt-12 mb-12">
          <h1 className=" w-[220px] mx-auto bg-green-300 p-2 rounded-full">
            all lectures  {pageNumber}
          </h1>
        </div>

        <div className=" sm:text-center lg:mx-6 mb-24">
          {allectures.map((lecture) => (
            <div className=" mb-6">
              <div className=" flex justify-between font-bold ">
                {/* url---- */}

                <div>
                  <iframe src={lecture.url}></iframe>
                </div>

                {/* ----name---- */}
                <div className=" ml-6 self-center">
                  <h1 className=" mb-4 text-left">
                    <span className="    bg-teal-300    inline-block ">
                      lecName :{" "}
                    </span>{" "}
                    {lecture.name}
                  </h1>

                  <h1 className="text-left" style={{}}>
                    {/* id  {lecture._id}  */}
                    <span className=" bg-green-200   ">courseName: </span>{" "}
                    {lecture.course.name}
                  </h1>
                </div>

                {/* -=icons--- */}

                <div className=" w-[102px] self-center mr-[30px]">
                  <div>
                    <div>
                      <EditOutlined
                        onClick={() => handleUpdateExecute(lecture._id)}
                        className="font-bold text-2xl mb-4 hover:text-green-600"
                      />
                    </div>

                    <div>
                      <DeleteOutlined
                        onClick={() => handleremove(lecture._id)}
                        className="font-bold text-2xl    hover:text-red-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

{/* --------paginatior-------- */}


<div className=" sm:justify-center  mb-[40px]  sm:flex sm:gap-6  ">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />

     
        </div>






      </div>
    </div>
  );
};

export default AllLectures;
