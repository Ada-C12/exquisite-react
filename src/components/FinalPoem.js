import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const revealPoem = () => {
    props.revealPoemCallback();
  }

  // format lines so they look like a poem
  const formatPoem = props.finalPoem.map((line, i) => {
      return (
        <p key={i}> 
          {line}
        </p>
      )

})

  // logic for "reveal poem" button and displaying final poem: start with displayPoem value of false in game and "display poem" button visible. When button is clicked, displayPoem value turns to true and buttons is no longer visible.

  if (props.displayPoem === true) {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {formatPoem}
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
