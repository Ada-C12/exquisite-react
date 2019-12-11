import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    }
  }

  inputClassStyle = (input) => {
    const style = (input === "") ? "PlayerSubmissionForm__input--invalid" : "PlayerSubmissionForm__input"
    return style;
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
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              name="adj1"
              placeholder="adjective"
              type="text"
              value={this.state.adj1}
              onChange={this.onInputChange} 
              className={this.inputClassStyle(this.state.adj1)}/>

            <input
              name="noun1"
              placeholder="noun"
              type="text"
              value={this.state.noun1}
              onChange={this.onInputChange} 
              className={this.inputClassStyle(this.state.noun1)}/>

            <input
              name="adv"
              placeholder="adverb"
              type="text"
              value={this.state.adv}
              onChange={this.onInputChange} 
              className={this.inputClassStyle(this.state.adv)}/>

            <input
              name="verb"
              placeholder="verb"
              type="text"
              value={this.state.verb}
              onChange={this.onInputChange} 
              className={this.inputClassStyle(this.state.verb)}/>

            the

            <input
              name="adj2"
              placeholder="adjective"
              type="text"
              value={this.state.adj2}
              onChange={this.onInputChange} 
              className={this.inputClassStyle(this.state.adj2)}/>

            <input
              name="noun2"
              placeholder="noun"
              type="text"
              value={this.state.noun2}
              onChange={this.onInputChange} 
              className={this.inputClassStyle(this.state.noun2)}/>
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
