import React, { useEffect, useState } from "react";
import "./VocabularyTranslateSentences.scss";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { TbListNumbers } from "react-icons/tb";
import { AiFillSound } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
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
    } else if (id.includes("phrasal")) {
      setCurrentCase("phrasal");
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
  const [input, setInput] = useState(false);
  const [aMarked, setAMarked] = useState("");
  const [bMarked, setBMarked] = useState("");
  const [checkResult, setCheckResult] = useState("");
  const [correct, setCorrect] = useState(false);
  const [btnValue, setBtnValue] = useState(false);
  const [checkResultText, setCheckResultText] = useState("");
  const [checkRepeat, setCheckRepeat] = useState(false);
  const [audio, setAudio] = useState("");

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
      setAudio(randomData[0].audio);
    }
  }, [loading]);

  const [activeBtn, setActiveBtn] = useState(true);
  const [activeNextBtn, setActiveNextBtn] = useState(false);

  const Continue = () => {
    setStrValue("");
    setBtnValue(false);
    setIsChecked(false);

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
      setAudio(randomData[0].audio);
      setInput(false);
      setCheckResult("");
      setCheckResultText("");
      setCorrect(false);
    } else {
      setActiveNextBtn(true);
      setActiveBtn(false);
      setWord("");
      setPartOfSpeech("");
      setPhonetic("");
      setMeaning("");
      setExample_1("");
      setDefinitionOfWord("");
      setExample_1_vn("Do you want to again?");
      setNumberOfWhiteSpace("");
      setRandomData(getRandomIndexOfArray(dataTest.flashCardData));
      setCheckRepeat(true);
    }
    console.log(randomData);
  };

  const Repeat = () => {
    setWord(randomData[0].word);
    setPartOfSpeech(randomData[0].partOfSpeech);
    setPhonetic(randomData[0].phonetic);
    setMeaning(randomData[0].meaning);
    setExample_1(randomData[0].example_1);
    setDefinitionOfWord(randomData[0].definitionOfWord);
    setExample_1_vn(randomData[0].example_1_vn);
    setNumberOfWhiteSpace(getNumberWhiteSpace(randomData[0].example_1));
    setAudio(randomData[0].audio);
    setActiveNextBtn(false);
    setActiveBtn(true);
    setInput(false);
    setCheckResult("");
    setCheckResultText("");
    setCorrect(false);
    setIsChecked(false);
    setCheckRepeat(false);
  };

  const sentencesCheck = () => {
    setBtnValue(false);
    setInput(true);
    var str = document.getElementById("input-value").value;
    if (example_1 === str) {
      setCheckResult("✓");
      setCheckResultText("CORRECT");
      setCorrect(true);
    } else {
      setCheckResult("✕");
      setCheckResultText("WRONG");
    }

    function words(s) {
      return s.match(/\S+/g);
    }

    function markWords(source, reference) {
      var marked = [];
      // Loop over all the words in source.
      for (let index = 0; index < source.length; index++) {
        // Check if reference has fewer words or of the word at the
        // same index is different from the word in source.
        if (reference.length < index || source[index] !== reference[index]) {
          // Words are not equal, mark the word.
          marked.push(`<mark>${source[index]}</mark>`);
        } else {
          // Words are equal, output as is.
          marked.push(source[index]);
        }
      }

      // Return the array with (marked) words.
      return marked;
    }

    let a = words(example_1);
    let b = words(str);

    // Mark the words in a which are different in b.
    setAMarked(markWords(a, b).join(" "));
    //addToDOM(aMarked.join(' '));
    // Mark the words in b which are different in a.
    setBMarked(markWords(b, a).join(" "));
    //console.log(bMarked.join(" "));
    //addToDOM(bMarked.join(" "));
  };

  const [strValue, setStrValue] = useState("");

  const inputValuecheck = (event) => {
    // e.preventDefault();
    setStrValue(event.target.value);
    //console.log(event.target.value);

    var str = document.getElementById("input-value")?.value;
    if (str.trim().length !== 0) {
      //console.log("input value is NOT empty");
      setBtnValue(true);
    } else {
      //console.log("input value is empty");
      setBtnValue(false);
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  const clickHandler = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      randomData.push(randomData[0]);
    } else {
      randomData.pop();
    }
    // console.log(randomData);
  };

  const Sound = () => {
    console.log("1");
    new Audio(audio).play();
  };

  console.log(currentCase);

  return (
    <>
      {loading && randomData.length > 0 ? (
        <div className="vocabularyTranslateContainer">
          <div className="buttonPlayContainer">
            <button className="buttonPlayWithLink">
              <Link to={`/vocabulary-translate-sentences/${currentCase}`}>
                <span className="buttonPlay-icon-link">
                  <TbListNumbers />
                </span>
                Back List
              </Link>
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
              disabled={!btnValue}
              onClick={() => sentencesCheck()}
            >
              <span className="buttonPlay-icon">
                <FiCheckSquare />
              </span>
              Check
            </button>
          </div>

          {checkRepeat ? (
            <div className="vocabularyTranslateFrontSideRepeat">
              <p>Do you want to again?</p>
              <img src="https://i.ibb.co/NgvnR7F/play-again.png" alt="" />
            </div>
          ) : (
            <div className="vocabularyTranslateFrontSide">
              <div className="sentencesUp">
                <div className="sentencesVn">
                  {/* <img src={questionMark} alt="" /> */}
                  {example_1_vn}
                </div>

                <div className="sentencesSuggest">
                  {input ? (
                    <div
                      className="sentencesResult"
                      dangerouslySetInnerHTML={{ __html: aMarked }}
                    />
                  ) : (
                    (() => {
                      const arr = [];
                      for (let i = 0; i < numberOfWhiteSpace + 1; i++) {
                        arr.push(<div className="suggestItem">{i + 1}</div>);
                      }
                      return arr;
                    })()
                  )}
                </div>

                <div className="sentencesEn" id="sentencesEn">
                  {input ? (
                    <div
                      className="sentencesEnInput"
                      dangerouslySetInnerHTML={{ __html: bMarked }}
                    />
                  ) : (
                    <input
                      id="input-value"
                      value={strValue}
                      placeholder="Type here to input"
                      onChange={(e) => inputValuecheck(e)}
                    ></input>
                  )}
                </div>

                {input ? (
                  <div className="checkResultContainer">
                    <div
                      className={
                        correct
                          ? "checkResult correct"
                          : "checkResult uncorrect"
                      }
                    >
                      {checkResult}
                    </div>
                    <div
                      className={
                        correct
                          ? "checkResultText textCorrect"
                          : "checkResultText textWrong"
                      }
                    >
                      {checkResultText}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="sentencesDown">
                {input ? (
                  <div className="explainWordContainer">
                    <div className="explain_word_and_sound">
                      <div className="explain_word">{word}</div>
                      <div
                        className="sound_of_explain_word"
                        onClick={() => Sound()}
                      >
                        <AiFillSound />
                      </div>
                    </div>

                    <div className="part_of_speech">{partOfSpeech}</div>
                    <div className="phonetic_of_word">{phonetic}</div>
                    <div className="definition_of_word">
                      <img
                        src="https://i.ibb.co/LkMP0Z8/Flag-of-the-United-Kingdom.png"
                        alt=""
                      />
                      {definitionOfWord}
                    </div>
                    <div className="meaning_of_word">
                      <img
                        src="https://i.ibb.co/hCsgCjz/Flag-of-Vietnam.png"
                        alt=""
                      />
                      {meaning}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}

          {checkRepeat ? (
            ""
          ) : (
            <div className="checkBoxContainer">
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={() => clickHandler()}
              />
              <span className="checkBoxText">
                Click here if you want to repeat
              </span>
            </div>
          )}
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
