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

  onFieldChange = (event) => {
    const { placeholder, value } = event.target;

    const updatedState = {};
    updatedState[placeholder] = value;

    this.setState(updatedState);
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
              <input placeholder="adjective" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.adjective} onChange={this.onFieldChange}/>              
              <input placeholder="noun" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.noun} onChange={this.onFieldChange}/>
              <input placeholder="adverb" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.adverb} onChange={this.onFieldChange}/>
            the  
              <input placeholder="verb" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.verb} onChange={this.onFieldChange}/>
              <input placeholder="adjective2" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.adjective2} onChange={this.onFieldChange}/>
              <input placeholder="noun2" type="text" className="PlayerSubmissionFormt__input--invalid" value={this.state.noun2} onChange={this.onFieldChange}/>
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
