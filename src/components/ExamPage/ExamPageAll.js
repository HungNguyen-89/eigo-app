import React, { useEffect, useState } from "react";
import "./ExamPageAll.scss";
import { FaBook } from "react-icons/fa";
import Course1 from "../../assets/ExamPage/course-1.png";
import Course2 from "../../assets/ExamPage/course-2.png";
import Course3 from "../../assets/ExamPage/course-3.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NavbarHeading from "../NavbarHeading/NavbarHeading";
import Loading from "../Loading/Loading";

const ExamPageAll = () => {
  const [dataTestAll, setDataTestAll] = useState([]);
  const { id } = useParams();
  const [currentCase, setCurrentCase] = useState("");
  const [loading, setLoading] = useState(false);

  // const currentSelector = (num) => {
  //   setCurrentCase(num);
  // };

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

  console.log(currentCase);

  useEffect(() => {
    const asyncFn = async () => {
      let res = await axios.get(
        `https://db-beta-nippon-zukan.onrender.com/de-thi/${id}`
      );
      let data = res && res.data ? res.data : [];
      console.log(res.data);
      setDataTestAll(data);
      setLoading(true);
    };

    asyncFn();
  }, [currentCase]);

  const DATA = [
    { id: 1, link: "/de-thi/de-thi-n1", name: "N1" },
    { id: 2, link: "/de-thi/de-thi-n2", name: "N2" },
    { id: 3, link: "/de-thi/de-thi-n3", name: "N3" },
    { id: 4, link: "/de-thi/de-thi-n4", name: "N4" },
    { id: 5, link: "/de-thi/de-thi-n5", name: "N5" },
  ];

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
                // onClick={() => {
                //   currentSelector(element.id);
                // }}
              >
                {element.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {loading ? (
        <>
          <div className="test-container">
            {dataTestAll.books?.map((testAll) => (
              <div className="test">
                <div className="box-up">
                  <img src={testAll.img} alt="" />
                  <div className="content">
                    <span>{testAll.category}</span>
                    <h3>{testAll.name}</h3>
                  </div>
                </div>
                <div className="box-down">
                  <Link to={testAll.link} className="exam-btn">
                    Vào học
                  </Link>
                  <div className="exam-module-icons">
                    <FaBook /> {testAll.modules} modules
                  </div>
                </div>
              </div>
            ))}
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

export default ExamPageAll;
