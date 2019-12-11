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
              
           {/* <p>The</p>
            <input
              placeholder="adjective"
              type="text"
              name="adjectiveFirst"
              onChange={this.handleChange}
              // I wan to figure out how to add a ternary to select  PlayerSubmissionFormt__input--invalid className
              />

            <input
              placeholder="noun"
              type="text"
              name="nounFirst"
              onChange={this.handleChange} />

            <input
              placeholder="adverb"
              type="text" 
              name="adverb"
              onChange={this.handleChange} />

            <input
              placeholder="verb"
              type="text" 
              name="verb"
              onChange={this.handleChange} />

            <p>the</p>

            <input
              placeholder="adjective"
              type="text" 
              name="adjectiveSecond"
              onChange={this.handleChange} />

            <input
              placeholder="noun"
              type="text" 
              name="nounSecond"
              onChange={this.handleChange}/>
              <p>.</p>  */}
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
