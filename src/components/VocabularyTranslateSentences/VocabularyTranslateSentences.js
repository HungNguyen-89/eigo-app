import React, { useEffect, useState } from "react";
import "./VocabularyTranslateSentences.scss";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { TbListNumbers } from "react-icons/tb";
import { AiFillSound } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

const getRandomIndexOfArray = (array) => {
  let d = [];
  d[0] = 0;
  let w = 0;
  do {
    let check = true;
    let y = Math.floor(Math.random() * array.length);
    for (let i = 0; i <= w; i++) {
      if (d[i] === y) {
        check = false;
        break;
      }
    }
    if (check === true) {
      d[w++] = y;
    }
  } while (w < array.length);

  let e = [];

  for (let j = 0; j < d.length; j++) {
    e[j] = array[d[j]];
  }
  return e;
};

const getNumberWhiteSpace = (str) => {
  const numberWhiteSpace = str.length - str.replace(/\s+/g, "").length;
  return numberWhiteSpace;
};

const VocabularyTranslateSentences = () => {
  const [dataTest, setDataTest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [randomData, setRandomData] = useState("");
  const [currentCase, setCurrentCase] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id.includes("verb")) {
      setCurrentCase("verb");
    } else if (id.includes("adv")) {
      setCurrentCase("adv");
    } else if (id.includes("n3")) {
      setCurrentCase(3);
    } else if (id.includes("n4")) {
      setCurrentCase(4);
    } else if (id.includes("n5")) {
      setCurrentCase(5);
    }
  }, [id]);

  useEffect(() => {
    const asyncFn = async () => {
      let res = await axios.get(
        `https://db-eigo-app.onrender.com/flashcards-${currentCase}-data/${id}`
      );
      let data = res && res.data ? res.data : [];
      setDataTest(data);
      setRandomData(getRandomIndexOfArray(data.flashCardData));
      setLoading(true);
    };

    asyncFn();
  }, [currentCase, id]);

  const [word, setWord] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example_1, setExample_1] = useState("");
  const [example_1_vn, setExample_1_vn] = useState("");
  const [definitionOfWord, setDefinitionOfWord] = useState("");
  const [numberOfWhiteSpace, setNumberOfWhiteSpace] = useState("");

  useEffect(() => {
    if (randomData.length > 0) {
      setWord(randomData[0].word);
      setPartOfSpeech(randomData[0].partOfSpeech);
      setPhonetic(randomData[0].phonetic);
      setMeaning(randomData[0].meaning);
      setExample_1(randomData[0].example_1);
      setDefinitionOfWord(randomData[0].definitionOfWord);
      setExample_1_vn(randomData[0].example_1_vn);
      setNumberOfWhiteSpace(getNumberWhiteSpace(randomData[0].example_1));
    }
  }, [loading]);

  const [activeCard, setActiveCard] = useState(false);
  const [activeBack, setActiveBack] = useState(false);
  const [activeBtn, setActiveBtn] = useState(true);
  const [activeNextBtn, setActiveNextBtn] = useState(false);

  // const handleFlip = () => {
  //   setActiveCard(!activeCard);
  //   setActiveBack(false);
  // };

  const Continue = () => {
    setActiveCard(false);
    setActiveBack(true);
    if (randomData && randomData.length > 1) {
      randomData.splice(0, 1);
      setWord(randomData[0].word);
      setPartOfSpeech(randomData[0].partOfSpeech);
      setPhonetic(randomData[0].phonetic);
      setMeaning(randomData[0].meaning);
      setExample_1(randomData[0].example_1);
      setDefinitionOfWord(randomData[0].definitionOfWord);
      setExample_1_vn(randomData[0].example_1_vn);
      setNumberOfWhiteSpace(getNumberWhiteSpace(randomData[0].example_1));
    } else {
      setActiveNextBtn(true);
      setActiveBtn(false);
      setWord("Do you want to again?");
      setPartOfSpeech("");
      setPhonetic("");
      setMeaning("");
      setExample_1("");
      setDefinitionOfWord("");
      setRandomData(getRandomIndexOfArray(dataTest.flashCardData));
    }
  };

  const Repeat = () => {
    setWord(randomData[0].word);
    setPartOfSpeech(randomData[0].partOfSpeech);
    setPhonetic(randomData[0].phonetic);
    setMeaning(randomData[0].meaning);
    setExample_1(randomData[0].example_1);
    setDefinitionOfWord(randomData[0].definitionOfWord);
    setExample_1_vn(randomData[0].example_1_vn);
    setNumberOfWhiteSpace(getNumberWhiteSpace(randomData[0].example_1_vn));
    setActiveNextBtn(false);
    setActiveBtn(true);
  };

  return (
    <>
      {loading && randomData.length > 0 ? (
        <div className="vocabularyTranslateContainer">
          <div className="vocabularyTranslateFrontSide">
            <div className="sentencesVnContainer">
              <div className="sentencesVn">{example_1_vn}</div>
              <div className="sentencesSuggest">
                {(() => {
                  const arr = [];
                  for (let i = 0; i < numberOfWhiteSpace + 1; i++) {
                    arr.push(<div className="suggestItem">{i + 1}</div>);
                  }
                  return arr;
                })()}
              </div>
            </div>

            <div className="sentencesEn">
              <span className="sentencesEnIcon">
                <FaRegKeyboard />
              </span>
              <input className="" placeholder="Type here to input"></input>
            </div>

            <div className="phoneticOfWord">{numberOfWhiteSpace}</div>
          </div>

          <div className="buttonPlayContainer">
            <button
              className="buttonPlay"
              // onClick={() => Continue()}
            >
              <span className="buttonPlay-icon">
                <TbListNumbers />
              </span>
              Back List
            </button>
            <button
              className={`buttonPlay ${activeNextBtn ? "hiddenBtn" : ""}`}
              onClick={() => Continue()}
            >
              <span className="buttonPlay-icon">
                <TbPlayerTrackNextFilled />
              </span>
              Next
            </button>

            <button
              className={`buttonPlay ${activeBtn ? "hiddenBtn" : ""}`}
              onClick={() => Repeat()}
            >
              <span className="buttonPlay-icon">
                <BsArrowRepeat />
              </span>
              Again
            </button>
            <button
              className={`buttonPlay ${activeNextBtn ? "hiddenBtn" : ""}`}
              // onClick={() => Continue()}
            >
              <span className="buttonPlay-icon">
                <FiCheckSquare />
              </span>
              Check
            </button>
          </div>
          {/* <div id="hiddenNumber"></div> */}
        </div>
      ) : (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </>
  );
};

export default VocabularyTranslateSentences;
