import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    const stateOfFields = {};
    props.fields.forEach((field) => {
      if (field.key) {
        stateOfFields[ field.key ] = '';
      }
    });

    this.state = stateOfFields;
  };

  newForm () {
    const emptyFields = {};
    this.props.fields.forEach((field) => {
      if (field.key) {
        emptyFields[ field.key ] = '';
      };
      this.setState(
        emptyFields
        );
    })
  }

  onInputChange = (value, key) => {
    this.setState({
      [key]: value,
    });
  }

  submitSubmission = (event) => {
    event.preventDefault();
    const submission = this.props.fields.map((field) => {
      if (field.key) {
        return this.state[field.key];
      } else {
        return field;
      }
    });
    this.props.submitSubmission(submission.join(' '));
    this.newForm();

  }

  isValid = (input) => {
    return input.length;
  }

  render() {

    const input = this.props.fields.map((field, i) => {
      if (field.key) {
        return <input
        key={ i }
        placeholder= { field.placeholder }
        value={ this.state[field.key] }
        onChange={ (event)=> {
          this.onInputChange(event.target.value, field.key)
        }}
        type='text'
        className={ this.isValid(this.state[field.key]) ? "PlayerSubmissionForm__input" : 'PlayerSubmissionForm__input--invalid' }
        />;
      } else {
        return field;
      }
    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form 
        onSubmit={ this.submitSubmission }
        className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            { input }

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
};

PlayerSubmissionForm.propTypes = {
  submitSubmission: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  submissionIndex: PropTypes.number

};

export default PlayerSubmissionForm;
