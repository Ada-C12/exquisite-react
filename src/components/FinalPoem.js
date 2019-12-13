import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({allSubmissions, gameFinished, finishGame}) => {
  
  const finishGameButtonPressed = () => {
    finishGame()
  }
  
  const finalPoem = allSubmissions.map((line) => {
    return (
      <p>{line}</p>
    )
  })

  const poemBlock = 
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      { finalPoem }
    </section>

  const revealFinalBlock = 
    <div className="FinalPoem__reveal-btn-container">
      <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" 
        onClick={finishGameButtonPressed}
      />
    </div>



  return (
    <div className="FinalPoem">
      {gameFinished ? poemBlock : revealFinalBlock}
      
    </div>
  );
}

export default FinalPoem;
