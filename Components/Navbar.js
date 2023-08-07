import React from "react";
import { Link } from "react-scroll";
import "../Components/Nav.css";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };
  const closeMenu = () => {
    setclick(false);
  };
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name"> Vikram </div> <span> Bora </span>{" "}
      </div>{" "}
      <div className="n-right">
        <div className="n-list">
          <div className="hamburger" onClick={handleClick}>
            {" "}
            {click ? (
              <FaTimes size={30} style={{ color: "black" }} />
            ) : (
              <FaBars size={30} style={{ color: "red" }} />
            )}{" "}
          </div>{" "}
          <ul id="navbar" className={click ? "#navbar open" : "#navbar"}>
            <li>
              <Link
                to="home" 
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                {" "}
                Home{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                to="Project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                {" "}
                Projects{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                {" "}
                About{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                to="contact us"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
              >
                {" "}
                Contact us{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link> Testmonials </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <button className="button"> Contact us </button>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
