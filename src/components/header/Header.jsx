import React, { useState } from 'react'
import './Header.css'
import { FaBars , FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
function Header() {

  const [menu , setMenu] = useState(false);

  return (
    <div>
      <nav className="nav-container">
        <div className="logo">
            <a href="/">Kishan</a>
        </div>
        <ul className="nav-list">
            <li className="nav-items"><Link activeClass="active" to="intro" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
            <li className="nav-items"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li className="nav-items"><Link activeClass="active" to="skill" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></li>
            <li className="nav-items"><Link activeClass="active" to="project" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
            <li className="nav-items"><Link activeClass="active" to="service" spy={true} smooth={true} offset={-70} duration={500}>Services</Link></li>
            <li className="nav-items"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
        </ul>

        <div className="menu_icon" onClick={()=> setMenu(!menu)}>
         {menu ? <FaTimes style={{margin: "2rem"}} size={30}/> : <FaBars style={{margin: "2rem"}} size={30}/> }
        </div>

      {menu && (
        <ul className="mobile__nav">
        <li className="nav-items"><Link activeClass="active" to="intro" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
            <li className="nav-items"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li className="nav-items"><Link activeClass="active" to="skill" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></li>
            <li className="nav-items"><Link activeClass="active" to="project" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
            <li className="nav-items"><Link activeClass="active" to="service" spy={true} smooth={true} offset={-70} duration={500}>Services</Link></li>
            <li className="nav-items"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
        </ul>
      )}
      </nav>
    </div>
  )
}

export default Header
