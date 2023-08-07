import React from "react";
import "../Footer/Footer.css";
import img from "../Img/instagram.png";
import link from "../Img/linkedin.png";
import oyo from "../Img/download (2).jpg";
import node from "../Img/download (1).jpg";
import { FaDatabase, FaGitSquare, FaPython, FaCss3, FaHtml5, FaGit } from "react-icons/fa";
const Footer = () => {
    return ( <
        div className = "contain" >
        <
        div className = "one" >
        <
        li > Home < /li> <li> About </li > < li > Services < /li>{" "} <
        li > Experience < /li> <li> Pakages </li > { " " } <
        /div>{" "} <
        div className = "two" >
        <
        li > Gmail: thakurvikrambora @gmail.com < /li>{" "} <
        li > Contact: 9719664795 < /li> <li> Address: Hatikhal Haldwani </li > { " " } <
        li > < /li>{" "} <
        /div>{" "} <
        div className = "three" >
        <
        img src = { img }
        alt = "" / >
        <
        img src = { link }
        alt = "" / >
        <
        img src = { img }
        alt = "" / >
        <
        /div>{" "} <
        div className = "two" >

        <
        li > { " " }
        Technologies I used { " " } < h1 > < FaDatabase / > < FaGitSquare / > < FaPython / > < FaCss3 / > < FaHtml5 / > < FaGit / > < /h1> { " " } <
        /li>{" "} <
        li > < /li>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Footer;