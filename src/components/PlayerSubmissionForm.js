import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    }
  }

  inputClassStyle = (input) => {
    const style = (input === "") ? "PlayerSubmissionForm__input--invalid" : "PlayerSubmissionForm__input"
    return style;
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  resetState = () => {
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }

  onAddSubmission = (event) => {
    // stop the default page reload
    event.preventDefault();

    const formattedSubmission = (this.props.fields).map((field) => {
      if (field.key) {
        return this.state[field.key];
      } else {
        return field;
      }
    }).join(" ");

    this.props.addSubmissionCallBack(formattedSubmission);
    this.resetState();
  }

  render() {
    const formFields = (this.props.fields).map((field, i) => {
      if (field.key) {
        return (
          <input
            name={field.key}
            placeholder={field.placeholder}
            type="text"
            value={this.state[field.key]}
            onChange={this.onInputChange}
            className={this.inputClassStyle(this.state[field.key])} />)
      } else {
        return field;
      }
    });

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form onSubmit={this.onAddSubmission} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            {formFields}
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
