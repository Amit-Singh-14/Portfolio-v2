import React from "react";

function NavItem() {
  return (
    <div className="navitem">
      <a href="#project" className="route">
        Projects
      </a>
      <a href="#experiment" className="route">
        Experiment
      </a>
      <a href="#contact" className="route">
        Contact
      </a>
    </div>
  );
}

export default NavItem;
