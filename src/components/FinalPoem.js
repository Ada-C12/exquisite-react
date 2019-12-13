import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const finalPoem = props.lines;

  const finalPoemReturn = finalPoem.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    );
  });
  
  const completePoem = () => {
  return (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {finalPoemReturn}
      </section>
    )
  };

  const poemButton = () => {
    return (
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.endGameCallback} />
      </div>
    )
  };
  
  return (
    <div className="FinalPoem">
     {props.gameEnded ? completePoem() : poemButton()}
    </div>
  );
}

export default FinalPoem;
