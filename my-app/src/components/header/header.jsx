import React from "react";
import "./header.css"
import Logo from "../header/logo/logo";
import Contact from "../header/contacts/contact";
import image from "../../assets/icon.png";


function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Logo imageSrc={image} />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Header;