import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  const revealPoemButton = 
    <div className="FinalPoem__reveal-btn-container">
      <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" 
        onClick={ props.revealPoem } />
    </div>

  const submissionsCollection = props.poem.map((submission, i) => {
    const { adjective, noun, adverb, verb, adjective2, noun2 } = submission
    const sentence = `The ${adjective} ${noun} ${adverb} ${verb} the ${adjective2} ${noun2}.` 
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

FinalPoem.propTypes = {
  poem: PropTypes.array.isRequired,
  revealPoem: PropTypes.func.isRequired,
  showPoem: PropTypes.bool.isRequired  
}
  
export default FinalPoem;