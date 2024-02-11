import React from "react";
import Cards from "./Cards";
function Projects() {
  const data = [
    {
      title: "Sentinal",
      discription: "user admin API",
      img: "images/useradmin.jpg",
      cardclass: "cardsright",
      num: "01",
      numberclass: "rightnum",
      detailclass: "detailleft",
    },
    {
      title: "Chess.io",
      discription: "Multiplayer chess game",
      img: "images/chess.jpg",
      cardclass: "cards",
      num: "02",
      numberclass: "leftnum",
      detailclass: "detailright",
    },
    {
      title: "Store API",
      discription: "Store Items Searching API",
      img: "images/store.JPG",
      cardclass: "cardsright",
      num: "03",
      numberclass: "rightnum",
      detailclass: "detailleft",
    },
  ];
  return (
    <>
      <div className="project" id="project">
        <h4>Projects</h4>
        <h1>Latest Work</h1>

        {data.map((card) => (
          <Cards key={card.num} data={card} />
        ))}
      </div>
    </>
  );
}

export default Projects;
