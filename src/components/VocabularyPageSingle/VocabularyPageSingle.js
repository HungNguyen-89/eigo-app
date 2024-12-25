import React, { useEffect, useState } from "react";
import "./VocabularyPageSingle.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { GiNotebook } from "react-icons/gi";
import Loading from "../Loading/Loading";

const VocabularyPageSingle = () => {
  const [currentCase, setCurrentCase] = useState("");
  const { id } = useParams();
  console.log(id);
  const [dataTest, setDataTest] = useState([]);
  const [loading, setLoading] = useState(false);

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
        `https://db-eigo-app.onrender.com/flashcards/${id}`
      );
      let data = res && res.data ? res.data : [];
      console.log(res.data);
      setDataTest(data.flashCardData);
      setLoading(true);
    };

    asyncFn();
  }, [currentCase]);

  return (
    <>
      {loading ? (
        <>
          <div className="exam-page-single-container">
            <div>
              <div className="exam-page-single-items">
                {dataTest?.map((content) => (
                  <div className="exam-page-single-item">
                    <div className="exam-page-single-item-name">
                      {content.name}
                    </div>
                    <button className="examp-page-single-item-btn">
                      <Link
                        className="heading-links-item"
                        to={`/vocabulary-translate-sentences/data/${content.link}`}
                      >
                        <span className="heading-links-item-icon">
                          <GiNotebook />
                        </span>
                        <span className="button-name">Start</span>
                      </Link>
                    </button>
                  </div>
                ))}
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

export default VocabularyPageSingle;
