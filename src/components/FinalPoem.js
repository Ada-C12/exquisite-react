import React, { Component } from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finalPoem: '',
    };
  }

  onRevealClick = (event) => {
    event.preventDefault();

    this.props.finalPoemCallback();

    const formattedPoem = this.props.allLines.map((line, i) => {
      console.log(line);
      return <p key={i}>{line}</p>
    });

    this.setState({
      finalPoem: formattedPoem,
    });
  }

  render () {
    return (
      <div className="FinalPoem">
        { this.props.revealPoem ? 

        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          { this.state.finalPoem }
        </section>

        :

        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn" 
            onClick={ this.onRevealClick }
          />
        </div>
        }
      </div>
    );
  }
}

export default FinalPoem;
