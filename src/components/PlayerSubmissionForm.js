import React, { Component } from "react";
import "./PlayerSubmissionForm.css";

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNum: 1,
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    };
  }

  onFieldChange = event => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  };

  validString = value => {
    return value !== "";
  };

  onFormSubmit = event => {
    event.preventDefault();

    let allValid = true;

    Object.values(this.state).forEach(value => {
      if (!this.validString(value)) {
        allValid = false;
      }
    });

    if (!allValid) {
      return;
    }

    const newPoemLine = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2
    };

    this.setState({
      playerNum: this.state.playerNum + 1,
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    });

    this.props.addPoemLineCallback(newPoemLine);
  };

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.playerNum}</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
        >
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              name="adj1"
              value={this.state.adj1}
              onChange={this.onFieldChange}
              placeholder="adjective"
              className={
                this.validString(this.state.adj1)
                  ? ""
                  : "PlayerSubmissionForm__input--invalid"
              }
            />
            <input
              name="noun1"
              value={this.state.noun1}
              onChange={this.onFieldChange}
              placeholder="noun"
              className={
                this.validString(this.state.noun1)
                  ? ""
                  : "PlayerSubmissionForm__input--invalid"
              }
            />
            <input
              name="adv"
              value={this.state.adv}
              onChange={this.onFieldChange}
              placeholder="adverb"
              className={
                this.validString(this.state.adv)
                  ? ""
                  : "PlayerSubmissionForm__input--invalid"
              }
            />
            <input
              name="verb"
              value={this.state.verb}
              onChange={this.onFieldChange}
              placeholder="verb"
              className={
                this.validString(this.state.verb)
                  ? ""
                  : "PlayerSubmissionForm__input--invalid"
              }
            />
            the
            <input
              name="adj2"
              value={this.state.adj2}
              onChange={this.onFieldChange}
              placeholder="adjective"
              className={
                this.validString(this.state.adj2)
                  ? ""
                  : "PlayerSubmissionForm__input--invalid"
              }
            />
            <input
              name="noun2"
              value={this.state.noun2}
              onChange={this.onFieldChange}
              placeholder="noun"
              className={
                this.validString(this.state.noun2)
                  ? ""
                  : "PlayerSubmissionForm__input--invalid"
              }
            />
            .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input
              type="submit"
              value="Submit Line"
              className="PlayerSubmissionForm__submit-btn"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
