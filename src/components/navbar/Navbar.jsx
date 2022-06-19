import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#portfolio">Portfolio</a></p>
          <p><a href="#features">My programming languages</a></p>
          <p><a href="#possibilitywork">Work experiences and Studies</a></p>
          <p><a href="https://thegodmenu.com" target="#">The Nutrition App</a></p>
          <p><a href="#contact">Contact me</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#portfolio">Portfolio</a></p>
            <p><a href="#features">My programming languages</a></p>
            <p><a href="#possibilitywork">Work experiences and Studies</a></p>
            <p><a href="https://thegodmenu.com" target="#">The Nutrition App</a></p>
            <p><a href="#contact">Contact me</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
