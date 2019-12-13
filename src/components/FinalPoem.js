import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const lines = props.lines

  let finalPoem = lines.map((line, i) => {
    return (
      <p key= {i}>{line}</p>
    )
  })

  if (props.inPlay === true) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ () => {props.onFinishPoemCallback()}}/>
        </div>
      </div>
    );
  } 

  else {
    return (
      <div>
        {console.log(lines)}
      {finalPoem}
      </div>
    )
  }
}

export default FinalPoem;