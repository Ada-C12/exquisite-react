import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjetive: '',
      noun: '',
      adverb: '',
      verb: '',
      adjetive2: '',
      noun2: '',
    };
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
            <p>The</p>
            <input
              placeholder="adjetive"
              type="text" />
            <input
              placeholder="noun"
              type="text" />
            <input
              placeholder="adverb"
              type="text" />
            <input
              placeholder="verb"
              type="text" />
            <p>the</p>
            <input
              placeholder="adjetive"
              type="text" />
            <input
              placeholder="noun"
              type="text" />
            <p>.</p>
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
