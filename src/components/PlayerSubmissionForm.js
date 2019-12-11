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
    
  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmit}>
          <div className="PlayerSubmissionForm__poem-inputs">
            The<input placeholder="adjective"
              type="text"
              htmlFor="adj1"
              name="adj1"
              className="PlayerSubmissionForm__input--invalid"
              value={this.state.adj1}
              onChange={this.onChange}/>
            <input placeholder="noun"
              type="text"
              htmlFor="noun1"
              name="noun1"
              className="PlayerSubmissionForm__input--invalid"
              value={this.state.noun1}
              onChange={this.onChange}/>
            <input placeholder="adverb"
              type="text"
              htmlFor="adv"
              name="adv"
              className="PlayerSubmissionForm__input--invalid"
              value={this.state.adv}
              onChange={this.onChange}/>
            <input placeholder="verb"
              type="text"
              htmlFor="verb"
              name="verb"
              className="PlayerSubmissionForm__input--invalid"
              value={this.state.verb}
              onChange={this.onChange}/>
            the<input placeholder="adjective"
              type="text"
              htmlFor="adj2"
              name="adj2"
              className="PlayerSubmissionForm__input--invalid"
              value={this.state.adj2}
              onChange={this.onChange}/>
            <input placeholder="noun"
              type="text"
              htmlFor="noun2"
              name="noun2"
              className="PlayerSubmissionForm__input--invalid"
              value={this.state.noun2}
              onChange={this.onChange}/>.
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
