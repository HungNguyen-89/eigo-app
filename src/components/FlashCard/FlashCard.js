import React, { useEffect, useState } from "react";
import "./FlashCard.scss";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { TbListNumbers } from "react-icons/tb";
import { AiFillSound } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";

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

const FlashCard = () => {
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
  const [definitionOfWord, setDefinitionOfWord] = useState("");

  useEffect(() => {
    if (randomData.length > 0) {
      setWord(randomData[0].word);
      setPartOfSpeech(randomData[0].partOfSpeech);
      setPhonetic(randomData[0].phonetic);
      setMeaning(randomData[0].meaning);
      setExample_1(randomData[0].example_1);
      setDefinitionOfWord(randomData[0].definitionOfWord);
    }
  }, [loading]);

  const [activeCard, setActiveCard] = useState(false);
  const [activeBack, setActiveBack] = useState(false);
  const [activeBtn, setActiveBtn] = useState(true);
  const [activeNextBtn, setActiveNextBtn] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
    setActiveBack(false);
  };

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
    return (
      <div className="flashCardFrontSide">
        <div className="wordOfFrontSide">{word}</div>
        <div className="partOfSpeech">{partOfSpeech}</div>
        <div className="phoneticOfWord">{phonetic}</div>
      </div>
    );
  };

  const Repeat = () => {
    setWord(randomData[0].word);
    setPartOfSpeech(randomData[0].partOfSpeech);
    setPhonetic(randomData[0].phonetic);
    setMeaning(randomData[0].meaning);
    setExample_1(randomData[0].example_1);
    setDefinitionOfWord(randomData[0].definitionOfWord);
    setActiveNextBtn(false);
    setActiveBtn(true);
  };

  return (
    <>
      {loading && randomData.length > 0 ? (
        <div id="flashCardContainer">
          <div id="backgroundPlay">
            <div className="label">
              {/* <label> */}
              <div
                onClick={() => handleFlip()}
                className={`flip-card ${activeCard ? "cardFlip" : ""}`}
              >
                {/*front*/}
                <div className="flashCardFrontSide">
                  <div className="wordOfFrontSide">{word}</div>
                  <div className="partOfSpeech">{partOfSpeech}</div>
                  <div className="phoneticOfWord">{phonetic}</div>
                </div>
                {/*back*/}
                <div className="flashCardBackSide">
                  <div className="upOfBackSide">
                    <div className="imageBackSide">
                      <img
                        src="https://live.staticflickr.com/65535/53059383094_a30793af13_w.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`txtBack ${activeBack ? "hiddenBack" : ""}`}
                    >
                      <div className="definitionOfWord">{definitionOfWord}</div>
                      <div className="meaningOfWord">{meaning}</div>
                    </div>
                  </div>
                  <div className="downOfBackSide">
                    <div className="examplesOfWordContainer">
                      <div className="exampleOfTitle">Example:</div>
                      <div className="exampleOfWordEn">{example_1}</div>
                      {/* <div className="exampleOfWordVn">
                        Cô ấy đang rót đầy cốc của cô ấy
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* </label> */}
            </div>
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
                <AiFillSound />
              </span>
              Sound
            </button>
          </div>
          <div id="hiddenNumber"></div>
        </div>
      ) : (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </>
  );
};

export default FlashCard;
