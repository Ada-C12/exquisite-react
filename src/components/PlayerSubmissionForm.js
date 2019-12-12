import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import { placeholder } from '@babel/types';

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
      count: 1,
    };
  }

  onInputChange = (event) => {
    const updatedSubmission = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedSubmission[field] = value;
    this.setState(updatedSubmission);

  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const thisFormat = this.props.fieldFormat.map((field) => {
      if (field.key) {
        return this.state[field.key];
      } else {
        return field;
      }
    }).join(" ");

    this.props.updatedSubmissionCallback({thisFormat})

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
      count: this.state.count + 1
    });
  }

  render() {
    const lineFormat = this.props.fieldFormat.map((field, i) => {
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
        )
      } else {
        return field;
      }
    });

    if(this.props.allPoemLines) {
      return '';
    } else {
      return (
        <div className="PlayerSubmissionForm">
          <h3>Player Submission Form for Player #{ this.state.count }</h3>

          <form className="PlayerSubmissionForm__form" >

            <div className="PlayerSubmissionForm__poem-inputs">
              
            {lineFormat}

            </div>

            <div className="PlayerSubmissionForm__submit">
              <input
              type="submit"
              value="Submit Line"
              className="PlayerSubmissionForm__submit-btn"
              onClick={this.onSubmitHandler} />
            </div>
          </form>
        </div>
    );
  }}
}

export default PlayerSubmissionForm;
