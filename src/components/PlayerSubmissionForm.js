import React, { Component } from 'react';
import PropType from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      placeholders: {},
    }
  }

  componentDidMount = () => {
    this.initializeFieldsAndPlaceholders();
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

  initializeFieldsAndPlaceholders = () => {
    let fieldState = {};
    let placeholderState = {};
    const formFields = this.props.formFields;

    for (const field of formFields) {
      if (field.key) {
        const {key, placeholder} = field;
        fieldState[key] = '';
        placeholderState[key] = placeholder;
      } else {
        fieldState[field] = field;
      }
    }

    this.setState({ fields: fieldState, placeholders: placeholderState });
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

  makeInputCollection = (stateFields, placeholders) => {
    // const { placeholders } = this.state;
    const inputCollection = Object.keys(stateFields).map((field, i) => {
      if ( !/the/i.test(field)
      && !/[.,?!]/.test(field)
      && !/^a$/.test(field) ) {
        const fieldName = field;
        const fieldValid = this.validate(String( fieldName ));
        return <input 
          key={ i }
          name={ fieldName }
          value={ this.state.fields[fieldName] }
          placeholder={ placeholders[field] }
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
    const inputs = this.makeInputCollection(this.state.fields, this.state.placeholders);
    
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
