import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

// To-do:
// see if there's an need to 'reset' the form with a function (see ada-pets-react solution)
// increment the count for player form each time the form is submitted

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
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange = (event) => {
    let value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value,
    });
  }

  // send all new form fields to game by calling
  // this.props.showPoemCallback(poem)
  onFormSubmit = (event) => {
    event.preventDefault();

    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });

    const poem = this.state;
    this.props.showPoemCallback(poem);
    // reset the form on submit
  }


  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The<input 
              placeholder="adjective"
              type="text"
              onChange={this.onFormChange}
              value={this.state.adjective1}
              name="adjective1" 
            />
            <input 
              placeholder="noun"
              type="text"
              onChange={this.onFormChange}
              value={this.state.noun1}
              name="noun1" 
            />
            <input 
              placeholder="adverb"
              type="text"
              onChange={this.onFormChange}
              value={this.state.adverb}
              name="adverb" 
            />
            <input 
              placeholder="verb"
              type="text"
              onChange={this.onFormChange}
              value={this.state.verb}
              name="verb" 
            />
            the<input 
              placeholder="adjective"
              type="text"
              onChange={this.onFormChange}
              value={this.state.adjective2}
              name="adjective2" 
            />
            <input 
              placeholder="noun"
              type="text"
              onChange={this.onFormChange}
              value={this.state.noun2}
              name="noun2" 
            />.
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input onClick={this.onFormSubmit} type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
