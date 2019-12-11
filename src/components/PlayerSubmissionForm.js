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

  adj1Valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.adj1)
  }

  noun1Valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.noun1)
  }

  adverbValid = () => {
    return /^[a-zA-Z]+$/.test(this.state.adverb)
  }

  verbValid = () => {
    return /^[a-zA-Z]+$/.test(this.state.verb)
  }

  adj2Valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.adj2)
  }

  noun2Valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.noun2)
  }

  onAdj1Change = (event) => {
    console.log('adj1 updated')
    this.setState({
      adj1: event.target.value,
    });
  }

  onNoun1Change = (event) => {
    console.log('noun1 updated')
    this.setState({
      noun1: event.target.value,
    });
  }

  onAdverbChange = (event) => {
    console.log('adverb updated')
    this.setState({
      adverb: event.target.value,
    });
  }

  onVerbChange = (event) => {
    console.log('verb updated')
    this.setState({
      verb: event.target.value,
    });
  }

  onAdj2Change = (event) => {
    console.log('adj2 updated')
    this.setState({
      adj2: event.target.value,
    });
  }

  onNoun2Change = (event) => {
    console.log('noun2 updated')
    this.setState({
      noun2: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const poemLine = `${this.state.adj1} ${this.state.noun1} ${this.state.adverb} ${this.state.verb} ${this.state.adj2} ${this.state.noun2}`

    this.setState({
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: ''
    });

    this.props.addPoemLineCallback(poemLine)
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.getLineCountCallback()}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              onChange={this.onAdj1Change}
              value={this.state.adj1}
              placeholder="adjective"
              type="text" 
              className={this.adj1Valid() ? "input" : "PlayerSubmissionFormt__input--invalid"}
              name="adj1" />

            <input
              onChange={this.onNoun1Change}
              value={this.state.noun1}
              placeholder="noun"
              type="text" 
              className={this.noun1Valid() ? "input" : "PlayerSubmissionFormt__input--invalid"}
              name="noun1" />

            <input
              onChange={this.onAdverbChange}
              value={this.state.adverb}
              placeholder="adverb"
              type="text" 
              className={this.adverbValid() ? "input" : "PlayerSubmissionFormt__input--invalid"}
              name="adverb" />

            <input
              onChange={this.onVerbChange}
              value={this.state.verb}
              placeholder="verb"
              type="text" 
              className={this.verbValid() ? "input" : "PlayerSubmissionFormt__input--invalid"}
              name="verb" />

              the

            <input
              onChange={this.onAdj2Change}
              value={this.state.adj2}
              placeholder="adjective"
              type="text" 
              className={this.adj2Valid() ? "input" : "PlayerSubmissionFormt__input--invalid"}
              name="adj2" />

            <input
              onChange={this.onNoun2Change}
              value={this.state.noun2}
              placeholder="noun"
              type="text" 
              className={this.noun2Valid() ? "input" : "PlayerSubmissionFormt__input--invalid"}
              name="noun2" />

              .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.onFormSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
