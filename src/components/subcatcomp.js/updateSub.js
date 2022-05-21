import React from "react";
import Modalcomp from "../modal";
import MoadalComp from "../modal";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Select } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { fetch_all_subcategory,subcat_byid } from "../../redux/sub-cat";


import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
const UpdateSub = () => {
  const dispatch = useDispatch();

  const { singlesubcategory } = useSelector((state) => state.subcategory);

  const { userinfo, token } = useSelector((state) => state.user);
  const { allparentcategories } = useSelector((state) => state.parentcategory);
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [obj, setObj] = useState({});
  const [catid, setCatid] = useState("");
  const [togglebase, setTogglebase] = useState(false);
  const getFiles = (files) => {
    console.log(files);
    setImage(files.base64);
    console.log('get base64 files--->',image);
    setTogglebase(true);
    
  };

  const API = axios.create({ baseURL: "http://localhost:5000/api/subcat" });

  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clickeeed" );
    console.log("send images", image);

    try {
        // api/subcat/updateSubCat/
      API.post(`/up/${singlesubcategory._id}`, {
        image: image,
        name : name ? name : singlesubcategory.name,
        catid,
      })
        .then((res) => {
          setObj(res?.data?.subscat);
         

          toast.success(
            `Subcategory ${res.data.subcat.name}  created successfully`
          );

         
        })
        // then fetch all subcategories
        .then(() => {
          API.get("/allSubCats").then((res) => {
            console.log(
              "RES ALL SUB-CATEGORIES",
              res.data.allSubCats,
              "-----------",
              res
            );
            localStorage.setItem("subcat", JSON.stringify(res.data.allSubCats));
            dispatch(fetch_all_subcategory(res.data.allSubCats));
           // dispatch(subcat_byid(res.data.subscat._id));
          });
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div>
        <Modalcomp title={"Update Sub category"}>
          <div>
            <div>
              <div>
                <h1 className="mx-auto text-xl mb-6 bg-green-400 text-center p-2 text-white ">
                  Update subcategory Form 
                   {/* {name} */}
                </h1>
              </div>

              <div className="  grid grid-cols-12">
                {/* -left- */}

                <div className=" col-span-5">
                  <h1 className=" font-bold bg-teal-400 w-[133px] rounded-3xl text-center">
                    {singlesubcategory.name}
                  </h1>
                  <div>

                      { !togglebase &&
                    <img
                      className="  w-28
        mt-6
        mb-6 h-20 rounded-3xl object-cover"
                      src={  singlesubcategory.image }
                      alt=""
                    />
                    
                    }

{ togglebase && 

<img
                      className="  w-28
        mt-6
        mb-6 h-20 rounded-3xl object-cover"
                      src={ image }
                      alt=""
                    />

}
                  </div>
                </div>

                {/* -right- */}
                <div className=" col-span-7">
                  <form>
                    <input

onChange={(e) => setName(e.target.value)}


                      type="text"
                      placeholder={singlesubcategory.name}
                      className="   rounded-3xl border-2 mt-5 mb-6 text-center  focus:border-2  focus:outline-2 focus:outline-blue-400  border-blue-500"
                    />


<div>

<div className=" mt-5">
                <FileBase64
                  multiple={false}
                  onDone={getFiles}
                  className="hidden mt-12"
                //   ref={fileref}
                />
              </div>



</div>




 {/* -select-- */}
 <div>
                <div>
                  {/* fetch_all_subcategory */}

                  <Select onChange={(e) => setCatid(e.target.value)}>
                    {allparentcategories.map((item) => {
                      return <option value={item._id}>{item.name}</option>;
                    })}
                  </Select>
                </div>
              </div>


{/* -button-- */}


<div>

<button

onClick={handleSubmit}

>
    Update
</button>

</div>

                  </form>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </Modalcomp>
      </div>
    </div>
  );
};

export default UpdateSub;
