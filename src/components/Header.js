import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">LOGO</h3>
      <ul className="nav-links">
        <Link to="/" className="home1">
          <li>Trang chủ</li>
        </Link>
        <Link to="/tu-vung" className="vocabulary">
          <li>Từ vựng</li>
        </Link>
        <Link to="/ngu-phap" className="grammar">
          <li>Ngữ pháp</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon">
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Header;
