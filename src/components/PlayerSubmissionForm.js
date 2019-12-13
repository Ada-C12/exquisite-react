import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  inputFields = () => {
    return (
      this.props.fields.map((field,i) => {
      if (!field.key) {
        return field
      } else {
        return (
          <input
            key={i}
            name={field.key}
            placeholder={field.placeholder}
            type='text'
            onChange={this.onInputChange}
            value={this.state[field.key]}
            className={this.state[field.key] === '' ? "PlayerSubmissionFormt__input--invalid" : "fun-stuff"}
          />
        )
      }
    })
    )
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }


  onSubmitPoem = (event) => {
    // Stop the default page reload
    event.preventDefault();
    let poem = '';
    const fields = this.props.fields;

    for (let i = 0; i < fields.length; i++) {
      if (fields[i].key) {
        poem += (this.state[fields[i].key] + ' ')
      } else {
        poem += (fields[i] + ' ')
      };
    };


    this.props.onSumbitPoemCallback(poem);

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNum}</h3>

        <form 
          className="PlayerSubmissionForm__form" 
          onSubmit={this.onSubmitPoem}
        >

          <div className="PlayerSubmissionForm__poem-inputs">
            {this.inputFields()}
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
  onSumbitPoemCallback: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  playerNum: PropTypes.number.isRequired,
};

export default PlayerSubmissionForm;
