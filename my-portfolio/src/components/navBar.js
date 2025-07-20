import React, { useState, useEffect } from 'react';
import MyButton from './MyButton.js';
import './navbar.css';
import '../App.css'

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <nav className="navBar">
      <MyButton text="Home" />
      <MyButton text="About" />
      <MyButton text="Projects" />
      <MyButton text="Contact" />
      <button onClick={toggleDarkMode} className='moon'>🌙</button>
    </nav>
  );
}

export default Navbar;
