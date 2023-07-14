import React, { useEffect, useState } from "react";
import "./ExamPageSingle.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { GiNotebook } from "react-icons/gi";
import Loading from "../Loading/Loading";
import { VscBook } from "react-icons/vsc";
import { TbListNumbers } from "react-icons/tb";

const ExamPageSingle = () => {
  const [currentCase, setCurrentCase] = useState("");
  const { id } = useParams();
  console.log(id);
  const [dataTest, setDataTest] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (id.includes("n1")) {
  //     setCurrentCase(1);
  //   } else if (id.includes("n2")) {
  //     setCurrentCase(2);
  //   } else if (id.includes("n3")) {
  //     setCurrentCase(3);
  //   } else if (id.includes("n4")) {
  //     setCurrentCase(4);
  //   } else if (id.includes("n5")) {
  //     setCurrentCase(5);
  //   }
  // }, [id]);

  useEffect(() => {
    const asyncFn = async () => {
      let res = await axios.get(`https://db-eigo-app.onrender.com/flashcards`);
      let data = res && res.data ? res.data : [];
      console.log(res.data);
      setDataTest(data);
      setLoading(true);
    };

    asyncFn();
  }, [currentCase]);

  // const DATA = [
  //   { id: 1, link: "/de-thi/de-thi-n1", name: "N1" },
  //   { id: 2, link: "/de-thi/de-thi-n2", name: "N2" },
  //   { id: 3, link: "/de-thi/de-thi-n3", name: "N3" },
  //   { id: 4, link: "/de-thi/de-thi-n4", name: "N4" },
  //   { id: 5, link: "/de-thi/de-thi-n5", name: "N5" },
  // ];

  return (
    <>
      {/* <div class="heading-container">
        <div className="heading">
          <div className="heading-title">Đề thi</div>
          <div className="heading-links">
            {dataTest.map((element, index) => (
              <Link
                key={index}
                to={element.link}
                className={
                  currentCase === index + 1
                    ? "heading-links-item active"
                    : "heading-links-item"
                }
                // onClick={() => {
                //   currentSelector(element.id);
                // }}
              >
                {element.flashCardName}
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      {loading ? (
        <>
          <div className="exam-page-single-container">
            <div>
              {/* <div className="exam-page-single-header">
                <div className="exam-page-single-title">
                  <span className="exam-page-single-title-icon">
                    <VscBook />
                  </span>
                  {dataTest.testName}
                </div>
              </div> */}
              <div className="exam-page-single-items">
                {dataTest?.map((content) => (
                  <div className="exam-page-single-item">
                    <div className="exam-page-single-item-name">
                      {content.flashCardName}
                    </div>
                    <button className="examp-page-single-item-btn">
                      <Link
                        className="heading-links-item"
                        to={`/flashcards/${content.id}`}
                      >
                        <span className="heading-links-item-icon">
                          <GiNotebook />
                        </span>
                        Start
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
              <div className="under-btn-container">
                <Link
                  className="previous-list-btn"
                  //to={`/flashcards/${dataTest.id}`}
                >
                  <span className="previous-list-icon">
                    <TbListNumbers />
                  </span>
                  Back
                </Link>
              </div>
            </div>
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

export default ExamPageSingle;
