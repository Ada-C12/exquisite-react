import React, { Component } from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    }
  }

  render () {
    const poemContent = this.props.finalPlayerInput.map((line, i) => {
      return <p key={ i }>{ line }</p>;
      // why can I use tags here?
    });

    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>

        </section>

        <div className="FinalPoem__reveal-btn-container">
          {this.props.isPoemSubmitted ? <ul>{poemContent}</ul>: <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.props.onPoemSubmittedCallback}/>}
          
          {/* <ul>{poemContent}</ul> */}
        </div>
      </div>
    );
  }
}

export default FinalPoem;
