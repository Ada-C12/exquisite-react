import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    const blankFields = {}

    props.formatFieldsPlaceholders.forEach((field) => {
      if (field.key) {
        blankFields[field.key] = '';
      }
    });

    this.state = blankFields;
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};

    updatedState[field] = value;

    this.setState(
      updatedState
    )
  }

  onSubmit = (event) => {

    event.preventDefault()
    const submissionAsLine = this.props.formatFieldsPlaceholders.map((field) => {
      if (field.key) {
        return this.state[field.key]
      }
      else {
        return field
      }
    }).join(' ')

    this.props.submitLine(submissionAsLine)

    const newState = this.resetState(this.state)

    this.setState(
      newState
    )
  }

  resetState = (oldState) => {
    const newState = {}
    for (let key in oldState) {
      newState[key] = ''
    }
    return newState
    }
  
  
  render() {
    const formInputs = this.props.formatFieldsPlaceholders.map((field,i) => {
      if (field.key) {
        return (
          <input 
            key={i}
            name={field.key}
            placeholder={field.placeholder}
            type="text"
            onChange={this.onInputChange}
            value={this.state[field.key]}
            className={this.state[field.key] ? "" : "PlayerSubmissionForm__input--invalid"}
          />
        )}
      else {
        return field
      }
    });

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              formInputs // Put your form inputs here... We've put in one below as an example
            }
       
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input 
              type="submit" 
              value="Submit Line" 
              className="PlayerSubmissionForm__submit-btn" 
              onClick={this.onSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
