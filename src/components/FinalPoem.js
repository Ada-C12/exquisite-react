import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

// class FinalPoem extends Component {
const FinalPoem = ({ allLines, revealPoem, finishPoem }) => {
  const formattedPoem = allLines.map((line, i) => {
    return <p key={i}>{line}</p>
  });

  return (
    <div className="FinalPoem">
      { revealPoem ? 

      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        { formattedPoem }
      </section>

      :

      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" 
          onClick={ finishPoem }
        />
      </div>
      }
    </div>
  );

}

FinalPoem.propTypes = {
  allLines: PropTypes.array.isRequired,
  revealPoem: PropTypes.bool.isRequired,
  finishPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
