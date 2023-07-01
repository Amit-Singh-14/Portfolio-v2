import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function Info() {
  return (
    <>
      <h1>Amit Singh</h1>
      <p>
        <i>Full-stack Web Develeper</i>
      </p>
      <button>
        About Me <HiArrowLongRight className="arrow" />
      </button>
    </>
  );
}

export default Info;
