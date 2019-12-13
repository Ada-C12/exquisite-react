import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  const sentences = props.sentences.map((sentence, i) => {
    return (
    <p key={i}> { sentence } </p>
    );
  })

  return (
    <div className="FinalPoem">
      {
        props.completedGame &&
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          { sentences }
        </section>
      }
      <div className="FinalPoem__reveal-btn-container">
        {
          !props.completedGame &&  
          <input onClick={props.onPoemComplete} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
        }
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
  completedGame: PropTypes.bool.isRequired,
  onPoemComplete: PropTypes.func.isRequired
}
export default FinalPoem;


