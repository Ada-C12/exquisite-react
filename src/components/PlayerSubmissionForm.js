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
              className={this.state.adjective ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.adjective} 
            />
            <input 
              name="noun"
              placeholder="noun"
              type="text" 
              className={this.state.noun ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.noun} 
            />
            <input 
              name="adverb"
              placeholder="adverb"
              type="text" 
              className={this.state.adverb ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.adverb} 
            />
            <input 
              name="verb"
              placeholder="verb"
              type="text" 
              className={this.state.verb ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.verb} 
            />
            the 
            <input 
              name="adjective2"
              placeholder="adjective"
              type="text" 
              className={this.state.adjective2 ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
              onChange={this.onFormChange} 
              value={this.state.adjective2} 
            />
            <input 
              name="noun2"
              placeholder="noun"
              type="text" 
              className={this.state.noun2 ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"} 
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
