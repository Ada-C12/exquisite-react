import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({allLines, showPoem, onClickShowPoemCallback}) => {

const fullPoem = () => {
  if (showPoem === true) {
    return allLines.map(line => <p>{line}</p>)
  };
} 
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {fullPoem()}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input onClick={() => { onClickShowPoemCallback() }} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}


export default FinalPoem;
