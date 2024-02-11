import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function ProjectDetails({ detailstyleclass, title, discription }) {
  return (
    <div className={detailstyleclass}>
      <h1>{title}</h1>
      <p>
        <i>{discription}</i>
      </p>
      <button>
        About Me <HiArrowLongRight className="arrow" />
      </button>
    </div>
  );
}

export default ProjectDetails;
