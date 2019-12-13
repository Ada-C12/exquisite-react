import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
    
    const revealPoemButton = 
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" 
          value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.onPoemSubmittedCallback}/>
      </div>;
    

    const poemContent = props.finalPlayerInput.map((line, i) => {
      return <p key={ i }>{ line }</p>;
    });

    const revealPoem = 
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemContent}
      </section>;

    const content = props.isPoemSubmitted ? revealPoem : revealPoemButton

    return (
      <div className="FinalPoem">
        {content}
      </div>
    );
}

FinalPoem.propTypes = {
  onPoemSubmittedCallback: PropTypes.isRequired,
  isPoemSubmitted: PropTypes.isRequired,
  finalPlayerInput: PropTypes.arrayOf(String), 
}

export default FinalPoem;
