import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: ''
    }
  }

  adj1valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.adj1)
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              placeholder="adjective"
              type="text" 
              className={this.adj1}/>

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
