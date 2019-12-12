import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const {poemLines, poemComplete} = props;
  const finalPoem = poemLines.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    )
  });

  const finalizePoem = () => {
    props.poemCompleteCallBack();
  }

  const display = () => {
    if (poemComplete){
      return (
      <section className="FinalPoem__poem">
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
      <h3>Final Poem</h3>
      {display()}
    </div>
  );
}

export default FinalPoem;
