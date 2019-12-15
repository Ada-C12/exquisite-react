import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.playerNumber = 1;
    this.state = {
      // user-inputted words are stored in state until submitted
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

updateWord = (event) => {
  let value = event.target.value
  this.setState({
    [event.target.name]: value
  })
}

onSubmitForm = (event) => {
  // captures input from state and turns it into a line of poetry
  event.preventDefault();
  let line = '';
  Object.keys(this.state).forEach((key) => {
    line += ' ' + this.state[key];
  })
  // addLine passes line up to Game; Game passes line down to Recent Submission and Final Poem
  this.addLine(line)
  // increment player number
  this.playerNumber ++;
  // reset state so form is back to placeholders for next player
  this.setState({
    adjective1: '',
    noun1: '', 
    adverb: '', 
    verb: '', 
    adjective2: '', 
    noun2: '',
  })
}

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form">
          <div className="PlayerSubmissionForm__poem-inputs">

          {/* If field is empty, placeholder name appears. Otherwise, letters that the player has entered appear. */}
          {/* Refactoring input fields to incorporate resetting state pattern we covered in class */}
            The
            <input
              name="adjective1"
              onChange={this.updateWord}
              placeholder={this.state.adjective1 === '' ? "adjective" : this.state.adjective1}
              value={this.state.adjective1}
              type="text" />

            <input
              name="noun1"
              onChange={this.updateWord}
              placeholder={this.state.noun1 === '' ? "noun" : this.state.noun1}
              value={this.state.noun1}
              type="text" />

            <input
              name="adverb"
              onChange={this.updateWord}
              placeholder={this.state.adverb === '' ? "adverb" : this.state.adverb}
              value={this.state.adverb}
              type="text" />

            <input
              name="verb"
              onChange={this.updateWord}
              placeholder={this.state.verb === '' ? "verb" : this.state.verb}
              value={this.state.verb}
              type="text" />

            the

            <input
              name="adjective2"
              onChange={this.updateWord}
              placeholder={this.state.adjective2 === '' ? "adjective" : this.state.adjective2}
              value={this.state.adjective2}
              type="text" />

            <input
              name="noun2"
              onChange={this.updateWord}
              placeholder={this.state.noun2 === '' ? "noun" : this.state.noun2}
              value={this.state.noun2}
              type="text" />

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
