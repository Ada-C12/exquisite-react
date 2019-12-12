import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb1: '',
      verb1: '',
      adjective2: '',
      noun2: '',
    }

    this.validators = {
      adjective1: /.+/,
      noun1: /.+/,
      adverb1: /.+/,
      verb1: /.+/,
      adjective2: /.+/,
      noun2: /.+/,
    };
  }

  renderField = (field) => {
    return (
      <div>
        <input
          type="text"
          name={field}
          placeholder={field.substring(0, field.length - 2)}
          value={this.state[field]}
          onChange={this.onFieldChange}
          className={this.validate(field)}
        />
      </div>
    ) 
  } 

  validate = (fieldName) => {
    const value = this.state[fieldName];
    const validation = this.validators[fieldName];

    return (value.match(validation) ? "" : "PlayerSubmissionForm__input--invalid")
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newFormSub = Object.keys(this.state).map((key, i) => {
      return [key] = this.state[key]
    })

    const newState = Object.keys(this.state).map((key, i)=> {
      return [key] = ''
    })

    this.setState(newState);
    
    this.props.addSubCallback(`The ${newFormSub.adjective1 } ${newFormSub.noun1} ${newFormSub.adverb1} ${newFormSub.verb1} the ${newFormSub.adjective2} ${newFormSub.noun2}.`);
  }

  render() {

    if (this.props.submitted) return '';

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit} >
          <div className="PlayerSubmissionForm__poem-inputs">
            <p>The</p>

            {this.renderField("adjective1")}
            {this.renderField("noun1")}
            {this.renderField("adverb1")}
            {this.renderField("verb1")}

            <p>the</p>

            {this.renderField("adjective2")}
            {this.renderField("noun2")}
            
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
