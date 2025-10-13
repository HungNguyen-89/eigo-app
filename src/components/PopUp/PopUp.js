import React, { useState } from "react";
import "./PopUp.scss";
import { Route, Routes } from "react-router-dom";
import FlashCard from "../FlashCard/FlashCard";
import WordGuessGame from "../WordGuessGame/WordGuessGame";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../Navbar/NavbarMobile";
import ExamPageAll from "../ExamPage/ExamPageAll";
import ExamPageSingle from "../ExamPage/ExamPageSingle";
import { MdOutlineClose } from "react-icons/md";
import HomPage from "../HomePage";
import VocabularyPageSingle from "../VocabularyPageSingle/VocabularyPageSingle";
import VocabularyTranslateSentences from "../VocabularyTranslateSentences/VocabularyTranslateSentences";
import Dictionary from "../Dictionary";
import Grammar from "../Grammar/Grammar";
import GrammarTranslateSentences from "../GrammarTranslateSentences/GrammarTranslateSentences";
import Kanji from "../Kanji/Kanji";
import KanjiTranslateSentences from "../KanjiTranslateSentences/KanjiTranslateSentences";

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
            <Route path="/kanji/:id" element={<Kanji />} />
            <Route
              path="/kanji/data/:id"
              element={<KanjiTranslateSentences />}
            />
            <Route path="grammar/:id" element={<Grammar />} />
            <Route
              path="/grammar/data/:id"
              element={<GrammarTranslateSentences />}
            />
            <Route
              path="/vocabulary-translate-sentences/:id"
              element={<VocabularyPageSingle />}
            />
            <Route
              path="/vocabulary-translate-sentences/data/:id"
              element={<VocabularyTranslateSentences />}
            />
            <Route path="/dictionary/search/:id" element={<Dictionary />} />
          </Routes>

          <Footer />
        </div>
      ) : (
        <div className="main">
          <div className="popup">
            <div className="popup-header">
              <div className="popup-navbar-logo">
                <img src="https://i.ibb.co/p2kh5vT/logo-01.png" alt="" />
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
