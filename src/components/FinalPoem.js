import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const onButtonClick = () => {
    props.onClickCallBack();
  }

  const allPoems = props.allSubmissions.map((poem, i) => {
    return (
      <section key={i}>
        <p>{poem}</p>
      </section>);
  });

  const gameResult = (props.gameIsOver) ?
    (<section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {allPoems}
    </section>) :
    (<div className="FinalPoem__reveal-btn-container">
      <input
        onClick={onButtonClick}
        type="button"
        value="We are finished: Reveal the Poem"
        className="FinalPoem__reveal-btn" />
    </div>);

  return (
    <div className="FinalPoem">
      {gameResult}
    </div>
  );
}

export default FinalPoem;
