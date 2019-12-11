import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  // constructor(props) {
  //   super(props);
  // }

  state = {
    adjective: '',
    noun: '', 
    adverb: '', 
    verb: '', 
    adjective2: '', 
    noun2: '',
  };

  onAdjectiveChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      adjective: event.target.value
    });
  };

  onNounChange = (event) => {
    this.setState({
      noun: event.target.value
    })
  };

  onAdverbChange = (event) => {
    this.setState({
      adverb: event.target.value
    })
  };

  onVerbeChange = (event) => {
    this.setState({
      verbe: event.target.value
    })
  };

  onAdjective2Change = (event) => {
    this.setState({
      adjective2: event.target.value
    })
  };

  onNoun2Change = (event) => {
    this.setState({
      noun2: event.target.value
    })
  };

  onSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
              <input placeholder="Adjective" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.adjective} onChange={this.onAdjectiveChange}/>              
              <input placeholder="Noun" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.noun} onChange={this.onNounChange}/>
              <input placeholder="Adverb" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.adverb} onChange={this.onAdverbChange}/>
              <input placeholder="Verb" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.Verb} onChange={this.onVerbeChange}/>
              <input placeholder="Adjective" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.adjective2} onChange={this.onAdjective2Change}/>
              <input placeholder="Noun" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.noun2} onChange={this.onNoun2Change}/>
            .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.onSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
