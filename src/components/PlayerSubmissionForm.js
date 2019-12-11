import React, { Component } from 'react';
import PropType from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: {},
    }
  }

  componentDidMount = () => {
    this.initializeFields();
    this.initializeValidators();
  }

  validate = (fieldName) => {
    const value = this.state.fields[fieldName];
    const validation = this.validators[fieldName];

    return (validation.test(value));
  }

  initializeValidators = () => {
    this.validators = {};
    const formFields = this.props.formFields;

    for (const field of formFields) {
      if (field.key) {
        const {key} = field;
        this.validators[key] = /.+/;
      } else {
        this.validators[field] = new RegExp(field);
      }
    }
  }

  initializeFields = () => {
    let updatedState = {};
    const formFields = this.props.formFields;

    for (const field of formFields) {
      if (field.key) {
        const {key} = field;
        updatedState[key] = '';
      } else {
        updatedState[field] = field;
      }
    }

    this.setState({ fields: updatedState });
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const { fields } = this.state;
    const updatedFields = fields;
    updatedFields[name] = value;

    this.setState({fields: updatedFields});
  }

  clearState = () => {
    let { fields } = this.state;
    fields = {};
    
    this.setState({ fields });
    this.initializeFields();
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // returns if there's any invalid inputs
    const keys = Object.keys(this.validators);
    for (const key of keys) {
      if (!this.validators[key].test(this.state.fields[key])) {
        return;
      }
    }

    // get the values from state
    const submissionComponentsArray = Object.values({ ...this.state.fields });
    // pass up array to Game
    this.props.onFormSubmit(submissionComponentsArray);
    // clear all changeable values from state
    this.clearState();
  }

  makeInputCollection = (fields) => {
    const inputCollection = Object.keys(fields).map((field, i) => {
      if ( !/the/i.test(field) 
      && !/[.?,!]/.test(field) 
      && !/^a$/i.test(field) ) {
        const fieldValid = this.validate(String( field ));
        return <input 
          key={ i }
          name={ field }
          value={ this.state.fields[field] }
          placeholder={ field }
          onChange={ this.onFieldChange }
          className={ fieldValid ? 'valid' : 'PlayerSubmissionForm__input--invalid' }
          type="text"
        />;
      } else {
        return field;
      }
    });
    return inputCollection;
  }

  render() {
    const inputs = this.makeInputCollection(this.state.fields);

    return (
      <div className="PlayerSubmissionForm" onSubmit={this.onFormSubmit}>
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            { inputs }
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  formFields: PropType.array.isRequired,
  playerNumber: PropType.number.isRequired,
  onFormSubmit: PropType.func.isRequired,
};

export default PlayerSubmissionForm;
