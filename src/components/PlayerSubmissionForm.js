import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  isInputValid = (input) => {
    if (input === ''){
      return "PlayerSubmissionFormt__input--invalid"
    }
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              className={this.isInputValid(this.state.adjective1)}
              name="adjective1"
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.adjective1} />

            <input
              className={this.isInputValid(this.state.noun1)}
              name="noun1"
              placeholder="noun"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.noun1} />

            <input
              className={this.isInputValid(this.state.adverb)}
              name="adverb"
              placeholder="adverb"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.adverb} />
            
            <input
              className={this.isInputValid(this.state.verb)}
              name="verb"
              placeholder="verb"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.verb} />
            
            the
            <input
              className={this.isInputValid(this.state.adjective2)}
              name="adjective2"
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.adjective2} />

            <input
              className={this.isInputValid(this.state.noun2)}
              name="noun2"
              placeholder="noun"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.noun2} />
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
