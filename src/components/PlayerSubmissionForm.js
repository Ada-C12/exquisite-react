import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    };
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    
    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
    console.log(this.state.adj1)
  }

  inputFields = () => {
    return this.props.fields.map((field, i) => {
      if (!field.key) {
        return field
      } else {
        return <input name={field.key}
          key={i}
          placeholder={field.placeholder}
          onChange={this.onInputChange}
          value={this.state[field.key]}
          type='text'
          />
      }
    });
  }

  render() {
    // console.log(this.state.adj1);
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            {this.inputFields()}
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
