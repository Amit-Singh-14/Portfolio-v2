import React from "react";
import LogoImg from "./LogoImg";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <section className="top">
      <nav>
        <LogoImg />
        <NavItem />
      </nav>
    </section>
  );
}
export default Navbar;
