import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);    
    this.addRecentSubmission = props.addRecentSubmission;
    this.playerNum = 1;
    this.state = {
      // words live in state until submit is clicked
      prefix: 'The',
      adjectiveA: '',
      nounA: '',
      adverb: '',
      verb: '',
      midfix: 'the',
      adjectiveB: '',
      nounB: ''
    }
  }

  updateWord = (event) => {
    const value = event.target.value
    this.setState({
      [event.target.name]: value
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    let submission = '';
    Object.keys(this.state).forEach((key) => {
      submission += ' ' + this.state[key];
    });
    this.setState({
      adjectiveA: '',
      nounA: '',
      adverb: '',
      verb: '',
      adjectiveB: '',
      nounB: ''
    })

    this.addRecentSubmission(submission);
    this.playerNum += 1;
    // turn inputs into a string
    // pass string up to Game to store it
    // Game will pass it on down to Recent Submission & Final Poem
    // then clear out the state
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.playerNum }</h3>

        <form className="PlayerSubmissionForm__form"
        >

          <div className="PlayerSubmissionForm__poem-inputs">

            <input
              name="adjectiveA"
              onChange={this.updateWord}
              placeholder={this.state.adjectiveA === '' ? "adjective" : this.state.adjectiveA}
              value={this.state.adjectiveA}
              type="text"
            />
            <input
              name="nounA"
              onChange={this.updateWord}
              placeholder={this.state.nounA === '' ? "noun" : this.state.nounA}
              type="text"
            />
            <input
              placeholder={this.state.adverb === '' ? "adverb" : this.state.adverb}
              type="text"
            />
            <input
              placeholder={this.state.verb === '' ? "verb" : this.state.verb}
              type="text"
            />
            <input className="PlayerSubmissionForm__input--invalid"
              placeholder={this.state.adjectiveB === '' ? "adjective" : this.state.adjective}
              type="text"
            />
            <input
              placeholder={this.state.nounA === '' ? "noun" : this.state.nounB}
              type="text"
            />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input onClick={this.onSubmitForm} type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
