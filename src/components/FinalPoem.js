import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const finalPoem = props.finalPoem.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    )
  })

  // console.log(props.finalPoem)

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{finalPoem}</div>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.submitPoemCallback}/>
      </div>
    </div>
  );
}

export default FinalPoem;
