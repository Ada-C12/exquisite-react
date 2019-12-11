import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>
        
        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
              <div>The
                <label htmlFor="adjective"></label>
                <input name="adjective" placeholder="adjective" />
              </div>
              <div>
              <label htmlFor="noun"></label>
              <input name="noun" placeholder="noun" />
            </div>
            <div>
              <label htmlFor="adverb"></label>
              <input name="adverb" placeholder="adverb" />
            </div>
            <div>
              <label htmlFor="verb"></label>
              <input name="verb" placeholder="verb" />
            </div>
            <div>the
                <label htmlFor="adjective2"></label>
                <input name="adjective2" placeholder="adjective" />
              </div>
              <div>
              <label htmlFor="noun"></label>
              <input name="noun" placeholder="noun" />.
            </div>

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
