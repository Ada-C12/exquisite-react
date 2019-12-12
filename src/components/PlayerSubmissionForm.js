import React, { Component } from "react";
import "./PlayerSubmissionForm.css";

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);

    // 
    this.state = {
      // playerNumber: 1,
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.setState({
    //
    // });
    this.props.handleRecentSubmission(this.state);
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>
        <h1>{this.props.propTest}</h1>
        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.handleSubmit}
        >
          <div className="PlayerSubmissionForm__poem-inputs">
            {
              // Put your form inputs here... We've put in one below as an example
            }
            <input
              placeholder="adjective"
              type="text"
              name="adj1"
              value={this.state.adj1}
              onChange={this.handleChange}
            />
            <input
              placeholder="noun"
              type="text"
              name="noun1"
              value={this.state.noun1}
              onChange={this.handleChange}
            />

            <input
              placeholder="adverb"
              type="text"
              name="adv"
              value={this.state.adv}
              onChange={this.handleChange}
            />
            <input
              placeholder="verb"
              type="text"
              name="verb"
              value={this.state.verb}
              onChange={this.handleChange}
            />
            <input
              placeholder="adjective"
              type="text"
              name="adj2"
              value={this.state.adj2}
              onChange={this.handleChange}
            />

            <input
              placeholder="noun"
              type="text"
              name="noun2"
              value={this.state.noun2}
              onChange={this.handleChange}
            />
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
