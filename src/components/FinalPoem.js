import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  if (props.render === true){
    return <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem </h3>
          {props.submissions.map((submission) => {
            return <p>{submission}</p>
          })}
      </section>
    </div>
  }
  return (
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.finalPoemCallback} />
    </div>
  )
}

export default FinalPoem;
