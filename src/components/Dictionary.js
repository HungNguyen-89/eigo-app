import React, { useEffect, useState } from "react";
import "./Dictionary.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading/Loading";

const Dictionary = () => {
  const { id } = useParams();
  const [dataDictionary, setDataDictionary] = useState([]);
  const [btnValueCheck, setBtnValueCheck] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState("");
  const [checkHaveData, setCheckHaveData] = useState(true);

  useEffect(() => {
    const asyncFn = async () => {
      try {
        let res = await axios.get(
          `https://db-eigo-app.onrender.com/dictionary/${id}`
        );
        let data = res && res.data ? res.data : [];
        setDataDictionary(data.data);
        setLoading(true);
        setCheckHaveData(true);
        console.log(data.data);
      } catch (error) {
        console.log(error.response.status);
        setCheckHaveData(false);
        setLoading(false);
        //console.log(checkHaveData);
      }
    };

    asyncFn();
  }, [id]);

  const [strValue, setStrValue] = useState(id);

  const inputValuecheck = (event) => {
    // event.preventDefault();
    setStrValue(event.target.value.toLowerCase());
    var str = document.getElementById("input-value-dict")?.value;
    if (str.trim().length !== 0) {
      //console.log("input value is NOT empty");
      setBtnValueCheck(false);
    } else {
      //console.log("input value is empty");
      setBtnValueCheck(true);
    }
  };

  const earseTextInput = () => {
    setStrValue("");
    setBtnValueCheck(true);
  };

  return (
    <div className="hompage-container">
      <div className="dictionary-title">DICTIONARY</div>
      <div className="dictionary-box-search">
        <div className="dictionary-box-icon">
          <img alt="" src="https://i.imgur.com/1r8PmNM.png" />
        </div>
        <div className="input-container">
          <input
            type="text"
            id="input-value-dict"
            value={strValue}
            onChange={(e) => inputValuecheck(e)}
            placeholder="Type here to search"
          />
          {!btnValueCheck ? (
            <img
              src="https://i.imgur.com/p0VdGTx.png"
              onClick={() => earseTextInput()}
              alt=""
            />
          ) : (
            ""
          )}
        </div>

        <button
          className="dictionary-box-search-btn"
          disabled={btnValueCheck}
          onClick={() => navigate(`/dictionary/search/${strValue}`)}
        >
          Search
        </button>
      </div>

      {checkHaveData ? (
        <>
          {loading ? (
            <>
              {dataDictionary?.map((content) => (
                <div className="dictionary-content">
                  <div className="words-to-search-for">{content.word}</div>
                  <div className="word-classification">
                    {content.partOfSpeech}
                  </div>
                  <div className="word-phonetic">{content.phonetic}</div>
                  <div className="meaning-of-the-word-container">
                    <div className="meaning-of-the-word-en">
                      {content.definitionOfWord}
                    </div>
                    <div className="meaning-of-the-word-vn">
                      {content.meaningOfWord}
                    </div>
                    <div className="example-of-the-word-container">
                      <div className="example-of-the-word-container-en">
                        {content.exampleEn}
                      </div>
                      <div className="example-of-the-word-container-vn">
                        {content.exampleVn}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="loading-container">
              <Loading />
            </div>
          )}
        </>
      ) : (
        <div className="dictionary-content-not-found">
          No match found for “{id}”
        </div>
      )}
    </div>
  );
};

export default Dictionary;
