import React, { useState } from "react";
import "./PopUp.scss";
import { Route, Routes } from "react-router-dom";
import Test from "../Test/Test";
import FlashCard from "../FlashCard/FlashCard";
import WordGuessGame from "../WordGuessGame/WordGuessGame";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import NavbarHeading from "../NavbarHeading/NavbarHeading";
import NavbarMobile from "../Navbar/NavbarMobile";
import ExamPageAll from "../ExamPage/ExamPageAll";
import ExamPageSingle from "../ExamPage/ExamPageSingle";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../../assets/Logo/learn-language.png";
import HomPage from "../HomePage";

const PopUp = () => {
  const [popup, setPop] = useState(true);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(true);
  };
  return (
    <div className="testPopUp">
      {popup ? (
        <div>
          <Navbar handleClickOpen={handleClickOpen} />
          {/* <NavbarHeading /> */}
          <Routes>
            <Route path="/" element={<HomPage />} />
            <Route path="/test/:id" element={<Test />} />
            <Route path="/de-thi/:id" element={<ExamPageAll />} />
            <Route path="/flashcards" element={<ExamPageSingle />} />
            <Route path="/flashcards/:id" element={<FlashCard />} />
            <Route path="/game" element={<WordGuessGame />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      ) : (
        <div className="main">
          <div className="popup">
            <div className="popup-header">
              <div className="popup-navbar-logo">
                <img src={Logo} />
                <p>NIPPON-ZUKAN</p>
              </div>
              <div className="popup-right">
                <MdOutlineClose
                  className="closeBtnPopUp"
                  size={"3rem"}
                  onClick={closePopup}
                />
              </div>
            </div>

            <div>
              <NavbarMobile setPopUp={setPop} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PopUp;
