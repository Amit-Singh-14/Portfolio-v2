import React from "react";
import ExperiemntCard from "./ExperiemntCard";

function Experiment() {
  return (
    <section className="experiment" id="experiment">
      <h1>Experiments ans Open sources</h1>
      <div className="expCardShow">
        <ExperiemntCard />
        <ExperiemntCard />
        <ExperiemntCard />
        <ExperiemntCard />
      </div>
    </section>
  );
}

export default Experiment;
