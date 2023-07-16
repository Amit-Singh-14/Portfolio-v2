import { useState } from "react";
import ExperiemntCard from "./ExperiemntCard";

function Experiment() {
  const [expandedItemId, setExpandedItemId] = useState(null);
  const handleItemClick = (itemId) => {
    setExpandedItemId(itemId);
  };
  return (
    <section className="experiment" id="experiment">
      <h1>Experiments ans Open sources</h1>
      <div className="expCardShow">
        <ExperiemntCard id={1} onClick={handleItemClick} active={expandedItemId === 1} />
        <ExperiemntCard id={2} onClick={handleItemClick} active={expandedItemId === 2} />
        <ExperiemntCard id={3} onClick={handleItemClick} active={expandedItemId === 3} />
        <ExperiemntCard id={4} onClick={handleItemClick} active={expandedItemId === 4} />
      </div>
    </section>
  );
}

export default Experiment;
