import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  constructor() {
    super();

    this.state = {
      adjective: '',
      noun1: '',
      adverb1: '',
      verb: '',
      adverb2: '',
      noun2: '',
    };
  }

  onFieldChange = (event) => {
    const {placeholder, value} = event.target;
    const updatedState = {};
    updatedState[placeholder] = value;

    this.setState(updatedState);
  }

  sendSubmission = (event) => {
    event.preventDefault();

    const newSubmission = {
      adjective: this.state.adjective,
      noun1: this.state.noun1,
      adverb1: this.state.adverb1,
      verb: this.state.verb,
      adverb2: this.state.adverb2,
      noun2: this.state.noun2,
    }

    this.setState({
      adjective: '',
      noun1: '',
      adverb1: '',
      verb: '',
      adverb2: '',
      noun2: '',
    });

    this.props.addSubmissionCallback(newSubmission);
    // this.resetForm();
  }

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.index}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.sendSubmission}>
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
            placeholder="adjective"
            value={this.state.adjective}
            onChange={this.onFieldChange}
            type="text"/>

            <input
            placeholder="noun1"
            value={this.state.noun1}
            onChange={this.onFieldChange}
            type="text"/>
        
            <input
            placeholder="adverb1"
            value={this.state.adverb1}
            onChange={this.onFieldChange}
            type="text"/>

            <input
            placeholder="verb"
            value={this.state.verb}
            onChange={this.onFieldChange}
            type="text"/>
            
            the
            <input
            placeholder="adverb2"
            value={this.state.adverb2}
            onChange={this.onFieldChange}
            type="text"/>
        
            <input
            placeholder="noun2"
            value={this.state.noun2}
            onChange={this.onFieldChange}
            type="text"/>.
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
