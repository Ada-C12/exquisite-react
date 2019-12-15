import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    }
  }

  //abstraction of whats being allocated to their proper place
  onPoemInputChange = (event) => {
    console.log(event);
    const updatedState = {}; //updatedstate IS field

    updatedState[event.target.name] = event.target.value;

    this.setState(updatedState); //setting state of field
  }

  //sendSubmission this is the callback submitting form that calls the callaback function
  onSubmit = (event) => {
    event.preventDefault();
    
    this.props.addVerseCallBack({
      adjective: this.state.adjective,
      noun: this.state.noun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    });
    
    this.setState({
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    }); 
  }

  render() {


    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player +1 }</h3>
          
        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name="adjective"
              placeholder="adjective"
              onChange={this.onPoemInputChange}
              value={this.state.adjective}
            />
            <input
              name="noun"
              placeholder="noun"
              onChange={this.onPoemInputChange}
              value={this.state.noun}
            />
              <input
              name="adverb"
              placeholder="adverb"
              onChange={this.onPoemInputChange}
              value={this.state.adverb}
            />
            <input
              name="verb"
              placeholder="verb"
              onChange={this.onPoemInputChange}
              value={this.state.verb}
            />
            <input
              name="adjective2"
              placeholder="adjective"
              onChange={this.onPoemInputChange}
              value={this.state.adjective2}
            />
            <input
              name="noun2"
              placeholder="noun"
              onChange={this.onPoemInputChange}
              value={this.state.noun2}
            />
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
