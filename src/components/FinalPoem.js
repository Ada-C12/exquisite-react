import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  return (
    <div className="FinalPoem">
      {props.finalPoem ? (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {props.submissions.map((submission) => {
            return <p>{submission}</p>
          })}
      </section>
      ) : (
      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
          onClick={props.finalPoemCallBack} />
      </div>
      )}
    </div>
  );
}

FinalPoem.propTypes = {
  submissions: PropTypes.array.isRequired,
  finalPoemCallBack: PropTypes.func,
  finalPoem: PropTypes.bool.isRequired,
};

export default FinalPoem;
