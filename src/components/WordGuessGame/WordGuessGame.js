import React, { Fragment } from "react";
import { useState } from "react";
import "./WordGuessGame.scss";

const WordGuessGame = () => {
  // str1 is the reference text.
  var str1 = "いちばん";
  // str2 is the text which I want to compare with str1.
  var str2 = "いちご12";

  function words(s) {
    return s.split("");
  }

  function markWords(source, reference) {
    var marked = [];
    // Loop over all the words in source.
    for (let index = 0; index < source.length; index++) {
      // Check if reference has fewer words or of the word at the
      // same index is different from the word in source.
      if (reference.length < index || source[index] !== reference[index]) {
        // Words are not equal, mark the word.
        marked.push(`<span style='color:red'>${source[index]}</span>`);
      } else {
        // Words are equal, output as is.
        marked.push(source[index]);
      }
    }

    // Return the array with (marked) words.
    return marked;
  }

  // function addToDOM(sentence) {
  //   const div = document.createElement("div");
  //   div.innerHTML = sentence;
  //   console.log(sentence);
  //   document.body.appendChild(div);
  // }

  let a = words(str1);
  let b = words(str2);
  console.log(a);

  // Mark the words in a which are different in b.
  const aMarked = markWords(a, b);
  // addToDOM(aMarked.join(" "));
  console.log(aMarked);

  // Mark the words in b which are different in a.
  const bMarked = markWords(b, a);
  // addToDOM(bMarked.join(" "));

  return (
    <Fragment>
      <div className="container">
        <div className="header">
          <div id="totalAnswer"></div>
          <div id="notification"></div>
          <div id="timeClock"></div>
        </div>
        <div id="image-background"></div>
        <div className="suggest">
          {aMarked &&
            aMarked.length > 0 &&
            aMarked.map((item, index) => {
              return (
                <div
                  className="answerCorrect"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item }}
                >
                  {/* {item} */}
                </div>
              );
            })}
        </div>
        <div className="inputText">
          {bMarked &&
            bMarked.length > 0 &&
            bMarked.map((item, index) => {
              return (
                <div
                  className="answerWrong"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item }}
                >
                  {/* {item} */}
                </div>
              );
            })}
        </div>
        <div id="buttonPlayContainer"></div>
      </div>
    </Fragment>
  );
};

export default WordGuessGame;
