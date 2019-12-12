import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  
  resetState = () => {
    let stateKeys = {}
    this.props.fields.forEach((field) => {
      if (field.key) {
        stateKeys[field.key] = ''
      }
    });
    return stateKeys
  }
  
  constructor(props) {
    super(props);
    this.state = this.resetState()
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  canSubmit = () => {
    let complete = true
    Object.values(this.state).forEach((value) => {
      if (value === '') {
        complete = false
      }
    })
    return complete
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.canSubmit()) {
      this.props.addLineCallback(this.state);
      this.setState(this.resetState());
    }
  }

  render() {
    // console.log(this.state)
    const fieldsDisplay = this.props.fields.map((field, i) => {
      if (field.key) {
        
        let fieldColor = 'PlayerSubmissionFormt__input--invalid'
        if (this.state[field.key] !== '') {
          fieldColor = 'PlayerSubmissionFormt__input'
        }

        return (
          <input
            key={i}
            name={field.key}
            placeholder={field.placeholder}
            type="text"
            onChange={this.onInputChange}
            value={this.state[field.key]}
            className={fieldColor}
          />
        )
      } else {
        return field
      }
    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerCount }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitHandler} >
          <div className="PlayerSubmissionForm__poem-inputs">
            {fieldsDisplay}
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
