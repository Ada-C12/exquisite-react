import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective: '',
      noun: '', 
      adverb: '', 
      verb: '', 
      adjective2: '', 
      noun2: '',
    };
  }

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

  onVerbChange = (event) => {
    this.setState({
      verb: event.target.value
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

  onSubmit = (event) => {
    // Stop the default page reload
    event.preventDefault();

    const newSubmission = {
      adjective: this.state.adjective,
      noun: this.state.noun, 
      adverb: this.state.adverb, 
      verb: this.state.verb, 
      adjective2: this.state.adjective2, 
      noun2: this.state.noun2,
    }  

    this.props.addSubmissionCallback(newSubmission);
    this.props.lastSubmissionCallback(newSubmission);
    
    this.setState({
      adjective: '',
      noun: '', 
      adverb: '', 
      verb: '', 
      adjective2: '', 
      noun2: '',
    });
  }

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
              <input placeholder="Adjective" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.adjective} onChange={this.onAdjectiveChange}/>              
              <input placeholder="Noun" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.noun} onChange={this.onNounChange}/>
              <input placeholder="Adverb" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.adverb} onChange={this.onAdverbChange}/>
              <input placeholder="Verb" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.Verb} onChange={this.onVerbChange}/>
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

PlayerSubmissionForm.propTypes = {
  addSubmissionCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
