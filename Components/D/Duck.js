import React from "react";
import "../D/Duck.css";
import img from "../Img/pinki.jpg";
import g from "../Img/OI.jpg";
import ok from "../Img/OIP (1).jpg";
const Duck = () => {
  return (
    <div className="ol">
      <span> Know More </span>{" "}
      <div className="op">
        <span> Who am I </span>{" "}
        <span>
          {" "}
          A Mca graduate located in Haldwani, India.Completed my Intermediate
          from GIC motinagar Haldwani and i have completed my high schooling
          from CBSE board.{" "}
        </span>{" "}
      </div>{" "}
      <div className="ou">
        <span> Technologies used </span> <img src={img} alt="" />
        <img src={g} alt="" />
        <img src={ok} alt="" />
      </div>{" "}
      <div className="op">
        <span> For how long I have been coding </span>{" "}
        <span>
          {" "}
          In my 11 th standard(2016) I was firstly introduced to C++, for which
          I opted.Since then I got my hand on with various programming languages
          and technologies.From 2020 I shifted my intrest towards enterprise
          level technologies like React and Node.I learned and practiced a lot
          after which I got chance to show some expertise in as webdev - intern
          in the following 3 startups: Hope Foundation Prithvi.ai Artificial
          Brix{" "}
        </span>{" "}
      </div>{" "}
      <div className="op">
        <span> What I learned during my internships </span>{" "}
        <span>
          {" "}
          It was an amazing work - time when I got introduced to industrial
          workflow, agile methodologies, software lyfecycle.In my experience I
          learned time managemeant - skills, organisational behavior and much
          more including scalable - coding techniques.{" "}
        </span>{" "}
      </div>{" "}
    </div>
  );
};

export default Duck;
