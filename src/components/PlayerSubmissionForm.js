import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      player: 1,
    }
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
    let line = ""
    //DRY up!
    line = line.concat(`The ${this.state.input1} ${this.state.input2} ${this.state.input3} ${this.state.input4} the ${this.state.input5} ${this.state.input6}.`)
    
    const player = this.state.player + 1
    
    this.props.addLineCallback(line);
    this.setState({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      player: player,
    });
    console.log(line)
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.player}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitLine}>
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              className={this.state.input1 ? "" : "PlayerSubmissionForm__input--invalid"}
              placeholder="adjective"
              name="input1"
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.input1}
            />
            <input
              className={this.state.input2 ? "" : "PlayerSubmissionForm__input--invalid"}
              placeholder="noun"
              name="input2"
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.input2}
            />
            <input
              className={this.state.input3 ? "" : "PlayerSubmissionForm__input--invalid"}
              placeholder="adverb"
              name="input3"
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.input3}
            />
            <input
              className={this.state.input4 ? "" : "PlayerSubmissionForm__input--invalid"}
              placeholder="verb"
              name="input4"
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.input4}
            />
            the
            <input
              className={this.state.input5 ? "" : "PlayerSubmissionForm__input--invalid"}
              placeholder="adjective"
              name="input5"
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.input5}
            />
            <input
              className={this.state.input6 ? "" : "PlayerSubmissionForm__input--invalid"}
              placeholder="noun"
              name="input6"
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.input6}
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
  addLineCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
