import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({ poemArray, submitted, onFinalSubmit }) => {

  const displayPoem = () => {
    const lineCollection = poemArray.map((line, i) => {
      return <p key={i}> {line} </p>
    })

    return lineCollection;
  }

  return (
    <div className="FinalPoem">
      { submitted ?
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            { displayPoem() }
        </section>
      : '' }

      <div className="FinalPoem__reveal-btn-container">
        { submitted ? '' : <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={() => onFinalSubmit()} /> }
        
      </div>
    </div>
  );
}

export default FinalPoem;
