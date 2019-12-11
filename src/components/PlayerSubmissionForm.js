import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      valid: false,
      player: 1
    }
  }


  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  addLineCallback = (event) => {
    event.preventDefault();
    const formText = "The" + this.state.input1 + this.state.input2 + this.state.input3 + this.state.input4 + "the" + this.state.input5 + this.state.input6 + "."
    this.props.addLineCallback(formText);
    this.setState({ 
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",})
    this.setState({player: this.state.player + 1})
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.player  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.addLineCallback} >
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input className={this.state.valid ? "" : "PlayerSubmissionFormt__input--invalid" } placeholder="adjective" name="input1" onChange={this.onInputChange} value={this.state.input1}/>
            <input className={this.state.valid ? "" : "PlayerSubmissionFormt__input--invalid" } placeholder="noun" name="input2" onChange={this.onInputChange} value={this.state.input2}/>
            <input className={this.state.valid ? "" : "PlayerSubmissionFormt__input--invalid" } placeholder="adverb" name="input3" onChange={this.onInputChange} value={this.state.input3}/>
            <input className={this.state.valid ? "" : "PlayerSubmissionFormt__input--invalid" } placeholder="verb" name="input4" onChange={this.onInputChange} value={this.state.input4}/>
            the
            <input className={this.state.valid ? "" : "PlayerSubmissionFormt__input--invalid" } placeholder="adjective" name="input5" onChange={this.onInputChange} value={this.state.input5}/>
            <input className={this.state.valid ? "" : "PlayerSubmissionFormt__input--invalid" } placeholder="noun" name="input6" onChange={this.onInputChange} value={this.state.input6}/>
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

export default PlayerSubmissionForm;
