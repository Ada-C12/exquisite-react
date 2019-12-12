import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poemLines = props.submissions.map((sentence) =>
    <p key={sentence.toString()}>
      {sentence}
    </p>
  );

  const onFinalButtonClick = () => {
    props.onFinalPoemSubmitCallback()

  }

  const poemShow = () => {
    return <section className="FinalPoem__poem">
    <h3>Final Poem</h3>
    {poemLines}
    </section>
  }

  const buttonShow = () => {
    return <div className="FinalPoem__reveal-btn-container">
    <input 
      onClick={onFinalButtonClick}
      type="button" 
      value="We are finished: Reveal the Poem" 
      className="FinalPoem__reveal-btn" 
    />
    </div>
  }

  return (
    <div className="FinalPoem">

    {props.revealPoem ? poemShow() : buttonShow() }

    </div>
  );
}

export default FinalPoem;
