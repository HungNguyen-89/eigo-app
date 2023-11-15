import React, { useState } from "react";
import "./Grammar.scss";

function Grammar() {
  const [iconValue, setIconValue] = useState(false);

  const iconValueCheck = () => {
    setIconValue(!iconValue);
  };

  return (
    <div className="grammar-container">
      <div className="grammar-box">
        <div className="grammar-box-up">
          <div className="grammar-box-up-title">Thì tương lai đơn</div>

          <div className="grammar-box-up-icon" onClick={() => iconValueCheck()}>
            {iconValue ? (
              <img src="https://i.imgur.com/80QEshp.png" alt="" />
            ) : (
              <img src="https://i.imgur.com/GEdySQH.png" alt="" />
            )}
          </div>
        </div>

        {iconValue ? <div className="grammar-box-down"></div> : ""}
      </div>
    </div>
  );
}

export default Grammar;
