import React from 'react';
import '../assets/styles/App.css';
import LogoImage from '../assets/images/logo-sword.png';


const Navbar = () => {
  return (
    <nav id = "navbar">
        <div id = "logo">
            <a href="/" style={{display:'flex', alignItems:'center', fontSize:'2rem'}}>
                <img id= "logo-sword-image" src={LogoImage} alt="Logo-Sword"/>
                <div><span style={{color:"rgb(160, 14, 14)"}}>Crit</span> Hit Gear</div>
            </a>
        </div>
        <div id = "content">
        <ul className="nav-links">
          <li><a href="/">Log In</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;