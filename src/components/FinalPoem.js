import React from 'react';
import './FinalPoem.css';


const getPoemLines = (poem) => {
  return poem.map((line) => {
    return <p>{line}</p>
  })
}

const FinalPoem = (props) => {
  console.log(props.buttonCheck);
  
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {getPoemLines(props.poem)}
        </section>
      </div>
    )
}

export default FinalPoem;
