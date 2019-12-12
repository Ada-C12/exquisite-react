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
    console.log(this.state[0]);
    console.log(this.state[1]);
    //this.props.addPlayerInputWordsArray([this.state[0]])
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
              />

            <input
              placeholder="adverb"
              type="text"
              />
              
              <input
              placeholder="verb"
              type="text"
              />

          the
            <input
              placeholder="adjective"
              type="text"
              />

            <input
              placeholder="noun"
              type="text"
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
