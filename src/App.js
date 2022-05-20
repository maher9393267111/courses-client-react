import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import {ToastContainer} from 'react-toastify';
import Navbar from './components/navbar';
import AdminDasboard from './pages/admin/dashboard';


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




</Routes>










     </div>
  
     </Router>
    </div>
  );
}

export default App;
