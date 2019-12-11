import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adjectiveFirst: '',
      nounFirst: '',
      adverb: '',
      verb: '',
      adjectiveSecond: '',
      nounSecond: ''
    };
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const sentence = this.props.fields.reduce((acc, field, i) => {
      if (field.key) {
        return `${acc} ${this.state[field.name].trim()}`;
      }
      else {
        if (i > 0 && i < (this.props.fields.length - 1)) {
          return `${acc} ${field}`;
        }
        return `${acc}${field}`;
      }
    }, '');

    this.props.onSubmitLine(sentence);
 
    this.setState({
      adjectiveFirst: '',
      nounFirst: '',
      adverb: '',
      verb: '',
      adjectiveSecond: '',
      nounSecond: ''
    });
  };
      
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.currentPlayer}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            {
              this.props.fields.map((field, i) => {
                if (field.key) {
                    return (
                      <input
                        placeholder={field.placeholder}
                        value={this.state[field.name]}
                        type="text"
                        name={field.name}
                        onChange={this.handleChange}
                        key={field.name} 
                      />
                    ); 
                } else {
                    return <span key={i}>{field}</span>;}
                })
              }    
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" 
            value="Submit Line" 
            className="PlayerSubmissionForm__submit-btn"
            onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
