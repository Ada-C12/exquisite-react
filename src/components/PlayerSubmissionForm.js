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

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    
  const line = `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`;

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
    
    this.props.onSubmit(line);
  }

  validateClass = (value) => {
    if (value.length > 0) {
      return "PlayerSubmissionForm__input"
    } else {
      return "PlayerSubmissionForm__input--invalid"
    }
  }
    
  render() {
    const putIn = (field, i) => {
      if (field.key) {
        const state = this.state[field.key];
        return (<input placeholder={field.placeholder}
                  type="text"
                  htmlFor={field.key}
                  name={field.key}
                  className={this.validateClass(state)}
                  value={state}
                  onChange={this.onChange}
                  key={i}
                />);
      } else {
        return field
      }  
    }
    
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmit}>
          <div className="PlayerSubmissionForm__poem-inputs">
            {this.props.fields.map(putIn)}
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
