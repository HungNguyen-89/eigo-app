import React, { useEffect, useState } from "react";
import "./VocabularyTranslateSentences.scss";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { TbListNumbers } from "react-icons/tb";
import { AiFillSound } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { MdOutlineQuiz } from "react-icons/md";
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
  const [input, setInput] = useState(false);
  const [aMarked, setAMarked] = useState("");
  const [bMarked, setBMarked] = useState("");
  const [checkResult, setCheckResult] = useState("");
  const [correct, setCorrect] = useState(false);

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

  const [activeBtn, setActiveBtn] = useState(true);
  const [activeNextBtn, setActiveNextBtn] = useState(false);

  const Continue = () => {
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
      setInput(false);
      setCheckResult("");
      setCorrect(false);
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
    setCheckResult("");
    setCorrect(false);
  };

  const sentencesCheck = () => {
    setInput(true);
    var str2 = document.getElementById("input-value").value;
    if (example_1 === str2) {
      setCheckResult("✓");
      setCorrect(true);
    } else setCheckResult("✕");

    function words(s) {
      return s.match(/\w+/g);
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
    let b = words(str2);

    // Mark the words in a which are different in b.
    setAMarked(markWords(a, b).join(" "));
    //addToDOM(aMarked.join(' '));
    // Mark the words in b which are different in a.
    setBMarked(markWords(b, a).join(" "));
    //console.log(bMarked.join(" "));
    //addToDOM(bMarked.join(" "));
  };

  return (
    <>
      {loading && randomData.length > 0 ? (
        <div className="vocabularyTranslateContainer">
          <div className="vocabularyTranslateFrontSide">
            <div className="sentencesUp">
              <div className="sentencesVn">
                <MdOutlineQuiz />
                {example_1_vn}
              </div>
              <div className={"sentencesSuggest"}>
                {input ? (
                  <div dangerouslySetInnerHTML={{ __html: aMarked }} />
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
              <div className="sentencesEn">
                {input ? (
                  <div>
                    <div
                      className="sentencesEnInput"
                      dangerouslySetInnerHTML={{ __html: bMarked }}
                    />
                    <div
                      className={
                        correct
                          ? "checkResult correct"
                          : "checkResult uncorrect"
                      }
                    >
                      {checkResult}
                    </div>
                  </div>
                ) : (
                  <input
                    id="input-value"
                    placeholder="Type here to input"
                  ></input>
                )}
              </div>
            </div>

            <div className="sentencesDown">
              <div className="explainWord"></div>
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
              onClick={() => sentencesCheck()}
            >
              <span className="buttonPlay-icon">
                <FiCheckSquare />
              </span>
              Check
            </button>
          </div>
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
