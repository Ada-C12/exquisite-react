import React, { Component } from "react";
import "./PlayerSubmissionForm.css";

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: ""
    };
  }

  onInputChange = event => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  };

  isInputValid= (input) =>
  {
      if(input===""){
        return "PlayerSubmissionForm__input--invalid"
      }
  }

  onSubmitHandler = event => {
    event.preventDefault();
    const submission = `The ${this.state.adj1} ${this.state.noun1} ${this.state.adverb} ${this.state.verb}
     the ${this.state.adj2} ${this.state.noun2}`;

    this.props.addSubmissionCallback(submission);

    this.setState({
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: ""
    });
  };
  render() {
    if (!this.props.finalPoem) {
      return (
        <div className="PlayerSubmissionForm">
          <h3>
            Player Submission Form for Player #
            {this.props.submissions.length + 1}
          </h3>

          <form
            className="PlayerSubmissionForm__form"
            onSubmit={this.onSubmitHandler}
          >
            <div className="PlayerSubmissionForm__poem-inputs">
              {
                // Put your form inputs here... We've put in one below as an example
              }
              The
              <input
                className={this.isInputValid(this.state.adj1)}
                placeholder="adj1"
                type="text"
                name="adj1"
                onChange={this.onInputChange}
                value={this.state.adj1}
              />
              <input
                className={this.isInputValid(this.state.noun1)}
                placeholder="noun1"
                type="text"
                name="noun1"
                onChange={this.onInputChange}
                value={this.state.noun1}
              />
              <input
                className={this.isInputValid(this.state.adverb)}
                placeholder="adverb"
                type="text"
                name="adverb"
                onChange={this.onInputChange}
                value={this.state.adverb}
              />
              <input
                className={this.isInputValid(this.state.verb)}
                placeholder="verb"
                type="text"
                name="verb"
                onChange={this.onInputChange}
                value={this.state.verb}
              />
              the
              <input
                className={this.isInputValid(this.state.adj2)}  
                placeholder="adj2"
                type="text"
                name="adj2"
                onChange={this.onInputChange}
                value={this.state.adj2}
              />
              <input
                className={this.isInputValid(this.state.noun2)}
                placeholder="noun2"
                type="text"
                name="noun2"
                onChange={this.onInputChange}
                value={this.state.noun2}
              />
            </div>

            <div className="PlayerSubmissionForm__submit">
              <input
                type="submit"
                value="Submit Line"
                className="PlayerSubmissionForm__submit-btn"
                onClick={this.onSubmitHandler}
              />
            </div>
          </form>
        </div>
      );
    } else {
      return "";
    }
  }
}

export default PlayerSubmissionForm;
