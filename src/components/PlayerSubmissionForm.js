import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.addRecentSubmission = props.addRecentSubmission;
    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      mid: 'the', 
      adj2: '',
      noun2: '',
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    let submission = 'The';

    Object.keys(this.state).forEach((key) => {
      submission += ' ' + this.state[key];
    })
    submission += '.';

    this.addRecentSubmission(submission);

    const resetState = {
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        mid: 'the', 
        adj2: '',
        noun2: '',
    };

    this.setState(resetState);
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }
  
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber  }</h3>

        <form className="PlayerSubmissionForm__form"onSubmit={this.onFormSubmit} >
        

          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              className={this.state.adj1 === '' ? "PlayerSubmissionFormt__input--invalid" : ''}
              name="adj1"
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange}
              value={this.state.adj1} />
            <input
              className={this.state.noun1 === '' ? "PlayerSubmissionFormt__input--invalid" : ''}
              name="noun1"
              placeholder="noun"
              type="text"
              onChange={this.onInputChange}
              value={this.state.noun1} />
            <input
              className={this.state.adv === '' ? "PlayerSubmissionFormt__input--invalid" : ''}
              name="adv"
              placeholder="adverb"
              type="text"
              onChange={this.onInputChange}
              value={this.state.adv} />
            <input
              className={this.state.verb === '' ? "PlayerSubmissionFormt__input--invalid" : ''}
              name="verb"
              placeholder="verb"
              type="text"
              onChange={this.onInputChange}
              value={this.state.verb} />
            <input
              className={this.state.adj2 === '' ? "PlayerSubmissionFormt__input--invalid" : ''}
              name="adj2"
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange}
              value={this.state.adj2} />
            <input
              className={this.state.noun2 === '' ? "PlayerSubmissionFormt__input--invalid" : ''}
              name="noun2"
              placeholder="noun"
              type="text"
              onChange={this.onInputChange}
              value={this.state.noun2} /> 
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
