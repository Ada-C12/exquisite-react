import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    props.fields.forEach((element) => {
      if (element.key){
        this.state[element.key] = ''
      } 
    })
  }

  renderFields = () => {
    const { state, onFieldChange, validate } = this

    let allElements = []

    this.props.fields.forEach((element) => {
      if (element.key) {
        allElements.push(
          <div>
            <input
              type="text"
              name={element.key}
              placeholder={element.placeholder}
              value={state[element.key]}
              onChange={onFieldChange}
              className={validate(element.key)}
            />
          </div>
        )
      } else {
        allElements.push(
          <div> {element} </div>
        )
      }
    })

    return allElements;
  }

  validate = (fieldName) => {
    const value = this.state[fieldName];

    return (value.match(/.+/) ? "" : "PlayerSubmissionForm__input--invalid")
  }

  generateSentence = () => {
    let newLine = ''

    this.props.fields.forEach((element) => {
      if (element.key){
        newLine += `${this.state[element.key]} `
      } else {
        newLine += `${element} `
      }
    })

    return newLine
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    const { state, generateSentence } = this

    event.preventDefault();

    // Saves current form data in new constant
    const newFormSub = {}
    for (const field of Object.keys(state)) {
      newFormSub[field] = state[field]
    }

    // Resets all state values to equal empty strings
    const newState = {}
    for (const field of Object.keys(state)) {
      newState[field] = ''
    }

    this.setState(newState);
    this.props.addSubCallback(generateSentence());
  }

  render() {

    const { submitted, player } = this.props

    if (submitted) return '';

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ player }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit} >
          <div className="PlayerSubmissionForm__poem-inputs">

            {this.renderFields()}

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
