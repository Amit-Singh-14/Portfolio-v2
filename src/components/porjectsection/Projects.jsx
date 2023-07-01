import React from "react";
import Cards from "./Cards";
function Projects() {
  return (
    <div className="project">
      <h4>Projects</h4>
      <h1>Latest Work</h1>
      <Cards
        cardclass="cardsright"
        num="01"
        numberclass={"rightnum"}
        detailclass={"detailleft"}
      />
      <Cards
        cardclass="cards"
        num="02"
        numberclass={"leftnum"}
        detailclass={"detailright"}
      />
      <Cards
        cardclass="cardsright"
        num="03"
        numberclass={"rightnum"}
        detailclass={"detailleft"}
      />
    </div>
  );
}

export default Projects;
