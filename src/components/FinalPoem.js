import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const submissions = props.finalPlayerInput;
  // console.log(finalPoem);
  // why does this show in the console when I hit "submit" button?

  
  const poemContent = submissions.map((line, i) => {
    return <p key={ i }>{ line }</p>;
    // why can I use tags here?
  });

  const onFinalClick = (event) => {
    return submissions
    // can't render an object, only components which render itself. YOu can't render an array. 
  };

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onFinalClick}/>
        <ul>{poemContent}</ul>
      </div>
    </div>
  );
}

export default FinalPoem;
