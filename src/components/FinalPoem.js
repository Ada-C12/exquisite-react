import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const poemDisplay = (poem) => {
  return poem.map((line) => {
    return <p>{line}</p>
  });
}

const FinalPoem = (props) => {
  const { poemComplete, finishPoemCallback, poem} = props;
  let display = undefined;
   
  if (poemComplete) {
    display = 
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        { poemDisplay(poem) }
      </section>
  } else {
    display = 
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={finishPoemCallback}/>
      </div>
  }

  return (
    <div className="FinalPoem">
      { display }
    </div>
  );
}

FinalPoem.propTypes = {
  poemComplete: PropTypes.bool.isRequired,
  finishPoemCallback: PropTypes.func.isRequired,
  poem: PropTypes.array.isRequired,
};

export default FinalPoem;
