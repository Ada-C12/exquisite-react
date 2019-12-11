import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  
  
  constructor(props) {
    super(props);

    let stateKeys = {}
    this.props.fields.forEach((field) => {
      if (field.key) {
        stateKeys[field.key] = ''
      }
    });

    this.state = stateKeys
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
    console.log(event.target)
  }

  render() {
    
    const fieldsDisplay = this.props.fields.map((field, i) => {
      if (field.key) {
        return (
          <input
            key={i}
            name={field.key}
            placeholder={field.placeholder}
            type="text"
            onChange={this.onInputChange}
            value={this.state[field.key]}
          />
        )
      } else {
        return field
      }
    })
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitHandler} 
        >

          <div className="PlayerSubmissionForm__poem-inputs">

            {fieldsDisplay}

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
