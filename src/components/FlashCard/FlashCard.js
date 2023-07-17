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

  const { id } = useParams();

  useEffect(() => {
    const asyncFn = async () => {
      let res = await axios.get(
        `https://db-eigo-app.onrender.com/flashcards/${id}`
      );
      let data = res && res.data ? res.data : [];
      setDataTest(data);

      setRandomData(getRandomIndexOfArray(data.flashCardData));
      setLoading(true);
    };

    asyncFn();
  }, [id]);

  useEffect(() => {
    if (randomData.length > 0) {
      setTextFront(randomData[0].vocabulary);
      setTextBack(randomData[0].vietnamese);
    }
  }, [loading]);

  const [activeCard, setActiveCard] = useState(false);
  const [activeBack, setActiveBack] = useState(false);
  const [activeBtn, setActiveBtn] = useState(true);
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [textFront, setTextFront] = useState("");
  const [textBack, setTextBack] = useState("");

  const handleFlip = () => {
    setActiveCard(!activeCard);
    setActiveBack(false);
  };

  const Continue = () => {
    setActiveCard(false);
    setActiveBack(true);
    if (randomData && randomData.length > 1) {
      randomData.splice(0, 1);
      setTextFront(randomData[0].vocabulary);
      setTextBack(randomData[0].vietnamese);
    } else {
      setActiveNextBtn(true);
      setActiveBtn(false);
      setTextFront("Do you want to again?");
      setTextBack("");
      setRandomData(getRandomIndexOfArray(dataTest.flashCardData));
    }
    return (
      <div className="front">
        <div id="txtFront">{textFront}</div>
      </div>
    );
  };

  const Repeat = () => {
    setTextFront(randomData[0].vocabulary);
    setTextBack(randomData[0].vietnamese);
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
                  <div className="wordOfFrontSide">{textFront}</div>
                  <div className="partOfSpeech">verb</div>
                  <div className="phoneticOfWord">/ʃeɪk/</div>
                </div>
                {/*back*/}
                <div className="flashCardBackSide">
                  <div className="upOfBackSide">
                    <div className="imageBackSide">
                      <img
                        src="https://live.staticflickr.com/65535/53045740005_ff9d5d0d9f_n.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`txtBack ${activeBack ? "hiddenBack" : ""}`}
                    >
                      <div className="definitionOfWord">
                        a usually tall hollow object made of glass, used for
                        drinking
                      </div>
                      <div className="meaningOfWord">{textBack}</div>
                    </div>
                  </div>
                  <div className="downOfBackSide">
                    <div className="examplesOfWordContainer">
                      <div className="exampleOfTitle">Example:</div>
                      <div className="exampleOfWordEn">
                        She is filling her glass
                      </div>
                      <div className="exampleOfWordVn">
                        Cô ấy đang rót đầy cốc của cô ấy
                      </div>
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
