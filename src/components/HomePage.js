import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import "./HomPage.scss";
import { Link } from "react-router-dom";
import photoVocabulary from "../assets/HomPage/category-1.png";
import photoGrammar from "../assets/HomPage/category-2.png";
import photoFlashCard from "../assets/HomPage/category-3.png";
import photoGames from "../assets/HomPage/category-4.png";
import photoBlogs from "../assets/HomPage/category-5.png";

const HomPage = () => {
  return (
    <>
      {/* <section className="home">
        <div className="content">
          <h3>
            Nippon Dict - Hệ thống từ điển từ vựng, ngữ pháp dùng ôn luyện JLPT
          </h3>
        </div>
        <div className="box-search">
          <FaSearch size={"2rem"} color={"#777"} />
          <input type="text" placeholder="Tìm kiếm từ vựng, ngữ pháp" />
          <span>|</span>
          <FaLanguage size={"3rem"} color={"#777"} />
          <select name="" id="">
            <option value="">Nhật - Việt</option>
            <option value="">Việt - Nhật</option>
          </select>
        </div>
      </section> */}
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
          <Link to="/" className="box">
            <img src={photoBlogs} alt="" />
            <h3>Góc Nhật Bản</h3>
          </Link>
        </section>
      </section>
    </>
  );
};

export default HomPage;
