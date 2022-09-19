import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeadersSocial from "./HeadersSocial";
// import HeadersSocial from "./HeadersSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yash Golani</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeadersSocial />
        <div className="me">
          <img src={ME} alt="ME"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
