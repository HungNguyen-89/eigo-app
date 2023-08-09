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
import Logo from "../../assets/Logo/logo_01.png";
import HomPage from "../HomePage";
import VocabularyPageSingle from "../VocabularyPageSingle/VocabularyPageSingle";
import VocabularyTranslateSentences from "../VocabularyTranslateSentences/VocabularyTranslateSentences";

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
            <Route path="/game" element={<WordGuessGame />} />
            <Route path="/de-thi/:id" element={<ExamPageAll />} />
            <Route path="/flashcards/:id" element={<ExamPageSingle />} />
            <Route path="/flashcards/data/:id" element={<FlashCard />} />
            <Route
              path="/vocabulary-translate-sentences/:id"
              element={<VocabularyPageSingle />}
            />
            <Route
              path="/vocabulary-translate-sentences/data/:id"
              element={<VocabularyTranslateSentences />}
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      ) : (
        <div className="main">
          <div className="popup">
            <div className="popup-header">
              <div className="popup-navbar-logo">
                <img src={Logo} />
                <p>EIGO</p>
              </div>
              <div className="popup-right">
                <MdOutlineClose
                  className="closeBtnPopUp"
                  size={"2.2rem"}
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
