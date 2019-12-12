import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const finalPoem = props.finalPoem.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    )
  })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{finalPoem}</div>
      </section>

      {!props.completed ?
        <div className="FinalPoem__reveal-btn-container">
          <input
            type="button"
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
            onClick={props.submitPoemCallback}
          />
        </div> : null}
    </div>
  );
}

FinalPoem.propTypes = {
  finalPoem: PropTypes.array.isRequired,
  submitPoemCallback: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired
};

export default FinalPoem;
