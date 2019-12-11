import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      clicks: 1,
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange = (event) => {
    let value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.incrementPlayerCount()
    
    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });

    this.props.savePoemCallback({
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    });
  }

  incrementPlayerCount = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    const submissionForm = 
      <div className="PlayerSubmissionForm">
          <h3>Player Submission Form for Player #{ this.state.clicks }</h3>

          <form className="PlayerSubmissionForm__form" >

            <div className="PlayerSubmissionForm__poem-inputs">
              The<input 
                placeholder="adjective"
                type="text"
                onChange={this.onFormChange}
                value={this.state.adjective1}
                name="adjective1" 
              />
              <input 
                placeholder="noun"
                type="text"
                onChange={this.onFormChange}
                value={this.state.noun1}
                name="noun1" 
              />
              <input 
                placeholder="adverb"
                type="text"
                onChange={this.onFormChange}
                value={this.state.adverb}
                name="adverb" 
              />
              <input 
                placeholder="verb"
                type="text"
                onChange={this.onFormChange}
                value={this.state.verb}
                name="verb" 
              />
              the<input 
                placeholder="adjective"
                type="text"
                onChange={this.onFormChange}
                value={this.state.adjective2}
                name="adjective2" 
              />
              <input 
                placeholder="noun"
                type="text"
                onChange={this.onFormChange}
                value={this.state.noun2}
                name="noun2" 
              />.
            </div>

            <div className="PlayerSubmissionForm__submit">
              <input onClick={this.onFormSubmit} type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
            </div>
          </form>
        </div>
    
    const submissionFormContent = this.props.poemSubmitted === false ? <p>{ submissionForm }</p> : <p></p>;

    return (
      <div>{ submissionFormContent }</div>
    );
  }
}

export default PlayerSubmissionForm;
