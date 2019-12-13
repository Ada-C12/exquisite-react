import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj: '',
      noun: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  sendSubmission = (event) => {
    event.preventDefault();

    const submission = {
      adj: this.state.adj,
      noun: this.state.noun,
      adv: this.state.adv,
      verb: this.state.verb,
      adj2: this.state.adj,
      noun2: this.state.noun2,
    }

    this.props.sendSubmission(submission);
    this.resetForm();
  }

  render() {

    return (
      <div className='PlayerSubmissionForm'>
        <h3>Player Submission Form for Player #{  }</h3>

        <form className='PlayerSubmissionForm__form'
          onSubmit={this.sendSubmission}>

          <div className='PlayerSubmissionForm__poem-inputs'>

            <input
              type="text"
              htmlFor='adj'
              placeholder='adjective'
              onChange={this.onInputChange}
              value={this.state.adj}
              className="PlayerSubmissionForm__input"/>
          
            <input
              type='text'
              htmlFor='noun'
              placeholder='noun'
              onChange={this.onInputChange}
              value={this.state.noun}
              className="PlayerSubmissionForm__input"/>

            <input
              type='text'
              htmlFor='adv'
              placeholder='adverb'
              onChange={this.onInputChange}
              value={this.state.adv}
              className="PlayerSubmissionForm__input"/>

            <input
              type='text'
              htmlFor='verb'
              placeholder='verb'
              onChange={this.onInputChange}
              value={this.state.verb}
              className="PlayerSubmissionForm__input"/>

              the

            <input
              type='text'
              htmlFor='adj2'
              placeholder='adjective'
              onChange={this.onInputChange}
              value={this.state.adj}
              className="PlayerSubmissionForm__input"/>
          
            <input
              type='text'
              htmlFor='noun2'
              placeholder='noun'
              onChange={this.onInputChange}
              value={this.state.noun2}
              className="PlayerSubmissionForm__input"/>
          
          
          </div>

          <div className='PlayerSubmissionForm__submit'>
            <input type='submit' value='Submit Line' className='PlayerSubmissionForm__submit-btn' />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
