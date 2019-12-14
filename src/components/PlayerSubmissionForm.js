import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = STATE

    this.validators = {
      adjective: /.+/,
      noun: /.+/, 
      adverb: /.+/, 
      verb: /.+/, 
      adjective2: /.+/, 
      noun2: /.+/,
    }
  };

  onFieldChange = (event) => {
    const { placeholder, value } = event.target;
    
    const updatedState = {};
    updatedState[placeholder] = value;

    this.setState(updatedState);
  };

  validate = (fieldName) => {
    const value = this.state[fieldName];
    const validation = this.validators[fieldName];

    if (value.match(validation)) {
      return 'PlayerSubmissionFormt__input';
    }
    return 'PlayerSubmissionFormt__input--invalid';
  };

  onSubmit = (event) => {
    // Stop the default page reload
    event.preventDefault();

    let allValid = true;

    Object.keys(this.validators).forEach((key) => {
      if (!this.state[key].match(this.validators[key])) {
        allValid = false;
      }
    });

    if (!allValid) {
      return;
    }
    
    const newSubmission = {
      adjective: this.state.adjective,
      noun: this.state.noun, 
      adverb: this.state.adverb, 
      verb: this.state.verb, 
      adjective2: this.state.adjective2, 
      noun2: this.state.noun2,
    }  

    this.props.addSubmissionCallback(newSubmission);
    this.props.lastSubmissionCallback(newSubmission);
    
    this.setState(
      STATE
    );
  };

  render() {

  if (this.props.showPoem !== true) 
    {
      return (
        <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player }</h3>
        <form className="PlayerSubmissionForm__form" >
          <div className="PlayerSubmissionForm__poem-inputs">
            The
              <input placeholder="adjective" type="text" className={this.validate('adjective')} value={this.state.adjective} onChange={this.onFieldChange}/>              
              <input placeholder="noun" type="text" className={this.validate('noun')} value={this.state.noun} onChange={this.onFieldChange}/>
              <input placeholder="adverb" type="text" className={this.validate('adverb')} value={this.state.adverb} onChange={this.onFieldChange}/>
            the  
              <input placeholder="verb" type="text" className={this.validate('verb')} value={this.state.verb} onChange={this.onFieldChange}/>
              <input placeholder="adjective2" type="text" className={this.validate('adjective2') } value={this.state.adjective2} onChange={this.onFieldChange}/>
              <input placeholder="noun2" type="text" className={this.validate('noun2')} value={this.state.noun2} onChange={this.onFieldChange}/>
            .
          </div>
          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.onSubmit} />
          </div>
        </form>
      </div>);
    } else {
      return ('')
    }
  }
};

const STATE = {
  adjective: '',
  noun: '', 
  adverb: '', 
  verb: '', 
  adjective2: '', 
  noun2: '',
};


export default PlayerSubmissionForm;
