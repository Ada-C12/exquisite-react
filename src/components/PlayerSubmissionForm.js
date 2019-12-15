import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.playerNumber = 1;
    this.state = {
      // user words are stored in state until submitted
      article1: 'The',
      adjective1: '',
      noun1: '', 
      adverb: '', 
      verb: '', 
      article2: 'the',
      adjective2: '', 
      noun2: '',
    }
    this.addLine = props.addLine;
  }

updateWord = (word, event) => {
  let value = event.target.value
  this.setState({
    [word]: value
  })
}

onSubmitForm = (event) => {
  // captures input from state and turns it into a line of poetry
  // passes line up to Game
  // Game passes line down to Recent Submission and Final Poem
  // reset state?
  event.preventDefault();
  let line = '';
  Object.keys(this.state).forEach((key) => {
    line += ' ' + this.state[key];
  })
  this.addLine(line)
  this.playerNumber ++;
}

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" 
        onSubmit={this.onSubmitForm}>
          <div className="PlayerSubmissionForm__poem-inputs">

          {/* If field is empty, placeholder name appears. Otherwise, letters that the player has entered appear. */}
            The
            <input
              onChange={(event) => {this.updateWord('adjective1', event)}}
              placeholder={this.state.adjective1 === '' ? "adjective" : this.state.adjective1}
              type="text" />

            <input
              onChange={(event) => {this.updateWord('noun1', event)}}
              placeholder={this.state.noun1 === '' ? "noun" : this.state.noun1}
              type="text" />

            <input
              onChange={(event) => {this.updateWord('adverb', event)}}
              placeholder={this.state.adverb === '' ? "adverb" : this.state.adverb}
              type="text" />

            <input
              onChange={(event) => {this.updateWord('verb', event)}}
              placeholder={this.state.verb === '' ? "verb" : this.state.verb}
              type="text" />

            the

            <input
              onChange={(event) => {this.updateWord('adjective2', event)}}
              placeholder={this.state.adjective2 === '' ? "adjective" : this.state.adjective2}
              type="text" />

            <input
              onChange={(event) => {this.updateWord('noun2', event)}}
              placeholder={this.state.noun2 === '' ? "noun" : this.state.noun2}
              type="text" />

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
