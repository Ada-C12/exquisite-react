import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const showButton = 
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.showPoem} />
    </div>;

  const finalPoemContent = props.submissions.map((line, i) => {
    return <p key={i}>{line}</p>
  })
  
  const finalPoem = 
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {finalPoemContent}
    </section>;

  const buttonOrPoem = props.isSubmitted ? finalPoem : showButton;

  return (
    <div className="FinalPoem">
      {buttonOrPoem}
    </div>
  );
}

export default FinalPoem;
