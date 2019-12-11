import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      noun2: '',
    };
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;
  
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { adj1, noun1, adverb, verb, adj2, noun2 } = this.state;
    
    const line = `The ${adj1} ${noun1} ${adverb} ${verb} the ${adj2} ${noun2}.`
    this.props.addLine(line);

    this.setState({
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerId }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            The 
            <input
              name="adj1"
              placeholder="adjective"
              type="text"
              value={this.state.adj1}
              onChange={this.onFieldChange}
              className={this.state.adj1 !== '' ? '' : "PlayerSubmissionForm__input--invalid"}
            />
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              value={this.state.noun1}
              onChange={this.onFieldChange}
              className={this.state.noun1 !== '' ? '' : "PlayerSubmissionForm__input--invalid"}
            />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              value={this.state.adverb}
              onChange={this.onFieldChange}
              className={this.state.adverb !== '' ? '' : "PlayerSubmissionForm__input--invalid"}
            />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              value={this.state.verb}
              onChange={this.onFieldChange}
              className={this.state.verb !== '' ? '' : "PlayerSubmissionForm__input--invalid"}
            />
            the
            <input
              name="adj2"
              placeholder="adjective"
              type="text"
              value={this.state.adj2}
              onChange={this.onFieldChange}
              className={this.state.adj2 !== '' ? '' : "PlayerSubmissionForm__input--invalid"}
            />
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              value={this.state.noun2}
              onChange={this.onFieldChange}
              className={this.state.noun2 !== '' ? '' : "PlayerSubmissionForm__input--invalid"}
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

PlayerSubmissionForm.propTypes = {
  playerId: PropTypes.number.isRequired,
  addLine: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
