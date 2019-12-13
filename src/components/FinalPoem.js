import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  function showSentence(sentenceArray) {
    if (sentenceArray) {
      console.log(sentenceArray);
      return (
        <div>
        The&nbsp;
          {sentenceArray[0]}&nbsp;
          {sentenceArray[1]}&nbsp;
          {sentenceArray[2]}&nbsp;
          {sentenceArray[3]} the&nbsp;
          {sentenceArray[4]}&nbsp;
          {sentenceArray[5]}
          .
          </div> 
      );
    } else {
      return null;
    }
  }

  function mapSentences(props) {props.finalPoemLines.map((sentenceArray) => {
    return <div>{showSentence(sentenceArray)}</div>;
  })};

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {mapSentences(props)} 
        {/* I'm able to see the state via console.log, but the sentences won't display */}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
