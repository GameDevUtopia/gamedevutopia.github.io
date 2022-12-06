import { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../images/gdu_logo.png";
// import menu from "../images/menu.png";
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
      <nav className="navigation">
      <img className="gdu_logo" src={logo} alt="gdu logo"></img>
        <a href="/" className="brand-name">
          GameDevUtopia
        </a>
        <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);}}>
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
         
        </button>
        <div
          className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul className="link">
            <li>
              <a className="NavLink" href="#" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Home</a>
            </li>
            <li>
              <a className="NavLink" href="#about_us" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>About Us</a>
            </li>
            <li>
              <a className="NavLink" href="#project_gallery" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Project Gallery</a>
            </li>
            <li>
              <a className="NavLink" href="#contactus" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }