import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {
  onButtonClick = () => {
    this.props.onClickCallBack();
  }

  render() {
    const allPoems = this.props.allSubmissions.map((poem, i) => {
      return (
        <section key={i}>
          <p>{poem}</p>
        </section>);
    });

    const gameResult = (this.props.gameIsOver) ?
      (<section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {allPoems}
      </section>) :
      (<div className="FinalPoem__reveal-btn-container">
        <input
          onClick={this.onButtonClick}
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
}

export default FinalPoem;
