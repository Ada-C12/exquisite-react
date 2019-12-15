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

onSubmitForm = () => {
  // captures input from state and turns it into a line of poetry
  // passes line up to Game
  // Game passes line down to Recent Submission and Final Poem
  // reset state?
}

  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example

            }
            <input
              placeholder="hm..."
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
