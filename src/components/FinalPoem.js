import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poemLines = props.submissions.map((sentence) =>
    <div key={sentence.toString()}>
      {sentence}
    </div>
  );

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemLines}
      </section>


      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" 
        />
      </div>
    </div>
  );
}

export default FinalPoem;
