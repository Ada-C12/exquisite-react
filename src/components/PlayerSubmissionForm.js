import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adjective1: "",
      noun1: "", 
      adverb: "", 
      verb: "", 
      adjective2: "",
      noun2: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = (event) => {
    const {
      adjective1,
      noun1, 
      adverb, 
      verb, 
      adjective2,
      noun2
    } = this.state;
    const poemLine = `The ${adjective1} ${noun1} ${adverb} ${verb} the ${adjective2} ${noun2}.`;
    
    event.preventDefault();

    this.props.onSubmitLine(poemLine);
    this.setState({
      adjective1: "",
      noun1: "", 
      adverb: "", 
      verb: "", 
      adjective2: "",
      noun2: ""
    });
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.currentPlayer}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <span>The</span>
            <input
              name="adjective1"
              placeholder="adjective"
              type="text"
              value={this.state.adjective1}
              onChange={this.handleChange}
            />
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              value={this.state.noun1}
              onChange={this.handleChange}
            />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              value={this.state.adverb}
              onChange={this.handleChange}
            />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              value={this.state.verb}
              onChange={this.handleChange}
            /> 
            <span>the</span>
            <input
              name="adjective2"
              placeholder="adjective"
              type="text"
              value={this.state.adjective2}
              onChange={this.handleChange}
            />
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              value={this.state.noun2}
              onChange={this.handleChange}
            />
            <span>.</span>
            

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.handleClick} />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
