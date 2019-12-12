import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const poemContent = props.submissions.map((line,key) => {
    console.log(line)
    return <p key={key}>{line}</p>;
  });

  const revealPoem =
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemContent}
      </section>

  const revealPoemButton =  
    <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" onClick={props.revealPoem} className="FinalPoem__reveal-btn"/>
    </div>;

  return (
    <div className="FinalPoem">
      {props.isSubmitted ? revealPoem : revealPoemButton}
    </div>
  );
}

export default FinalPoem;
