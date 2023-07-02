import React from "react";
import Navbar from "./hometop/Navbar/Navbar";
import Introduction from "./hometop/aboutme/Introduction";
import { HiArrowLongRight } from "react-icons/hi2";

function TopSection() {
  return (
    <section className="topsection">
      <Navbar />
      <Introduction />
      <p>
        Works <HiArrowLongRight className="showmore" />
      </p>
    </section>
  );
}

export default TopSection;
