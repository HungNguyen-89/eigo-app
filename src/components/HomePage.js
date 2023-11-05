import React from "react";
import "./HomPage.scss";

const HomPage = () => {
  return (
    <>
      <div className="hompage-container">
        <div className="dictionary-title">DICTIONARY</div>
        <div className="dictionary-box-search">
          <div className="dictionary-box-icon">
            <img alt="" src="https://i.imgur.com/1r8PmNM.png" />
          </div>
          <input type="text" placeholder="Type here to search" />
          <button className="dictionary-box-search-btn">Search</button>
        </div>
        {/* <div className="hompage-category-container">
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
        </div> */}
        <div className="dictionary-content">
          <div className="words-to-search-for">run</div>
          <div className="word-classification">verb</div>
          <div className="word-phonetic">/ran/</div>
          <div className="meaning-of-the-word-container">
            <div className="meaning-of-the-word-en">
              (of a person or animal) to move quickly, faster than walking
            </div>
            <div className="meaning-of-the-word-vn">chạy</div>
            <div className="example-of-the-word-container">
              <div className="example-of-the-word-container-en">
                He ran down the road.
              </div>
              <div className="example-of-the-word-container-vn">
                Anh ấy chạy xuống đường.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomPage;
