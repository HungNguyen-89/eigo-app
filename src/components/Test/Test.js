import { useEffect } from "react";
import "./Test.scss";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { TbListNumbers } from "react-icons/tb";
import { FiCheckSquare } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";
import { VscBook } from "react-icons/vsc";
import Loading from "../Loading/Loading";

const array1 = ["A.", "B.", "C.", "D."];

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

const Test = () => {
  const { id } = useParams();
  const [currentCase, setCurrentCase] = useState("");
  const [btn, setBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id.includes("n1")) {
      setCurrentCase(1);
    } else if (id.includes("n2")) {
      setCurrentCase(2);
    } else if (id.includes("n3")) {
      setCurrentCase(3);
    } else if (id.includes("n4")) {
      setCurrentCase(4);
    } else if (id.includes("n5")) {
      setCurrentCase(5);
    }
  }, [id]);

  const urlStart = id.slice(0, -7);
  const urlEnd = id.slice(-6);
  console.log(urlStart, urlEnd);
  const [dataTest, setDataTest] = useState([]);
  useEffect(() => {
    const asyncFn = async () => {
      let res = await axios.get(
        `https://db-beta-nippon-zukan.onrender.com/${urlStart}/${urlEnd}`
      );
      let data = res && res.data ? res.data : [];
      setDataTest(data);
      setLoading(true);
    };

    asyncFn();
  }, [currentCase]);

  const [refreshData, setRefreshData] = useState(false);

  const data1 = dataTest.testQuestionAll?.map((test) => {
    const data5 = getRandomIndexOfArray(test.testQuestions);
    const data3 = data5?.map((test3) => {
      return getRandomIndexOfArray(test3.answerToChoose);
    });

    return {
      question: test.testQuestionTitle,
      testQuestions: data5,
      testAnswerRandom: data3,
    };
  });

  // useEffect(() => {
  //   dataTest.testQuestionAll?.map((test) => {
  //     const data5 = getRandomIndexOfArray(test.testQuestions);
  //     const data3 = data5?.map((test3) => {
  //       return getRandomIndexOfArray(test3.answerToChoose);
  //     });

  //     return {
  //       question: test.testQuestionTitle,
  //       testQuestions: data5,
  //       testAnswerRandom: data3,
  //     };
  //   });
  // }, [refreshData]);

  const Check = (x, y) => {
    const index = `${x}${y}`;
    const answerA = document.getElementById(index + "0");
    const answerB = document.getElementById(index + "1");
    const answerC = document.getElementById(index + "2");
    const answerD = document.getElementById(index + "3");
    let indexAnswer;

    let chon = "chon" + index;
    let kt = "check" + index;
    let dapan = "dapan" + index;
    console.log(chon);
    let a = document.getElementById(chon).value;
    console.log(a);
    let b;
    switch (a) {
      case "A": {
        b = 0;
        answerA.style.color = "blue";
        answerB.style.color = "black";
        answerC.style.color = "black";
        answerD.style.color = "black";
        break;
      }
      case "B": {
        b = 1;
        answerA.style.color = "black";
        answerB.style.color = "blue";
        answerC.style.color = "black";
        answerD.style.color = "black";
        break;
      }
      case "C": {
        b = 2;
        answerA.style.color = "black";
        answerB.style.color = "black";
        answerC.style.color = "blue";
        answerD.style.color = "black";
        break;
      }
      case "D": {
        b = 3;
        answerA.style.color = "black";
        answerB.style.color = "black";
        answerC.style.color = "black";
        answerD.style.color = "blue";
        break;
      }
      case "": {
        b = -1;
        answerA.style.color = "black";
        answerB.style.color = "black";
        answerC.style.color = "black";
        answerD.style.color = "black";
        break;
      }
    }

    console.log(data1[x].testQuestions[y].answer);
    console.log(data1[x].testQuestions[y].answerToChoose);
    console.log(data1[x].testAnswerRandom[y]);

    for (let i = 0; i < 4; i++) {
      let a = data1[x].testQuestions[y].answerToChoose;
      let b = data1[x].testQuestions[y].answer;
      if (data1[x].testAnswerRandom[y][i] === a[b - 1]) {
        indexAnswer = i;
      }
    }

    console.log(indexAnswer);

    if (b !== -1) {
      if (indexAnswer === b) {
        document.getElementById(kt).innerHTML = "✓";
        document.getElementById(kt).classList.add("correct");
      } else {
        document.getElementById(kt).innerHTML = "✕";
        document.getElementById(kt).classList.add("un-correct");
      }
      document.getElementById(dapan).innerHTML = indexAnswer + 1;
    } else {
      document.getElementById(kt).innerHTML = "";
      document.getElementById(dapan).innerHTML = "";
    }
  };

  const answerDisplay = (index, index1, array) => {
    const steps = [];
    for (let i = 0; i < array.length; i++) {
      steps.push(
        <div className={`answerABCD answer${i}`} id={`${index}${index1}${i}`}>
          {array1[i]}
          {array[i]}
        </div>
      );
    }

    return steps.map((item) => {
      return (
        <div className={item.props.className} id={item.props.id}>
          {item.props.children}
        </div>
      );
    });
  };

  const Check2 = () => {
    const a = dataTest.testQuestionAll;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].testQuestions.length; j++) {
        document
          .getElementById(`chon${i}${j}`)
          .classList.remove("selectAnswer-hidden");
        document.getElementById(`chon${i}${j}`).classList.add("selectAnswer");
        document.getElementById(`chon${i}${j}`).value = "";
        document.getElementById(`${i}${j}0`).style.color = "black";
        document.getElementById(`${i}${j}1`).style.color = "black";
        document.getElementById(`${i}${j}2`).style.color = "black";
        document.getElementById(`${i}${j}3`).style.color = "black";
        document.getElementById(`check${i}${j}`).classList.remove("correct");
        document.getElementById(`check${i}${j}`).classList.remove("un-correct");
        document
          .getElementById(`check${i}${j}`)
          .classList.remove("textHidden-display");
        document.getElementById(`check${i}${j}`).classList.add("textHidden");
      }
    }

    document.getElementById("exam-check-btn").disabled = false;
    setRefreshData(!refreshData);
  };

  const DATA = [
    { id: 1, link: "/de-thi/de-thi-n1", name: "N1" },
    { id: 2, link: "/de-thi/de-thi-n2", name: "N2" },
    { id: 3, link: "/de-thi/de-thi-n3", name: "N3" },
    { id: 4, link: "/de-thi/de-thi-n4", name: "N4" },
    { id: 5, link: "/de-thi/de-thi-n5", name: "N5" },
  ];

  const Check3 = () => {
    let mark = true;
    const a1 = dataTest.testQuestionAll;
    for (let i = 0; i < a1.length; i++) {
      for (let j = 0; j < a1[i].testQuestions.length; j++) {
        let g = document.getElementById(`chon${i}${j}`).value;
        if (g === "") {
          mark = true;
          break;
        } else mark = false;
      }
      console.log(mark);
    }

    if (mark) {
      alert("Bạn vui lòng chọn hết các đáp án");
    } else {
      const a = dataTest.testQuestionAll;
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].testQuestions.length; j++) {
          let checkAnswer = document.getElementById(`check${i}${j}`).innerHTML;
          if (checkAnswer === "✕") {
            let resultIndex =
              parseInt(document.getElementById(`dapan${i}${j}`).innerHTML) - 1;
            document.getElementById(`${i}${j}${resultIndex}`).style.color =
              "red";
          }

          document
            .getElementById(`chon${i}${j}`)
            .classList.remove("selectAnswer");
          document
            .getElementById(`chon${i}${j}`)
            .classList.add("selectAnswer-hidden");
          document
            .getElementById(`check${i}${j}`)
            .classList.remove("textHidden");
          document
            .getElementById(`check${i}${j}`)
            .classList.add("textHidden-display");
        }
      }

      document.getElementById("exam-check-btn").disabled = true;
    }
  };

  return (
    <>
      <div class="heading-container">
        <div className="heading">
          <div className="heading-title">Đề thi</div>
          <div className="heading-links">
            {DATA.map((element, index) => (
              <Link
                key={index}
                to={element.link}
                className={
                  currentCase === index + 1
                    ? "heading-links-item active"
                    : "heading-links-item"
                }
              >
                {element.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {loading ? (
        <>
          <div className="test-header-container">
            <div className="test-header">
              <div className="test-header-left">
                <Link className="test-title" to={`/tests/${dataTest.link}`}>
                  <span className="test-title-icon">
                    <VscBook />
                  </span>
                  {dataTest.testName}
                </Link>
                <div className="test-number">{dataTest.testSerial}</div>
              </div>
              <div className="test-header-right"></div>
            </div>
          </div>

          <div className="test-background">
            {data1?.map((data, index) => (
              <>
                <div id="questionMondai1">{data.question}</div>
                <div id="backgroundMondai1">
                  {data.testQuestions &&
                    data.testQuestions?.map((item, index1) => {
                      return (
                        <div className="questionRandom">
                          <div className="questionNumber">
                            {index1 + 1}
                            {`. `}
                            {item.question1}
                            <span className="textTest">{item.question2}</span>
                            {item.question3}
                          </div>
                          {answerDisplay(
                            index,
                            index1,
                            data.testAnswerRandom[index1]
                          )}

                          <div className="selectAnswerABCD">
                            <div id={`select${index}${index1}`}>
                              <select
                                className="selectAnswer"
                                id={`chon${index}${index1}`}
                                onChange={() => Check(index, index1)}
                              >
                                <option value=""></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                              </select>
                            </div>
                            <div
                              className="textHidden"
                              id={`check${index}${index1}`}
                            ></div>
                            <div
                              className="textHidden"
                              id={`dapan${index}${index1}`}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            ))}
          </div>
          <div className="under-btn-container">
            <Link className="previous-list-btn" to={`/tests/${dataTest.link}`}>
              <span className="previous-list-icon">
                <TbListNumbers />
              </span>
              戻る
            </Link>
            <button className="exam-refresh-btn" onClick={() => Check2()}>
              <span className="exam-refresh-btn-icon">
                <TbRefresh />
              </span>
              リセット
            </button>
            <button
              id="exam-check-btn"
              className="exam-check-btn"
              onClick={() => Check3()}
              disabled={btn}
            >
              <span className="exam-check-icon">
                <FiCheckSquare />
              </span>
              確認
            </button>
          </div>
        </>
      ) : (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </>
  );
};

export default Test;
