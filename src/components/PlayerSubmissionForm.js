import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropType from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subjThe: 'The',
      subjAdjective: '',
      subjNoun: '',
      adverb: '',
      verb: '',
      objThe: 'the',
      objAdjective: '',
      objNoun: '',
    }
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  }

  clearState = () => {
    this.setState({
      subjAdjective: '',
      subjNoun: '',
      adverb: '',
      verb: '',
      objAdjective: '',
      objNoun: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // get the values from state
    const submissionComponentsArray = Object.values({ ...this.state });
    // pass up array to Game
    this.props.onFormSubmit(submissionComponentsArray);
    // clear all changeable values from state
    this.clearState();
  }

  render() {

    return (
      <div className="PlayerSubmissionForm" onSubmit={this.onFormSubmit}>
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            The
            <input
              name={'subjAdjective'}
              value={this.state.subjAdjective}
              onChange={this.onFieldChange}
              placeholder="adjective"
              type="text" />
            <input
              name={'subjNoun'}
              value={this.state.subjNoun}
              onChange={this.onFieldChange}
              placeholder="noun"
              type="text" />
            <input
              name={'adverb'}
              value={this.state.adverb}
              onChange={this.onFieldChange}
              placeholder="adverb"
              type="text" />
            <input
              name={'verb'}
              value={this.state.verb}
              onChange={this.onFieldChange}
              placeholder="verb"
              type="text" />
            the
            <input
              name={'objAdjective'}
              value={this.state.objAdjective}
              onChange={this.onFieldChange}
              placeholder="adjective"
              type="text" />
            <input
              name={'objNoun'}
              value={this.state.objNoun}
              onChange={this.onFieldChange}
              placeholder="noun"
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

PlayerSubmissionForm.propTypes = {
  playerNumber: PropType.number.isRequired,
  onFormSubmit: PropType.func.isRequired,
};

export default PlayerSubmissionForm;
