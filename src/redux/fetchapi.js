
import * as api from '../Api/index.js';
import { toast } from "react-toastify";
import { fetch_all_parentcategory } from './parentcategory';
// export const deleteParentCategory = (id) => dispatch => {
// console.log("id", id);
//     console.log("api", API);
//     API.delete(`/removeparentcat/${id}`)

//       .then((res) => {
//         console.log("res", res);
//         toast.success(
//           `Parent Category deleted Successfully`)
  
//         // then fetch all parent categories
//         setTimeout(() => {
//           API.get("/allParentCats")
//             .then((res) => {
//               console.log("res", res);
//               localStorage.setItem(
//                 "parentcat",
//                 JSON.stringify(res.data.parentcats)
//               );
//               dispatch(fetch_all_parentcategory());
//             })
//             .catch((err) => {
//               console.log("err", err);
//               toast.error(err.response.data.message);
//             });
//         }, 1500);
  
//       })
//       .catch((err) => {
//         console.log("err", err);
//         toast.error(err.response.data.message);
//       });
//   }
  


export const deleteParentCat = (id) => async (dispatch) => {
    try {
    
  
      const { data } = await api.deleteParentCategory(id);
      const resall = await api.fetchAllParentCategories();
      localStorage.setItem( "parentcat", JSON.stringify(resall.data.parentcats));
  
      dispatch(fetch_all_parentcategory() );
    } catch (error) {
      console.log(error);
    }
  };