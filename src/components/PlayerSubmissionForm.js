import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    // loop through the props.formatFieldsPlaceholders and if there is a .key existing then do that stuff below

    const blankFields = {}

    console.log('props.formatFieldsPlaceholders',props.formatFieldsPlaceholders)

    props.formatFieldsPlaceholders.forEach((field) => {
      console.log('field',field)
      if (field.key) {
        blankFields[field.key] = '';
      }
    });

    console.log('blankfields',blankFields)

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
    console.log("button was pushed")
    // make the sentence from the state + format of line
    const submissionAsLine = this.props.formatFieldsPlaceholders.map((field) => {
      if (field.key) {
        return this.state[field.key]
      }
      else {
        return field
      }
    }).join(' ')
    console.log('submissionAsLine', submissionAsLine)
    // call the callback from Game to add this form's full line to the game's submission in state
    this.props.submitLine(submissionAsLine)
    // reset state of this form
    // need to make an object with keys = to state keys and values = to ''
    const newState = this.resetState(this.state)

    // then put it in setState
    this.setState(
      newState
    )
  }

  resetState = (oldState) => {
    console.log('in resetState fn')
    console.log('oldState', oldState)
    const newState = {}
    for (let key in oldState) {
      newState[key] = ''
    }
    return newState
    }
  
  
  render() {
    
    // Make an array of words + keys and placeholders with jsx and display it below
    
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
          />
        )}
      else {
        return field
      }
    });


    console.log('props of playerSumbissionForm', this.props)
    // console.log('formInputs', formInputs)
    console.log('this.state', this.state)
    

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
