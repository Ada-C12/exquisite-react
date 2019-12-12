import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const revealPoem = () => {
    props.revealPoemCallback();
  }
  const poemDisplay = props.finalPoem.map((stanza, i) => {
    console.log(stanza);
    return (
      <p key={i}>
        {stanza}
      </p>
    )  
  })
  console.log(props.displayPoem);
  
  if (props.displayPoem === true) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {poemDisplay}
        </section>
        </div>
    )
  } else {
    return (
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" onClick={revealPoem} value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    );
  }
}

export default FinalPoem;
