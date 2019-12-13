import React from 'react';
import PropTypes from 'prop-types'
import './FinalPoem.css';

const FinalPoem = ({allLines, showPoem, onClickShowPoemCallback}) => {

  const fullPoem = () => (
      allLines.map(line => <p>{line}</p>)
  );

  return (
    <div className="FinalPoem">
      { showPoem ? 
      (<section className="FinalPoem__poem">
        <h3>Final Poem</h3> 
       {fullPoem()}
      </section>) : 
      (<div className="FinalPoem__reveal-btn-container">
      <input onClick={() => { onClickShowPoemCallback() }} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>)
      }
    </div>
  )
}

FinalPoem.propTypes = {
  allLines: PropTypes.array.isRequired,
  showPoem: PropTypes.bool.isRequired, 
  onClickShowPoemCallback: PropTypes.func.isRequired,
}

export default FinalPoem;
