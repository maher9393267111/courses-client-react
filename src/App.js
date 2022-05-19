import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import {ToastContainer} from 'react-toastify';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <div>

<h1 className=' text-2xl p-4 bg-blue-300 text-center font-bold'>Courses App</h1>

<ToastContainer theme="dark" />


<Router>


<Routes>


<Route path='/' element={<Home />} />
<Route path='/register' element={<Register />} />
<Route path='/login' element={<Login />} />




</Routes>




</Router>





     </div>
    </div>
  );
}

export default App;
