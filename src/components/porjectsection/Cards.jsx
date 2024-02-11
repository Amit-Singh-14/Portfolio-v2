import React from "react";
import ProjectDetails from "./ProjectDetails";

function Cards({ data }) {
  const { title, discription, img, cardclass, numberclass, detailclass, num } = data;
  const numberstyleclass = `number ${numberclass}`;
  const detailstyleclass = `projectdetails ${detailclass}`;
  return (
    <section
      className={cardclass}
      style={{ backgroundImage: `url(${img})`, backgroundPosition: "contain" }}
    >
      <div className={numberstyleclass}>{num}</div>
      <ProjectDetails detailstyleclass={detailstyleclass} title={title} discription={discription} />
    </section>
  );
}

export default Cards;
