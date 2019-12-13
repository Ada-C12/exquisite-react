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
      adverbA: '',
      verbA: '',
      midfix: 'the',
      adjectiveB: '',
      nounB: ''
    };
    this.inputs = Object.keys(this.state);

  }

  updateWord = (event) => {
    console.log(this.inputs);
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
      adverbA: '',
      verbA: '',
      adjectiveB: '',
      nounB: ''
    })

    this.addRecentSubmission(submission);
    this.playerNum += 1;
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.playerNum }</h3>

        <form className="PlayerSubmissionForm__form"
        >

          <div className="PlayerSubmissionForm__poem-inputs">
            {this.inputs.map((wordInput, i) => {
              return (
                <input
                  key={i}
                  name={wordInput}
                  onChange={this.updateWord}
                  placeholder={this.state[wordInput] === '' ? wordInput.slice('A', -1).slice('B') : this.state[wordInput]}
                  className={this.state[wordInput] === '' ? 'PlayerSubmissionForm__input--invalid' : 'PlayerSubmissionForm__input'}
                />
            )
          })}
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
