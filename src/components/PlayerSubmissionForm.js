import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onPlayerSubmit = (event) => {
    event.preventDefault();
    
    const submission = `The ${this.state.adjective1} ${this.state.noun1} ${this.state.adverb} ${this.state.verb} the ${this.state.adjective2} ${this.state.noun2}.`;
    
    this.props.addSubmissionCallBack(submission);

    this.setState ({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
  }

  isInputValid = (input) => {
    if (input === ''){
      return "PlayerSubmissionFormt__input--invalid"
    }
  }

  render() {
    // const FIELDS = this.props.fields;

    // FIELDS.forEach(field => {
    //   let output 
    //   if(typeof(field) === String) {
    //     output = <div>{field}</div>
    //     console.log(output)
    //   } else if(typeof(field) === Object) {
    //     const key = field.key
    //     const placeholder = field.placeholder
    //     output =
    //         <input
    //           className={this.isInputValid(this.state.key)}
    //           name={key}
    //           placeholder={placeholder}
    //           type="text"
    //           onChange={this.onInputChange} 
    //           value={this.state.key} />
    //   };
    // })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form 
        className="PlayerSubmissionForm__form"
        onSubmit={this.onPlayerSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              className={this.isInputValid(this.state.adjective1)}
              name="adjective1"
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.adjective1} />

            <input
              className={this.isInputValid(this.state.noun1)}
              name="noun1"
              placeholder="noun"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.noun1} />

            <input
              className={this.isInputValid(this.state.adverb)}
              name="adverb"
              placeholder="adverb"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.adverb} />
            
            <input
              className={this.isInputValid(this.state.verb)}
              name="verb"
              placeholder="verb"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.verb} />
            
            the
            <input
              className={this.isInputValid(this.state.adjective2)}
              name="adjective2"
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.adjective2} />

            <input
              className={this.isInputValid(this.state.noun2)}
              name="noun2"
              placeholder="noun"
              type="text"
              onChange={this.onInputChange} 
              value={this.state.noun2} />
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
