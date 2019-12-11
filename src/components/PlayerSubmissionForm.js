import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
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
          />
        )}
      else {
        return field
      }
    });


    console.log('props of playerSumbissionForm', this.props)
    console.log('formInputs', formInputs)
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
              // onClick={ }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
