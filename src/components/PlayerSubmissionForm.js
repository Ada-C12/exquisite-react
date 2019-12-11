import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    }
  }

  resetState = () => {
    this.setState({
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    // const { adjective, noun, adverb, verb, adjective2, noun2 } = this.state;

    // if (adjective === '' || noun === '' || adverb === '' || verb === '' || adjective2 === '' || noun2 === '') return;

    console.log(event);
    this.props.addLineCallback(this.state);
    this.resetState();
  }

  fieldValid = (field) => {
    // const fieldName = this.state[field]
    return this.state[field].match(/.+/);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>
        
        <form onSubmit={this.onSubmit} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <div>The
              <label htmlFor="adjective"></label>
              <input name="adjective" placeholder="adjective" onChange={this.onFormChange} 
              value={this.state.adjective} className={this.fieldValid("adjective") ? "PlayerSubmissionForm__input--valid": "PlayerSubmissionForm__input--invalid"}
              />
            </div>

            <div>
            <label htmlFor="noun"></label>
            <input name="noun" placeholder="noun" 
            onChange={this.onFormChange} value={this.state.noun}
            className={this.fieldValid("noun") ? "PlayerSubmissionForm__input--valid": "PlayerSubmissionForm__input--invalid"}
            />
            </div>

            <div>
              <label htmlFor="adverb"></label>
              <input name="adverb" placeholder="adverb"
              onChange={this.onFormChange} value={this.state.adverb}
              className={this.fieldValid("adverb") ? "PlayerSubmissionForm__input--valid": "PlayerSubmissionForm__input--invalid"}
              />
            </div>

            <div>
              <label htmlFor="verb"></label>
              <input name="verb" placeholder="verb" 
              onChange={this.onFormChange} value={this.state.verb}
              className={this.fieldValid("verb") ? "PlayerSubmissionForm__input--valid": "PlayerSubmissionForm__input--invalid"}
              />
            </div>

            <div>the
              <label htmlFor="adjective2"></label>
              <input name="adjective2" placeholder="adjective" 
              onChange={this.onFormChange} value={this.state.adjective2}
              className={this.fieldValid("adjective2") ? "PlayerSubmissionForm__input--valid": "PlayerSubmissionForm__input--invalid"}
              />
            </div>

            <div>
            <label htmlFor="noun2"></label>
            <input name="noun2" placeholder="noun" 
            onChange={this.onFormChange} value={this.state.noun2}
            className={this.fieldValid("noun2") ? "PlayerSubmissionForm__input--valid": "PlayerSubmissionForm__input--invalid"}
            />.
            </div>

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input name="submit" type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  addLineCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
