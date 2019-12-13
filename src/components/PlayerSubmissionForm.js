import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      words: ["", "", "", "", "", ""],
      count: 1
    }
  }

  onInputChange = (event) => {
    const name = event.target.name 
    const value = event.target.value

    const index = parseInt(name, 10);
    let oldWords = this.state.words;
    oldWords[index] = value
    
    this.setState({
      words: oldWords
    })
  }

  clickedPlayerSubmission = (event) => {
    event.preventDefault()
    const sentence = this.state.words.join(" ")
    this.props.onFormSubmit(sentence)
    this.setState({
      words: ["", "", "", "", "", ""],
      count: this.state.count + 1
    })
  }

  
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.count }</h3>

        <form onSubmit={this.clickedPlayerSubmission} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              className={this.state.words[0].length > 0 ? "": "PlayerSubmissionFormt__input--invalid"}
              value={this.state.words[0]}
              placeholder="Adjective"
              type="text"
              onChange={this.onInputChange}
              name="0" />

            <input 
              className={this.state.words[1].length > 0 ? "": "PlayerSubmissionFormt__input--invalid"}
              value={this.state.words[1]}
              placeholder="Noun"
              type="text"
              onChange={this.onInputChange}
              name="1" />

            <input
              className={this.state.words[2].length > 0 ? "": "PlayerSubmissionFormt__input--invalid"} 
              value={this.state.words[2]}
              placeholder="Adverb"
              type="text"
              onChange={this.onInputChange}
              name="2" />

            <input
              className={this.state.words[3].length > 0 ? "": "PlayerSubmissionFormt__input--invalid"} 
              value={this.state.words[3]}
              placeholder="Verb"
              type="text"
              onChange={this.onInputChange}
              name="3" />

            the 
            <input
              className={this.state.words[4].length > 0 ? "": "PlayerSubmissionFormt__input--invalid"} 
              value={this.state.words[4]}
              placeholder="Adjective"
              type="text"
              onChange={this.onInputChange}
              name="4" />

            <input 
              className={this.state.words[5].length > 0 ? "": "PlayerSubmissionFormt__input--invalid"}
              value={this.state.words[5]}
              placeholder="Noun"
              type="text"
              onChange={this.onInputChange}
              name="5" />.

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
  onFormSubmit: PropTypes.func.isRequired,
}

export default PlayerSubmissionForm;
