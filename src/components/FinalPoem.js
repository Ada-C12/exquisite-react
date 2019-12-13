import React from 'react';
import './FinalPoem.css';


const getPoemLines = (poem) => {
  return poem.map((line) => {
    return <p>{line}</p>
  })
}

const FinalPoem = (props) => {
  console.log(props.buttonCheck);
  
  if (props.buttonCheck) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {getPoemLines(props.poem)}
        </section>
      </div>
    )
  } else {
      return (
        <div className="FinalPoem">
          <div className="FinalPoem__reveal-btn-container">
            <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.button}/>
          </div>
        </div>

      )
  }
}

export default FinalPoem;
