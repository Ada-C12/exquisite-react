import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = ({ poemData, onRevealPoemCallback, poemRevealed }) => {
  const poemLines = poemData.map ((line, i) => {
    return <p key={i}>
      {line}
    </p>
  });

  let finalDisplay;
  if (poemRevealed) {
    finalDisplay = <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemLines}
      </section>
  } else {
    finalDisplay = <div className="FinalPoem__reveal-btn-container">
      <input onClick={onRevealPoemCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
    </div>
  }
  
  return (
    <div className="FinalPoem">
      {/* <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemLines}
      </section> */}
      {finalDisplay}

      {/* <div className="FinalPoem__reveal-btn-container">
        <input onClick={onRevealPoemCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div> */}
    </div>
  );
}

FinalPoem.propTypes = {
  onRevealPoemCallback: PropTypes.func.isRequired,
  poemData: PropTypes.array.isRequired,
  poemRevealed: PropTypes.bool.isRequired,
};

export default FinalPoem;
