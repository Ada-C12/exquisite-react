import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  let  fieldState = {}
  
  this.props.fields.forEach((field) => {
    if(field.key) {
    fieldState[field.key] = ""
    }

  })
    this.state = fieldState 
  }

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }


  render() {
    console.log(this.state)
    const playerForm = this.props.fields.map((field, i) => {
      if(field.key) {
        return(<input
          key={i}
          placeholder={field.placeholder}
          name={field.key}
          value={this.state[field.key]}
          onChange={this.onInputChange}
          type="text" />

        )

      }else{
        return field
      }

    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {playerForm
              // Put your form inputs here... We've put in one below as an example
             
             
 
            }
            {/* <p> The </p>
             <input
              placeholder="adjective"
              name="adjective1"
              type="text" />
              <input
              placeholder="noun"
              type="text" />
            <input
              placeholder="adverb"
              type="text" />
              
                <input
              placeholder="verb"
              type="text" />
              <p> the </p>
            <input
              placeholder="adjective"
              type="text" />
              <input
              placeholder="noun"
              type="text" /> */}

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
