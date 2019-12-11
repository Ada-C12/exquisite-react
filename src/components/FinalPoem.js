import React from 'react';
import PropType from 'prop-types';
import './FinalPoem.css';

const FinalPoem = ({ poemLines, revealPoem, onRevealPoem }) => {

  const displayPoem = (poemLines) => {
    const collectedPoem = poemLines.map((line, i) => {
      return <p key={i}>{line}.</p>
    });

    return collectedPoem;
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

        { revealPoem ? displayPoem(poemLines) : ''}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ onRevealPoem } />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  poemLines: PropType.arrayOf(PropType.string).isRequired,
  onRevealPoem: PropType.func.isRequired,
  revealPoem: PropType.bool.isRequired,
}

export default FinalPoem;
