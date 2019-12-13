import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { fields: this.props.format }
  }

  onChange = (event, i) => {
    const { value } = event.target;
    const newState = this.state.fields;
    newState[i]["entry"] = value;
    this.setState({fields: newState});
  }

  validate = (i) => {
    return this.state.fields[i]["entry"].match(/.+/);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newSubmission = this.state.fields.map((field) => {
      if (field.key) {
        return field.entry;
      } else {
        return field;
      }
    }).join(" ");

    const newFields = this.state.fields;
    
    newFields.forEach(field => {
      if (field.entry) { 
        field.entry = "" 
      } 
    });

    this.setState({ fields: newFields });

    this.props.submitFormCallback(newSubmission);
  }

  render() {

    const formElements = this.props.format.map((field, i) => {
    if (field.key) {
      return (
        <input key={i} placeholder={field.placeholder} name={field.key} value={this.state.fields[i]["entry"]} type="text" onChange={(e) => this.onChange(e, i)} className={this.validate(i) ? '' : 'PlayerSubmissionForm__input--invalid'}/>
        )
      } else { 
        return (
        <span key={i}>{field}</span>) }
    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            {formElements}
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
