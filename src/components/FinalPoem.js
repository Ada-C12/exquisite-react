import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const finalPoem = () => {
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.lines.map(line => (<p key={line}>{line}</p>))}
      </section>
      </div>
  )
  };

  const poemButton = () => {
    return (
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.endGameCallback} />
      </div>
    )
  };
  
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.lines.map(line => (<p key={line}>{line}</p>))}
      </section>
    <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.endGameCallback} />
    </div>
    </div>
  );
}

export default FinalPoem;
