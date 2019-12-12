import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      [0]: "", // Initialize value for each input to empty string
      [1]: "",
      [2]: "",
      [3]: "",
      [4]: "",
      [5]: "",
    };
  }

  textInputChange(event, inputId) {
    this.setState({[inputId]: event.target.value});
  }

  sendPlayerInputWordsArray = (e) => {
    e.preventDefault();
    // console.log(this.state[0]);
    // console.log(this.state[1]);
    const inputWords = [this.state[0], this.state[1], this.state[2], this.state[3], this.state[4], this.state[5]];
    this.props.addPlayerInputWordsArray(inputWords);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" 
            onSubmit={ this.sendPlayerInputWordsArray }
            >
          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The
            <input
              placeholder="adjective"
              type="text"
              onChange={(event) => {this.textInputChange(event, 0) }}
              />

            <input
              placeholder="noun"
              type="text"
              onChange={(event) => {this.textInputChange(event, 1) }}
              />

            <input
              placeholder="adverb"
              type="text"
              onChange={(event) => {this.textInputChange(event, 2) }}
              />
              
              <input
              placeholder="verb"
              type="text"
              onChange={(event) => {this.textInputChange(event, 3) }}
              />

          the
            <input
              placeholder="adjective"
              type="text"
              onChange={(event) => {this.textInputChange(event, 4) }}
              />

            <input
              placeholder="noun"
              type="text"
              onChange={(event) => {this.textInputChange(event, 5) }}
             />
            .

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
