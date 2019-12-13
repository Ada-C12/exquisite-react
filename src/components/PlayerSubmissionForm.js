import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);	    super(props);
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

  handleClick = (event) => {
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
              // Put your form inputs here... We've put in one below as an example
          this.props.fields.map((field, i) => {
            	if (field.key) {
            	  return (
                  <input
              	  placeholder={field.placeholder}
                  value={this.state[field.name]}
                  type="text"
                  name={field.name}
                  onChange={this.handleChange}
                  className={this.state[field.name] ? "" : "red"}
                  key={field.name} 
                      />
                ); 
                } 
                else {
                    return <span key={i}>{field}</span>;}
                })
              }    
          </div>	         

            {/* /* <span>The</span>
            <input
              name="adjective1"
              placeholder="adjective"
              type="text"
              value={this.state.adjective1}
              onChange={this.handleChange}
              className={this.state[]}
            />
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              value={this.state.noun1}
              onChange={this.handleChange}
              className={this.state["noun1"]}
            />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              value={this.state.adverb}
              onChange={this.handleChange}
              className={this.state["adverb1"]}
            />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              value={this.state.verb}
              onChange={this.handleChange}
              className={this.state["verb"]}
            /> 
            <span>the</span>
            <input
              name="adjective2"
              placeholder="adjective"
              type="text"
              value={this.state.adjective2}
              onChange={this.handleChange}
              className={this.state["adjective2"]}
            />
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              value={this.state.noun2}
              onChange={this.handleChange}
              className={this.state["noun2"]}
            />
            <span>.</span> */}
            

          {/* </div> */} 

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.handleClick} />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
