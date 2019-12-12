import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {    
  
  const submissionstCollection = props.poems.map((submission, i) => {
  return <p key={i}>{`The ${submission.adjective} ${submission.noun} ${submission.adverb} ${submission.verb} the ${submission.adjective2} ${submission.noun2}.`}</p>;
    }
  );

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <ul>
          {submissionstCollection}
        </ul>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
