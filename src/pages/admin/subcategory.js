import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";


import FileBase64 from 'react-file-base64';
import axios from "axios";

import { Box, Button, Flex, Grid, Spacer } from "@chakra-ui/react";
import { Input } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Parentcategory = () => {
  const fileref = useRef();
  const dispatch = useDispatch();
  const { userinfo, token } = useSelector((state) => state.user);
  const { currentcreted } = useSelector((state) => state.parentcategory);
  const [imageshow, setImageshow] = useState("");

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState([]);


  const API = axios.create({ baseURL: "http://localhost:5000/api/subcat" });

  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
  });


  const  getFiles =( files)=>{
    console.log(files);
  
    // set all files.base64 into array

    const arr = [];
    for (let i = 0; i < files.length; i++) {
      arr.push(files[i].base64);
    }

    setImage(arr);
    console.log("handle image change-->", image);
    
  
  
  }
  



  const sendimages = async (e) => {
    e.preventDefault();
    console.log("send images",image);
  
  
    try {
  
      API.post("/prac", {
        image: image,
      }).then((res) => {
        console.log(res);
      });
  
    } catch (error) {
  
      console.log(error);
    }
  
  
  };
  
  
 






 

  return (
    <div>
      
<div>
<h1>sub Category</h1>
</div>

<div>

<FileBase64
        multiple={ true }
        onDone={ getFiles } /> 



<button
onClick={sendimages} 

>upload</button>

</div>


    </div>
  );
};

export default Parentcategory;
