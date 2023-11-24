import React from "react";
import iconSVG from "../assets/svg/iconHamburger.svg";
import logoSVG from "../assets/svg/logoNavbar.svg";
import "../styles/app.sass";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <img src={logoSVG} />
        <p>Gabriel Souza</p>
        <img src={iconSVG} />
      </nav>
    </>
  );
};

export default Navbar;
