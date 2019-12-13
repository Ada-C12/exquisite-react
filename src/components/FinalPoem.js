import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {

  onButtonClick = () => {
    this.props.onFinalButtonClickCallback();
  }

  render() {
    const poemLines = this.props.lines.map((line, i) => {
      return (
        <section key={i}>
          <p>{line}</p>
        </section>
      )
    });

    const gameResult = this.props.gameOver ? 
      (<section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemLines}
      </section>) :
      (<div className="FinalPoem__reveal-btn-container">
        <input onClick={this.onButtonClick} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>)

    return (
      <div className="FinalPoem">
        {gameResult}
      </div>
    );
  }
}

export default FinalPoem;
