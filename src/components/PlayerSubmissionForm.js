import React, { Component } from 'react';
import PropType from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subjThe: 'The',
      subjAdjective: '',
      subjNoun: '',
      adverb: '',
      verb: '',
      objThe: 'the',
      objAdjective: '',
      objNoun: '',
    }

    this.validators = {
      subjAdjective: /.+/,
      subjNoun: /.+/,
      adverb: /.+/,
      verb: /.+/,
      objAdjective: /.+/,
      objNoun: /.+/,
    }
  }

  validate = (fieldName) => {
    const value = this.state[fieldName];
    const validation = this.validators[fieldName];

    return (validation.test(value));
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  }

  clearState = () => {
    this.setState({
      subjAdjective: '',
      subjNoun: '',
      adverb: '',
      verb: '',
      objAdjective: '',
      objNoun: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // returns if there's any invalid inputs
    const keys = Object.keys(this.validators);
    for (const key of keys) {
      if (!this.validators[key].test(this.state[key])) {
        return;
      }
    }

    // get the values from state
    const submissionComponentsArray = Object.values({ ...this.state });
    // pass up array to Game
    this.props.onFormSubmit(submissionComponentsArray);
    // clear all changeable values from state
    this.clearState();
  }

  render() {
    const subjAdjectiveValid = this.validate('subjAdjective');
    const subjNounValid = this.validate('subjNoun');
    const adverbValid = this.validate('adverb');
    const verbValid = this.validate('verb');
    const objAdjectiveValid = this.validate('objAdjective');
    const objNounValid = this.validate('objNoun');

    return (
      <div className="PlayerSubmissionForm" onSubmit={this.onFormSubmit}>
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            The
            <input
              name={'subjAdjective'}
              value={this.state.subjAdjective}
              onChange={this.onFieldChange}
              className={subjAdjectiveValid ? '' : 'PlayerSubmissionForm__input--invalid'}
              placeholder="adjective"
              type="text" />
            <input
              name={'subjNoun'}
              value={this.state.subjNoun}
              onChange={this.onFieldChange}
              className={subjNounValid ? '' : 'PlayerSubmissionForm__input--invalid'}
              placeholder="noun"
              type="text" />
            <input
              name={'adverb'}
              value={this.state.adverb}
              onChange={this.onFieldChange}
              className={adverbValid ? '' : 'PlayerSubmissionForm__input--invalid'}
              placeholder="adverb"
              type="text" />
            <input
              name={'verb'}
              value={this.state.verb}
              onChange={this.onFieldChange}
              className={verbValid ? '' : 'PlayerSubmissionForm__input--invalid'}
              placeholder="verb"
              type="text" />
            the
            <input
              name={'objAdjective'}
              value={this.state.objAdjective}
              onChange={this.onFieldChange}
              className={objAdjectiveValid ? '' : 'PlayerSubmissionForm__input--invalid'}
              placeholder="adjective"
              type="text" />
            <input
              name={'objNoun'}
              value={this.state.objNoun}
              onChange={this.onFieldChange}
              className={objNounValid ? '' : 'PlayerSubmissionForm__input--invalid'}
              placeholder="noun"
              type="text" />
            .

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
  playerNumber: PropType.number.isRequired,
  onFormSubmit: PropType.func.isRequired,
};

export default PlayerSubmissionForm;
