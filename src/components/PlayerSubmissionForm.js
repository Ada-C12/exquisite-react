import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
fieldState = () => {
  let  fieldState = {}
  this.props.fields.forEach((field) => {
    if(field.key) {
    fieldState[field.key] = ""
    }

  })
  return fieldState
}

  constructor(props) {
    super(props);
 
 
    this.state = this.fieldState()
  }
 


  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  checkSubmission = () => {
    let check = true 
    this.props.fields.forEach((field) => {
      if (field === ""){
        check = false 
      }
    
    })
    return check 
  }
  onSubmit = (event) => {
    event.preventDefault();
    if (this.checkSubmission()) {
      this.props.addLineCallback(this.state)
    }

      this.setState(this.fieldState());

    }
  


  render() {
    
    console.log(this.state)
    const playerForm = this.props.fields.map((field, i) => {
      if(field.key) {
        return(<input
          key={i}
          placeholder={field.placeholder}
          name={field.key}
          value={this.state[field.key]}
          onChange={this.onInputChange}
          type="text" />

        )

      }else{
        return field
      }

    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNum}</h3>

        <form onSubmit={this.onSubmit} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {playerForm}
           

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line"className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
