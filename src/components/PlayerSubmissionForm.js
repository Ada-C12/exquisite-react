import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adjective: '',
      noun1: '',
      adverb1: '',
      verb: '',
      adverb2: '',
      noun2: '',
    }

    this.validators = {
      adjective: /.+/,
      noun1: /.+/,
      adverb1: /.+/,
      verb: /.+/,
      adverb2: /.+/,
      noun2: /.+/,
    };
  }

  validate = (fieldName) => {
    const value = this.state[fieldName];
    const validation = this.validators[fieldName];

    if (value.match(validation)) {
      return true;
    }
    return false;
  }

  onFieldChange = (event) => {
    const {placeholder, value} = event.target;
    const updatedState = {};
    updatedState[placeholder] = value;

    this.setState(updatedState);
  }

  sendSubmission = (event) => {
    event.preventDefault();
    let allValid = true;

    Object.keys(this.validators).forEach((key) => {
      if (!this.state[key].match(this.validators[key])) {
        allValid = false;
      }
    });

    if (!allValid){
      return;
    }

    const newSubmission = `The ${this.state.adjective} ${this.state.noun1} ${this.state.adverb1} ${this.state.verb} the ${this.state.adverb2} ${this.state.noun2}.`

    this.setState({
      adjective: '',
      noun1: '',
      adverb1: '',
      verb: '',
      adverb2: '',
      noun2: '',
    });

    this.props.addSubmissionCallback(newSubmission);
  }

  render() {
    const adjectiveValid =  this.validate('adjective');
    const noun1Valid =  this.validate('noun1');
    const adverb1Valid =  this.validate('adverb1');
    const verbValid =  this.validate('verb');
    const adverb2Valid =  this.validate('adverb2');
    const noun2Valid =  this.validate('noun2');

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.count}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.sendSubmission}>
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
            placeholder="adjective"
            value={this.state.adjective}
            onChange={this.onFieldChange}
            className={adjectiveValid ? 'valid' : 'PlayerSubmissionForm__input--invalid'}
            type="text"/>

            <input
            placeholder="noun1"
            value={this.state.noun1}
            onChange={this.onFieldChange}
            className={noun1Valid ? 'valid' : 'PlayerSubmissionForm__input--invalid'}
            type="text"/>
        
            <input
            placeholder="adverb1"
            value={this.state.adverb1}
            onChange={this.onFieldChange}
            className={adverb1Valid ? 'valid' : 'PlayerSubmissionForm__input--invalid'}
            type="text"/>

            <input
            placeholder="verb"
            value={this.state.verb}
            onChange={this.onFieldChange}
            className={verbValid ? 'valid' : 'PlayerSubmissionForm__input--invalid'}
            type="text"/>
            
            the
            <input
            placeholder="adverb2"
            value={this.state.adverb2}
            onChange={this.onFieldChange}
            className={adverb2Valid ? 'valid' : 'PlayerSubmissionForm__input--invalid'}
            type="text"/>
        
            <input
            placeholder="noun2"
            value={this.state.noun2}
            onChange={this.onFieldChange}
            className={noun2Valid ? 'valid' : 'PlayerSubmissionForm__input--invalid'}
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
