import React from "react";
import topimg from "../../../images/topImg.png";
import { BsLinkedin, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";
import Info from "./Info";

function Introduction() {
  return (
    <section className="aboutme">
      <div className="info">
        <Info />
        <img src={topimg} className="topimg" />
      </div>
      <p className="hello">
        <a href="https://www.google.com/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <BsInstagram />
        </a>
      </p>
    </section>
  );
}

export default Introduction;
