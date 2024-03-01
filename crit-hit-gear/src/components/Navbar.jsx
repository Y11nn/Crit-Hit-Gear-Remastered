import React from 'react';
import '../assets/styles/App.css';
import LogoImage from '../assets/images/logo-sword.png';
import { Link } from 'react-router-dom';



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
          <Link to="/LogInPage"><li>Log In</li></Link>
          <Link to="/AboutPage"><li>About</li></Link>
          <Link to="/ContactPage"><li>Contact</li></Link>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;