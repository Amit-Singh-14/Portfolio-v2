import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function ProjectDetails({ detailstyleclass }) {
  return (
    <div className={detailstyleclass}>
      <h1>Chess.io</h1>
      <p>
        <i> Online Multiplayer chess Game.</i>
      </p>
      <button>
        About Me <HiArrowLongRight className="arrow" />
      </button>
    </div>
  );
}

export default ProjectDetails;
