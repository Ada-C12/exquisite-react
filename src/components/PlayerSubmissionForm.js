import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb1: '',
      verb1: '',
      adjective2: '',
      noun2: '',
    }
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newFormSub = {
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb1: this.state.adverb1,
      verb1: this.state.verb1,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    }

    this.setState({
      adjective1: '',
      noun1: '',
      adverb1: '',
      verb1: '',
      adjective2: '',
      noun2: '',
    });
    
    this.props.addSubCallback(`The ${newFormSub.adjective1 } ${newFormSub.noun1} ${newFormSub.adverb1} ${newFormSub.verb1} the ${newFormSub.adjective2} ${newFormSub.noun2}.`);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit} >
          <div className="PlayerSubmissionForm__poem-inputs">
            <p>The:</p>
            <div>
              <input
                type="text"
                name="adjective1"
                placeholder="adjective"
                value={this.state.adjective1}
                onChange={this.onFieldChange}
                className="PlayerSubmissionForm__poem-inputs"
              />
            </div>
            <div>
              <input
                type="text"
                name="noun1"
                placeholder="noun"
                value={this.state.noun1}
                onChange={this.onFieldChange}
                // className="PlayerSubmissionForm__input--invalid"
              />
            </div>
            <div>
              <input
                type="text"
                name="adverb1"
                placeholder="adverb"
                value={this.state.adverb1}
                onChange={this.onFieldChange}
                // className="PlayerSubmissionForm__input--invalid"
              />
            </div>
            <div>
              <input
                type="text"
                name="verb1"
                placeholder="verb"
                value={this.state.verb1}
                onChange={this.onFieldChange}
                // className="PlayerSubmissionForm__input--invalid"
              />
            </div>
            <p>the</p>
            <div>
              <input
                type="text"
                name="adjective2"
                placeholder="adjective"
                value={this.state.adjective2}
                onChange={this.onFieldChange}
                // className="PlayerSubmissionForm__input--invalid"
              />
            </div>
            <div>
              <input
                type="text"
                name="noun2"
                placeholder="noun"
                value={this.state.noun2}
                onChange={this.onFieldChange}
                // className="PlayerSubmissionForm__input--invalid"
              />
            </div>
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
