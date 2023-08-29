import React from "react";
import "../components/Footer.scss";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <span className="footer-text-copyright">
          <FaRegCopyright />
        </span>
        <span>2023, Hachi-IT. All Rights Reserved.</span>
      </div>
      <div className="footer-logo">
        <img src="https://i.ibb.co/xXXfxKP/facebook.png" alt="" />
        <img src="https://i.ibb.co/4f2CsJB/instagram.png" alt="" />
        <img src="https://i.ibb.co/Pmy2X6Y/youtube.png" alt="" />
        <img src="https://i.ibb.co/kgKXGKv/zalo.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
