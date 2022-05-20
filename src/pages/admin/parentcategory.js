import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { fetch_all_parentcategory } from "../../redux/parentcategory";
import Allparentcategories from "../../components/parentcat/allparentcategories";

import axios from "axios";

import { Box, Button, Flex, Grid, Spacer } from "@chakra-ui/react";
import { Input } from "antd";
import { toast } from "react-toastify";

const Parentcategory = () => {
  const fileref = useRef();
  const dispatch = useDispatch();
  const { userinfo, token } = useSelector((state) => state.user);
  const { currentcreted } = useSelector((state) => state.parentcategory);
  const [imageshow, setImageshow] = useState("");

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleClickfile = (event) => {
    event.preventDefault();
    fileref.current.click();
  };

  const handleChangeImages = (event) => {
    const file = event.target.files[0];
    console.log(file);

    setImage(file);
    console.log("handle image change-->", file);
  };

  const API = axios.create({ baseURL: "http://localhost:5000/api/parentcat" });

  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mystory123");

    formData.append("folder", "/parentcat");

    const uploadRes1 = await axios.post(
      "https://api.cloudinary.com/v1_1/maher9911133/image/upload",
      formData
    );

    const { url, secure_url, public_id } = uploadRes1.data;

    const imageobje = {};

    imageobje.secure_url = secure_url;
    imageobje.public_id = public_id;
    console.log("imageobje->", imageobje);

    e.preventDefault();
    console.log("name", name);
    console.log("image", image);

    API.post("/createParentCat", { name, image: imageobje })
      .then((res) => {
        console.log("res", res);
        setImageshow(res.data.parentcat.image.secure_url);

        toast.success(
          `Parent Category${res.data.parentcat.name} Created Successfully`
        );
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err.response.data.message);
      });

    // then fetch all parent categories

    setTimeout(() => {
      API.get("/allParentCats")
        .then((res) => {
          console.log("res", res);
          localStorage.setItem(
            "parentcat",
            JSON.stringify(res.data.parentcats)
          );
          dispatch(fetch_all_parentcategory());
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err.response.data.message);
        });
    }, 1500);
  };

  return (
    <div>
      <div>
        <Box
          p={4}
          color="white"
          h={"70px"}
          paddingLeft={"30px"}
          fontSize={"22px"}
          w={"100%"}
          bg="tomato"
        >
          {" "}
          Parent Category Create
        </Box>

        <div>
          {/* -------form---- */}

          <div className="text-center">
            <div className="h-[400px] mt-4 mx-auto w-[300px] border-2 shadow-2xl ">
              {/* -form header- */}

              <div>
                <h1 className="mt-6 mb-12 text-xl font-bold">
                  Create Parent Category
                </h1>
              </div>

              <form className="mt-4">
                <div className=" mx-4">
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    className="   
      outline outline-1 outline-blue-200 
 
 

"
                    placeholder="Enter Parent Category Name"
                  />
                </div>

                {/* image upload--- */}

                <div>
                  <div className="image-upload mt-6 mb-12">
                    <button
                      type="submit"
                      onClick={handleClickfile}
                      className="font-bold text-xl"
                    >
                      {" "}
                      <UploadOutlined className="text-[44px]  bg-green-400 p-1 rounded-3xl mr-[22px]" />{" "}
                      Upload Image{" "}
                    </button>

                    <input
                      type="file"
                      onChange={handleChangeImages}
                      className="hidden"
                      ref={fileref}
                    />

                    <div className=" w-[75px] h-[20px]">
                      <img src={imageshow} alt="" />
                    </div>
                  </div>

                  {/* -----end image upload---  */}
                </div>

                <div>
                  <button 
                  className=" bg-blue-400 text-white p-3 w-[140px] rounded-2xl text-md hover:bg-blue-800"
                  
                  onClick={handleSubmit}>Create </button>
                </div>
              </form>
            </div>

            {/* ---div form-end- */}



<div className=" mt-5 mb-11" >

<Allparentcategories />

</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Parentcategory;
