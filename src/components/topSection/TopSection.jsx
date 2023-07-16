import React from "react";
import Navbar from "./hometop/Navbar/Navbar";
import Introduction from "./hometop/aboutme/Introduction";
import { HiArrowLongRight } from "react-icons/hi2";

function TopSection() {
  return (
    <div className="backimg">
      <section className="topsection">
        <Navbar />
        <Introduction />
        <p>
          Works
          <a href="#project">
            <HiArrowLongRight className="showmore" />
          </a>
        </p>
      </section>
    </div>
  );
}

export default TopSection;
