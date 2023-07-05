import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import white_logo from "../Assets/white-logo.png"
import { Link } from 'react-router-dom';
import { CgMenuRound } from "react-icons/cg"
import "../Styles/Navbar.css"

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body !== null) {
      body.style.backgroundColor = isDarkMode ? 'rgb(18 38 61)' : 'white';
      body.style.color = isDarkMode ? 'white' : 'black';
    }

    return () => {
      if (body !== null) {
        body.style.backgroundColor = '';
      }
    };

  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='flex items-center	justify-evenly p-5'>
      <img src={isDarkMode ? white_logo : logo} alt="logo" width={100} />
      <div className='flex font-bold sm:gap-10 md:gap-12 lg:gap-24 HideIn500'>
        <Link to={"/"} className='pt-3 hover:border-b-4 border-green-500 rounded-full'>Home</Link>
        <Link to={"/"} className='pt-3 hover:border-b-4 border-green-500 rounded-full'>About</Link>
        <Link to={"/"} className='pt-3 hover:border-b-4 border-green-500 rounded-full'>Contact</Link>
        
        <button className='p-3 bg-sky-500 rounded-full font-bold'>Signup/Login</button>
        
      </div>
      <button onClick={handleToggle} className=' p-3 rounded-full bg-fuchsia-500 font-bold'>{isDarkMode ? "Light Mode" : "Dark Mode "}</button>

      <CgMenuRound size={50} className='responsive_menu' />
    </div>
    
  )
}

export default Navbar