import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

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
      <img src={logo} alt="logo" width={100} />
      <div className='flex gap-24 border font-bold'>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>
          <button>Signup</button>
        </Link>
      </div>
      <button onClick={handleToggle}>{isDarkMode ? "Ligh Mode" : "Dark Mode "}</button>
    </div>
  )
}

export default Navbar