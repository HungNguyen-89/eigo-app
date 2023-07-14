import React from "react";

const NavLinks = () => {
  const links = [{ name: "Từ vựng" }, { name: "Ngữ pháp" }, { name: "Đề thi" }];
  return (
    <>
      {links.map((link) => (
        <div>
          <div>
            <h1>{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
