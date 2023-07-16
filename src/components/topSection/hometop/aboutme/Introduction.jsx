import React from "react";

import { BsLinkedin, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";
import Info from "./Info";

function Introduction() {
  return (
    <section className="aboutme">
      <div className="info">
        <Info />
        {/* <img src="images/topImg.png" className="topimg" /> */}
      </div>
      <p className="hello">
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </p>
    </section>
  );
}

export default Introduction;
