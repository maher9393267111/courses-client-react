import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import {ToastContainer} from 'react-toastify';
import Navbar from './components/navbar';
import AdminDasboard from './pages/admin/dashboard';
import Userprofile from './pages/userprofile';
import Parentcategory from './pages/admin/parentcategory';
import SubCategory from './pages/admin/subcategory';
import  Couurse from './pages/admin/course';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Router>

     <div>


<div>
<Navbar />

</div>


<ToastContainer theme="dark" />





<Routes>


<Route path='/' element={<Home />} />
<Route path='/register' element={<Register />} />
<Route path='/login' element={<Login />} />

<Route path='/admindash' element={<AdminDasboard />} />
<Route path='/userprofile/:id' element={<Userprofile />} />
<Route path='/parentcat-create' element={<Parentcategory />} />
<Route path='/sub-category' element={<SubCategory />} />
<Route path='/create-course' element={<Couurse />} />





</Routes>










     </div>
  
     </Router>
    </div>
  );
}

export default App;
