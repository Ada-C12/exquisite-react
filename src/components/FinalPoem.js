import React, { Component } from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      revealPoem: false,
      finalPoem: '',
    };
  }

  onRevealClick = () => {
    console.log(this.props.allLines);
    const formattedPoem = this.props.allLines.map((line) => {
      console.log(line);
      return <p>{line}</p>
    });

    this.setState({
      revealPoem: true,
      finalPoem: formattedPoem,
    });
  }

  render () {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          { this.state.finalPoem }
        </section>

        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn" 
            onClick={ this.onRevealClick }
          />
        </div>
      </div>
    );
  }
}

export default FinalPoem;
