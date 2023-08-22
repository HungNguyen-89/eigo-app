import React from "react";
import { TbListSearch } from "react-icons/tb";

const Navbar = ({ handleClickOpen }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src="https://i.ibb.co/p2kh5vT/logo-01.png" />
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
