import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);
    //it is in here that we will store the words of the newest submission 
    this.state = {
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
      
    }
  }

  adjectiveValid = () => {
    return this.state.adjective.match(/[A-z]/)
  }

  nounValid = () => {
    return this.state.noun.match(/[A-z]/)
  }
  
  adverbValid = () => {
    return this.state.adverb.match(/[A-z]/)
  }

  verbValid = () => {
    return this.state.verb.match(/[A-z]/)
  }

  adjective2Valid = () => {
    return this.state.adjective2.match(/[A-z]/)
  }

  noun2Valid = () => {
    return this.state.noun2.match(/[A-z]/)
  }

  onFormChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value= event.target.value;

    updatedState[field] = value;

    this.setState(updatedState)
  }

  onSubmitSentence = (event) => {
    event.preventDefault();
    const sentence = {
      adjective: this.state.adjective,
      noun: this.state.noun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    }
    this.props.addSentenceCallback(sentence);
    this.setState({
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form onSubmit={this.onSubmitSentence} className="PlayerSubmissionForm__form" >
          <div className="PlayerSubmissionForm__poem-inputs">
            the
            <input 
              name="adjective"
              placeholder="adjective"
              type="text" 
              className={this.adjectiveValid() ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.adjective} 
            />
            <input 
              name="noun"
              placeholder="noun"
              type="text" 
              className={this.nounValid() ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.noun} 
            />
            <input 
              name="adverb"
              placeholder="adverb"
              type="text" 
              className={this.adverbValid() ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.adverb} 
            />
            <input 
              name="verb"
              placeholder="verb"
              type="text" 
              className={this.verbValid() ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.verb} 
            />
            the 
            <input 
              name="adjective2"
              placeholder="adjective"
              type="text" 
              className={this.adjective2Valid() ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.adjective2} 
            />
            <input 
              name="noun2"
              placeholder="noun"
              type="text" 
              className={this.noun2Valid() ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.noun2} 
            />
            .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input 
              type="submit" 
              value="Submit Line" 
              className="PlayerSubmissionForm__submit-btn" 
            />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  addSentenceCallback: PropTypes.func.isRequired,
  player: PropTypes.number.isRequired,
}

export default PlayerSubmissionForm;
