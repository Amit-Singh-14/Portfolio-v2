import React from "react";
import ProjectDetails from "./ProjectDetails";

function Cards({ cardclass, numberclass, detailclass, num }) {
  const numberstyleclass = `number ${numberclass}`;
  const detailstyleclass = `projectdetails ${detailclass}`;
  return (
    <section className={cardclass}>
      <div className={numberstyleclass}>{num}</div>
      <ProjectDetails detailstyleclass={detailstyleclass} />
    </section>
  );
}

export default Cards;
