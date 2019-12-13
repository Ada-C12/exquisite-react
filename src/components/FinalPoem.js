import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const revealPoemButton = 
    <div className="FinalPoem__reveal-btn-container">
      <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" 
        onClick={props.revealPoem} />
    </div>

  const submissionsCollection = props.poems.map((submission, i) => {
    const sentence = `The ${submission.adjective} ${submission.noun} ${submission.adverb} ${submission.verb} the ${submission.adjective2} ${submission.noun2}.` 
    return <p key={i}> {sentence}</p>;
    }
  );

  const Poem = 
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <ul>
          {submissionsCollection}
        </ul>
      </section>
    </div>;
    

  return ( 
    props.showPoem ? Poem : revealPoemButton 
    ); 
  };
  
export default FinalPoem;