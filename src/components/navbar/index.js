import React from 'react';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GrSearch} from 'react-icons/gr';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// import { Menu } from 'antd';

import {
    Box,
    Text,
    Grid,
    MenuList,
    MenuButton,
    Menu,
    MenuItem,
    SimpleGrid,
    Heading,
    Spacer,
    GridItem,
    Center,
    Flex,
    Wrap,
    WrapItem,
    Avatar,
    Button,
    HStack,
    Input
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [activeclass, setActiveclass] = useState('');
    const dispatch = useDispatch();

    const { userinfo,token } = useSelector((state) => state.user);


    // handleclicked class

    const handleclicked = (navname) => {
console.log(navname);
setActiveclass(navname);
console.log(activeclass);
      


    }

const [isOpen, setIsOpen] = useState(false);


    return (
        <div className=' navbar'>

<div className='w-[100%] grid grid-cols-12 h-[88px]  mx-4 mt-[10px] shadow-xl drop-shadow-lg rounded-2xl '>

{/* ------left side logo- */}

<div className='  col-span-3 '>

<div className='ml-[50px] flex gap-11  w-[100%] pt-[10px] h-[70px] rounded-full'>
  <Link to='/' >

<img  className=' h-[100%] rounded-full' src="https://previews.123rf.com/images/marylia17/marylia171706/marylia17170600025/79641527-vector-internet-learning-enseignement-logo-de-cours-en-ligne-ic%C3%B4ne.jpg" alt="" />

  </Link>
<h1 className=' w-[140px] mt-[13px] 
font-bold self-center text-md lg:visible sm:invisible'> MY Courses Site</h1>

</div>



</div>



{/* ----middle side- */}


<div className='  col-span-4' >




<div className='input-div mt-3 pt-[12px] text-center'
>

<span className='pr-3 font-bold text-[13px]'> <GrSearch className='inline-block font-bold text-xl' /></span>
<input type="search"
placeholder='    search for courses'
className='  w-[80%]  h-[40px]  rounded-2xl  focus:border-2 focus:outline-none focus:border-blue-300  '
/>


</div>






<div>




</div>



</div>



{/* ---------right side---- */}


<div className='  col-span-5 overflow-hidden'>

<div className=' flex h-[100%]'>

<ul className='self-center md:text-xl flex sm:text-sm  sm:gap-2 lg:gap-8 mt-[10px] p-[10px] w-[100%] font-bold text-[15px]'>

<li 
onClick={(e) => handleclicked('home')}
className={ ` ${activeclass === 'home' ? 'active ' : " "}  self-center   `}>
    <Link to='/'>
    Home
    </Link>
   
</li>

{ token && 
<li>

<Menu>
  {({ isOpen }) => (
    <>
      <MenuButton
      display={userinfo?.name  ? 'block' : 'none'}
      
      isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? userinfo?.name : 'userInfo'}
      </MenuButton>
      <MenuList>
        <MenuItem>
        <Link to={`userprofile/${userinfo._id}`}>

        profile
        </Link>
        
        </MenuItem>



        <MenuItem > your courses</MenuItem>
        <MenuItem > your cart Courses</MenuItem>
        <MenuItem > your wishlist</MenuItem>
      </MenuList>
    </>
  )}
</Menu>


</li>

  }


<li
name ='register'
onClick={(e) => handleclicked('register')}
className={ ` ${activeclass === 'register' ? 'active ' : " "}  self-center   `}
> 

<Link to='/register'>
    Register
    </Link>


</li>

<li
onClick={(e) => handleclicked('login')}
className={ ` ${activeclass === 'login' ? 'active ' : " "}  self-center   `}>
    
<Link to='/login'>
    Login
    </Link>
    
    </li>



</ul>








</div>






</div>






</div>



            
        </div>
    );
}

export default Navbar;
