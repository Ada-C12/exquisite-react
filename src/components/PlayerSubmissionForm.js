import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    }
  }

  onSubmitPoem = (event) => {
    event.preventDefault();

    this.props.addPoemLineCallback(this.state);

    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitPoem}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <p>The</p>
            <input
              name="adjective1"
              placeholder="adjective"
              type="text" 
            />
            <input
              name="noun1"
              placeholder="noun"
              type="text" 
            />
            <input
              name="adverb"
              placeholder="adverb"
              type="text" 
            />
            <input
              name="verb"
              placeholder="verb"
              type="text" 
            />
            <p>the</p>
            <input
              name="adjective2"
              placeholder="adjective"
              type="text" 
            />
            <input
              name="noun2"
              placeholder="noun"
              type="text" 
            />
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
