import React, { useState } from "react";
import "./HomPage.scss";
import { useNavigate } from "react-router-dom";

const HomPage = () => {
  const [strValue, setStrValue] = useState("");
  const navigate = useNavigate();
  const [btnValueCheck, setBtnValueCheck] = useState(true);

  const inputValuecheck = (event) => {
    // event.preventDefault();
    setStrValue(event.target.value.toLowerCase());
    var str = document.getElementById("input-value-dict")?.value;
    if (str.trim().length !== 0) {
      //console.log("input value is NOT empty");
      setBtnValueCheck(false);
    } else {
      //console.log("input value is empty");
      setBtnValueCheck(true);
    }
  };

  const earseTextInput = () => {
    setStrValue("");
    setBtnValueCheck(true);
  };

  return (
    <>
      <div className="hompage-container">
        <div className="dictionary-title">DICTIONARY</div>
        <div className="dictionary-box-search">
          <div className="dictionary-box-icon">
            <img alt="" src="https://i.imgur.com/1r8PmNM.png" />
          </div>
          <div className="input-container">
            <input
              type="text"
              id="input-value-dict"
              value={strValue}
              onChange={(e) => inputValuecheck(e)}
              placeholder="Type here to search"
            />
            {!btnValueCheck ? (
              <img
                src="https://i.imgur.com/p0VdGTx.png"
                onClick={() => earseTextInput()}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
          <button
            className="dictionary-box-search-btn"
            disabled={btnValueCheck}
            onClick={() => navigate(`/dictionary/search/${strValue}`)}
          >
            Search
          </button>
        </div>
        <div className="hompage-category-container">
          <div className="hompage-category">
            <div className="hompage-category-icon">
              <img alt="" src="https://i.imgur.com/a5yyEF7.png" />
            </div>
            <div className="hompage-category-title">
              <div className="hompage-category-title-up">Learn with</div>
              <div className="hompage-category-title-down">Flash cards</div>
            </div>
          </div>
          <div className="hompage-category">
            <div className="hompage-category-icon">
              <img alt="" src="https://i.imgur.com/7rdFu9Y.png" />
            </div>
            <div className="hompage-category-title">
              <div className="hompage-category-title-up">Vocabulary</div>
              <div className="hompage-category-title-down">with Write</div>
            </div>
          </div>
          <div className="hompage-category">
            <div className="hompage-category-icon">
              <img alt="" src="https://i.imgur.com/HqHytgq.png" />
            </div>
            <div className="hompage-category-title">
              <div className="hompage-category-title-up">Test with</div>
              <div className="hompage-category-title-down">Random</div>
            </div>
          </div>
          <div className="hompage-category">
            <div className="hompage-category-icon">
              <img alt="" src="https://i.imgur.com/iLedEjN.png" />
            </div>
            <div className="hompage-category-title">
              <div className="hompage-category-title-up">Funny</div>
              <div className="hompage-category-title-down">Game</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomPage;
