import React from "react";
import Logo from "../../assets/Logo/logo_01.png";
import { TbListSearch } from "react-icons/tb";

const Navbar = ({ handleClickOpen }) => {
  const links = [
    { name: "Trang chủ" },
    { name: "Từ vựng" },
    { name: "Ngữ pháp" },
    { name: "Đề thi" },
    { name: "Games" },
    { name: "Media" },
    { name: "Blog" },
    { name: "Hướng dẫn" },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Logo} />
        <p>EIGO</p>
      </div>
      {/* <div className="navbar-links">
        {links.map((link) => (
          <div className="navbar-item">
            <p>{link.name}</p>
          </div>
        ))}
      </div> */}
      <div
        className="popUpBtn"
        onClick={() => {
          handleClickOpen(false);
        }}
      >
        <TbListSearch size={"2.2rem"} />
      </div>
    </div>
  );
};

export default Navbar;
