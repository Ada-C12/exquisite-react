import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const { inProgress, finishGameCallback, text} = props;
  let display = undefined

  const poem = text.map((sub) => {
    return <p>{ sub }</p>;
  });

  if (inProgress) {
    display =
      <div className="FinalPoem__reveal-btn-container">
      <input onClick={finishGameCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
  } else {
    display = 
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {poem}
        </section>
      </div>
  }

  return (
    <div className="FinalPoem">
     {display}
    </div>
  );
}

export default FinalPoem;
