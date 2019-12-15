import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // user words are stored in state until submitted
      adjective1: '',
      noun1: '', 
      adverb: '', 
      verb: '', 
      adjective2: '', 
      noun2: '',
    }
    this.addLine = props.addLine;

// onSubmitForm = () => {
//   // captures input from state and turns it into a line of poetry
//   // passes line up to Game
//   // Game passes line down to Recent Submission and Final Poem
//   // reset state?
// }

  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

          {/* If field is empty, placeholder name appears. Otherwise, word that the player has entered appears. */}
            The
            <input
              placeholder={this.state.adjective1 === '' ? "adjective" : this.state.adjective1}
              type="text" />

            <input
              placeholder={this.state.noun1 === '' ? "noun" : this.state.noun1}
              type="text" />

            <input
              placeholder={this.state.adverb === '' ? "adverb" : this.state.adverb}
              type="text" />

            <input
              placeholder={this.state.verb === '' ? "verb" : this.state.verb}
              type="text" />

            the

            <input
              placeholder={this.state.adjective2 === '' ? "adjective" : this.state.adjective2}
              type="text" />

            <input
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
