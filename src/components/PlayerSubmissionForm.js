import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

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
    
    let newSubmission = {}
    Object.keys(this.state).forEach((key) => {  
      newSubmission[key] = this.state[key]
    });  

    this.props.addSubmissionCallback(newSubmission);
    this.props.lastSubmissionCallback(newSubmission);
    
    this.setState(
      STATE
    );
  };

  render() {

    let form = this.props.fields.map((field) => { 
      if (field['key']) {
        return <input placeholder={ field['key'] } 
          type="text" 
          className={this.validate(field['key'])} 
          value={this.state[field['key']]} 
          onChange={this.onFieldChange}
          />              
      } else {
        return field
      }
    });
 
  if (this.props.showPoem !== true) 
    {
      return (
        <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player }</h3>
        <form className="PlayerSubmissionForm__form" >
          <div className="PlayerSubmissionForm__poem-inputs">
            { form }
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
  noun2: ''
};

PlayerSubmissionForm.propTypes = {
  addSubmissionCallback: PropTypes.func.isRequired,
  lastSubmissionCallback: PropTypes.func.isRequired,
  player: PropTypes.number.isRequired,
  showPoem: PropTypes.bool.isRequired,
  fields: PropTypes.array.isRequired
}

export default PlayerSubmissionForm;
