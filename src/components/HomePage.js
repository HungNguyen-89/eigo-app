import React from "react";
import "./HomPage.scss";
import { Link } from "react-router-dom";
import photoVocabulary from "../assets/HomPage/category-1.png";
import photoGrammar from "../assets/HomPage/category-2.png";
import photoFlashCard from "../assets/HomPage/category-3.png";
import photoGames from "../assets/HomPage/category-4.png";

const HomPage = () => {
  return (
    <>
      <section className="category-container">
        <section className="category">
          <Link to="/" className="box">
            <img src={photoVocabulary} alt="" />
            <h3>Từ vựng qua hình ảnh</h3>
          </Link>
          <Link to="/" className="box">
            <img src={photoGrammar} alt="" />
            <h3>Ngữ pháp qua hình ảnh</h3>
          </Link>

          <Link to="/" className="box">
            <img src={photoFlashCard} alt="" />
            <h3>Flash Cards</h3>
          </Link>
          <Link to="/" className="box">
            <img src={photoGames} alt="" />
            <h3>Trò chơi trí tuệ</h3>
          </Link>
        </section>
      </section>
    </>
  );
};

export default HomPage;
