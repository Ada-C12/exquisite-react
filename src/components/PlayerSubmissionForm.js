import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = this.props.format 
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  // validate = (i) => {
  //   return this.state[i][entry].match(/.+/);
  // }

  onFormSubmit = (event) => {
    event.preventDefault();

    //validate

    const newSubmission = this.state.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    this.setState({ ...this.props.format });

    this.props.submitFormCallback(newSubmission);
  }

  formElements = this.props.format.map((field, i) => {
    if (field.key) {
      return (
        <input key={i} placeholder={field.placeholder} name={field.key}  type="text" onChange={this.onChange} 
        // 
        />
        )
      } else { 
        return ( <span key={i}>{field}</span>) }
  })

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {formElements()}
            
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
