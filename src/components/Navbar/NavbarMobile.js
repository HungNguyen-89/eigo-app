import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import "./NavbarMobile.scss";
import { routes } from "../constant";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavbarMobile = ({ setPopUp }) => {
  const [heading, setHeading] = useState("");

  return (
    <div>
      <div className="main-mobile-nav-links">
        {routes.map((route) => (
          <ul className="mobile-nav-links">
            <li>
              <div className="mobile-nav-link-container">
                {!route.subMenu ? (
                  <Link
                    to={route.link}
                    className="mobile-nav-link"
                    // onClick={() => {
                    //   setPopUp(true);
                    // }}

                    onClick={() => {
                      setPopUp(true);
                      heading !== route.name
                        ? setHeading(route.name)
                        : setHeading("");
                    }}
                  >
                    {route.name}
                  </Link>
                ) : (
                  <Link
                    className="mobile-nav-link"
                    onClick={() => {
                      heading !== route.name
                        ? setHeading(route.name)
                        : setHeading("");
                    }}
                  >
                    {route.name}
                  </Link>
                )}

                {route.subMenu &&
                  (heading === route.name ? (
                    <MdOutlineKeyboardArrowUp
                      className="moble-nav-link-arrown"
                      size={"20px"}
                      onClick={() =>
                        heading !== route.name
                          ? setHeading(route.name)
                          : setHeading("")
                      }
                    />
                  ) : (
                    <MdOutlineKeyboardArrowDown
                      className="moble-nav-link-arrown"
                      size={"20px"}
                      onClick={() =>
                        heading !== route.name
                          ? setHeading(route.name)
                          : setHeading("")
                      }
                    />
                  ))}
              </div>
              <div
                className={`mobile-nav-sub-links-container ${
                  heading === route.name ? "active" : "hidden"
                }`}
              >
                {route.subMenu &&
                  route.subRoutes.map((subRoute) => (
                    <ul className="mobile-nav-sub-links">
                      <li className="mobile-nav-sub-link">
                        <Link
                          to={subRoute.link}
                          onClick={() => {
                            setPopUp(true);
                          }}
                        >
                          {subRoute.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default NavbarMobile;
