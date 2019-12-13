import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);

    const defaultState = {};
    props.formFields.forEach((item) => {
      if (item.key) {
        defaultState[item.key] = '';
      }
    });
    this.state = defaultState;
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitLine = (event) => {
    event.preventDefault();

    const fields = this.props.formFields;
    let line = fields.map((item) => {
      if (item.key) {
        return this.state[item.key];
      } else {
        return item;
      }
    });

    line = line.join(' ');
    
    this.props.addLineCallback(line);
    this.setDefaultState();
  }

  setDefaultState() {
    const defaultState = {};
    this.props.formFields.forEach((item) => {
      if (item.key) {
        defaultState[item.key] = '';
      }
    });
    this.setState(defaultState);
  }


  render() {
    const formContent = this.props.formFields.map((item, i) => {
      if (item.key) {
        return <input
          key={i}
          name={item.key}
          placeholder={item.placeholder}
          type='text'
          className={this.state[item.key] ? "" : "PlayerSubmissionForm__input--invalid"}
          onChange={this.onInputChange} 
          value={this.state[item.key]}
        />
      } else {
        return item;
      }
    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerCount}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitLine}>
          <div className="PlayerSubmissionForm__poem-inputs">
            { formContent }
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
  addLineCallback: PropTypes.func.isRequired,
  playerCount: PropTypes.number.isRequired,
  formFields: PropTypes.array.isRequired,
};

export default PlayerSubmissionForm;
