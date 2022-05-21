
import * as api from '../Api/index.js';
import { toast } from "react-toastify";
import { fetch_all_parentcategory } from './parentcategory';
const  {useSelector} = require('react-redux');



export const deleteParentCat = (id) => async (dispatch) => {
    try {

  


      const { data } = await api.deleteParentCategory(id); // delete parent category

toast.success(data.message);

      const resall = await api.fetchAllParentCategories();  // fetch all parent categories again after delete one
      localStorage.setItem( "parentcat", JSON.stringify(resall.data.parentcats));  // set all parent categories in local storage
  
      dispatch(fetch_all_parentcategory() ); // dispatch all parent categories to redux store 
    } catch (error) {
      console.log(error);
    }
  };