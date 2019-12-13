import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      {props.showPoem ? (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
    {props.poem.map((poemLine, i) => (
      <p key={i}>{poemLine}</p>
    ))}
      </section>
      ) : (
        <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.onDisplayPoem} />
      </div>
      )}
    </div>
  );
}

export default FinalPoem;
