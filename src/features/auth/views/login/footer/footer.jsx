// components/Footer.js
import React from "react";
import InfoComponents from "../information/informationpart/InfoComponents";
import "../../styles/login.styles.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 visible">
      <div className="container mx-auto flex justify-between items-center">
        <InfoComponents></InfoComponents>
      </div>
    </footer>
  );
};

export default Footer;
