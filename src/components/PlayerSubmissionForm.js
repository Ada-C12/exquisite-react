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
    };
  }

  resetState = () => {
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  classStyle = (input) => {
    const style = (input === "") ? "PlayerSubmissionForm__input--invalid" : "PlayerSubmissionForm__input"
    return style;
  }

  onSubmit = (event) => {
    event.preventDefault();
    
    const newSubmission = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2,
    };

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    })

    this.props.addSubmissionCallback(newSubmission)
    this.resetState();
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form onSubmit={this.onSubmit}className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange}
              value={this.state.adj1}
              name="adj1"
              className={this.classStyle(this.state.adj1)}
            />
            <input
              placeholder="noun"
              type="text"
              onChange={this.onInputChange}
              value={this.state.noun1}
              name="noun1"
              className={this.classStyle(this.state.noun1)}
            />
            <input
              placeholder="adverb"
              type="text"
              onChange={this.onInputChange}
              value={this.state.adv}
              name="adv"
              className={this.classStyle(this.state.adv)}
            />
            <input
              placeholder="verb"
              type="text"
              onChange={this.onInputChange}
              value={this.state.verb}
              name="verb"
              className={this.classStyle(this.state.verb)}
            />
            <input
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange}
              value={this.state.adj2}
              name="adj2"
              className={this.classStyle(this.state.adj2)}
            />
            <input
              placeholder="noun"
              type="text"
              onChange={this.onInputChange}
              value={this.state.noun2}
              name="noun2"
              className={this.classStyle(this.state.noun2)}
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
