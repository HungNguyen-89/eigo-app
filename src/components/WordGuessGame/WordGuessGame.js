import React, { Fragment } from "react";
import "./WordGuessGame.scss";

const WordGuessGame = () => {
  // str1 is the reference text.
  var str1 = "Anh ay song o mot noi nao đo thuoc London";
  // str2 is the text which I want to compare with str1.
  var str2 = "anh ay song o mot quan thuoc Ha Noi";

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

  let a = words(str1);
  let b = words(str2);

  // Mark the words in a which are different in b.
  const aMarked = markWords(a, b);
  //addToDOM(aMarked.join(' '));

  // Mark the words in b which are different in a.
  const bMarked = markWords(b, a);
  console.log(bMarked.join(" "));
  //addToDOM(bMarked.join(" "));

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
          <div dangerouslySetInnerHTML={{ __html: aMarked.join(" ") }} />
        </div>
        <div className="inputText">
          <div dangerouslySetInnerHTML={{ __html: bMarked.join(" ") }} />
        </div>
        <div id="buttonPlayContainer"></div>
      </div>
    </Fragment>
  );
};

export default WordGuessGame;
