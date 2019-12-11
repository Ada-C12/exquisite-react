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
    this.theNames = ["adjectiveFirst", "nounFirst", "adverb", "verb", "adjectiveSecond", "nounSecond"];
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log(this.state);
  };

  handleSubmit = () => {
    this.setState = {
      adjectiveFirst: '',
      nounFirst: '',
      adverb: '',
      verb: '',
      adjectiveSecond: '',
      nounSecond: ''
    };
    console.log(this.state);
  };

 
            
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
             this.props.fields.map((field, i) => {
              if (field.key) {
                  return  <input
                  placeholder={field.placeholder}
                  type="text"
                  name={this.theNames[i]}
                  onChange={this.handleChange} />; 
              } else {
                  return <p>{field}</p>;}
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
