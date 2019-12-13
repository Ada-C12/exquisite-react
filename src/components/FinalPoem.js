import React, { Component } from 'react';
import './FinalPoem.css';

// const FinalPoem = (props) => {   
class FinalPoem extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  };

  onShowPoem = () => {
    this.setState( { show: true } )
  };

  submissionstCollection () { 
    const submissionstCollection = this.props.poems.map((submission, i) => {
      return <p key={i}>{`The ${submission.adjective} ${submission.noun} ${submission.adverb} ${submission.verb} the ${submission.adjective2} ${submission.noun2}.`}</p>; 
      }
    );
    return submissionstCollection
  }

  render () {

    if (this.state.show === true) {

    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <ul>
            {this.submissionstCollection()}
          </ul>
        </section>
      </div>
    );
  }

  else {
    return (
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.onShowPoem} />
      </div>
    );
    } 
  } 
};

export default FinalPoem;
