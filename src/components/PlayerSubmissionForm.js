import React, { Component } from 'react';
import PropType from 'prop-types';
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
      playerCount: 1,
    }
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState)
    console.log(this.state)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const words = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2
    }
    const newPlayerCount = this.state.playerCount + 1;
    console.log(words)


    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
      // does playercount state live in form or game? change this to a functional component and take away state?
      playerCount: newPlayerCount
    })
    this.props.makeOneSentenceCallback(words);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.playerCount }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            The
            <input
              className = {this.state.adj1 === '' ? 'PlayerSubmissionForm__input--invalid' : 'PlayerSubmissionForm__input--invalid::placeholder'}
              placeholder="adjective"
              name="adj1"
              onChange={this.onInputChange}
              value={this.state.adj1}
              type="text" />
            <input
              className = {this.state.noun1 === '' ? 'PlayerSubmissionForm__input--invalid' : 'PlayerSubmissionForm__input--invalid::placeholder'}
              placeholder="noun"
              name="noun1"
              onChange={this.onInputChange}
              value={this.state.noun1}
              type="text" />
            <input
              className = {this.state.adv === '' ? 'PlayerSubmissionForm__input--invalid' : 'PlayerSubmissionForm__input--invalid::placeholder'}
              placeholder="adverb"
              name="adv"
              onChange={this.onInputChange}
              value={this.state.adv}
              type="text" />
            <input
              className = {this.state.verb === '' ? 'PlayerSubmissionForm__input--invalid' : 'PlayerSubmissionForm__input--invalid::placeholder'}
              placeholder="verb"
              name="verb"
              onChange={this.onInputChange}
              value={this.state.verb}
              type="text" />
            the
            <input
              className = {this.state.adj2 === '' ? 'PlayerSubmissionForm__input--invalid' : 'PlayerSubmissionForm__input--invalid::placeholder'}
              placeholder="adjective"
              name="adj2"
              onChange={this.onInputChange}
              value={this.state.adj2}
              type="text" />
            <input
              className = {this.state.noun2 === '' ? 'PlayerSubmissionForm__input--invalid' : 'PlayerSubmissionForm__input--invalid::placeholder'}
              placeholder="noun"
              name="noun2"
              onChange={this.onInputChange}
              value={this.state.noun2}
              type="text" />
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

// PlayerSubmissionForm.propTypes = {
//   makeOneSentenceCallback: PropTypes.func.isRequired,
// };

export default PlayerSubmissionForm;
