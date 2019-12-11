import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // words live in state until submit is clicked
      adjectiveA: '',
      nounA: '',
      adverb: '',
      verb: '',
      adjectiveB: '',
      nounB: ''
    }
  }

  onSubmitForm = () => {
    // turn inputs into a string
    // pass string up to Game to store it
    // Game will pass it on down to Recent Submission & Final Poem
    // then clear out the state
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
