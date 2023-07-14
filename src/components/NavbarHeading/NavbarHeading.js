import React, { useEffect, useState } from "react";
import "./NavbarHeading.scss";
import { Link } from "react-router-dom";

const NavbarHeading = () => {
  const [currentCase, setCurrentCase] = useState("");

  const currentSelector = (num) => {
    setCurrentCase(num);
  };

  console.log(currentCase);

  // useEffect(() => {
  //   const data = window.sessionStorage.getItem("caseId");
  //   setCurrentCase(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   window.sessionStorage.setItem("caseId", JSON.stringify(currentCase));
  // }, [currentCase]);

  const DATA = [
    { id: 1, link: "/de-thi/de-thi-n1", name: "N1" },
    { id: 2, link: "/de-thi/de-thi-n2", name: "N2" },
    { id: 3, link: "/de-thi", name: "N3" },
    { id: 4, link: "/de-thi/de-thi-n4", name: "N4" },
    { id: 5, link: "/de-thi/de-thi-n5", name: "N5" },
  ];

  return (
    <div class="heading-container">
      <div className="heading">
        <div className="heading-title">Đề thi</div>
        <div className="heading-links">
          {DATA.map((element, index) => (
            <Link
              key={index}
              to={element.link}
              className={
                currentCase === index + 1
                  ? "heading-links-item active"
                  : "heading-links-item"
              }
              onClick={() => {
                currentSelector(element.id);
              }}
            >
              {element.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarHeading;
