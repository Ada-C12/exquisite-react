import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const showButton = 
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.showPoem} />
    </div>;

  const finalPoemContent = props.submissions.map((line, i) => {
    return <p key={i}>{line}</p>
  })
  
  const finalPoem = 
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {finalPoemContent}
    </section>;

  const buttonOrPoem = props.isSubmitted ? finalPoem : showButton;

  return (
    <div className="FinalPoem">
      {buttonOrPoem}
    </div>
  );
};

FinalPoem.propTypes = {
  isSubmitted: PropTypes.func.isRequired,
  showPoem: PropTypes.func.isRequired,
  submissions: PropTypes.array,

};

export default FinalPoem;
