import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({poemLines, poemComplete}) => {

  const finalPoem = poemLines.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    )
  });

  finalizePoem = () => {
    this.props.poemDone()
  }

  const display = () => {
    if (poemComplete == true){
      return (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {finalPoem}
      </section>
      )
    } else {
      return (
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={finalizePoem} />
      </div>
      )
    }
  }

  return (
    <div className="FinalPoem">
      {display}
    </div>
  );
}

export default FinalPoem;
