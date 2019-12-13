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
    }
  }

  onFieldChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // React won't render Object. Making the line a string or array to render successfully in FinalPoem's map function (line#9)
    const newLine = `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} ${this.state.adj2} ${this.state.noun2}.`
    
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });

    this.props.addLineCallback(newLine);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.id }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              onChange={this.onFieldChange}
              name="adj1"
              value={this.state.adj1}
              type="text"
              placeholder="adjective"
            />
            <input
              onChange={this.onFieldChange}
              name="noun1"
              value={this.state.noun1}
              type="text"
              placeholder="noun"
            />
            <input
              onChange={this.onFieldChange}
              name="adv"
              value={this.state.adv}
              type="text"
              placeholder="adverb"
            />
            <input
              onChange={this.onFieldChange}
              name="verb"
              value={this.state.verb}
              type="text"
              placeholder="verb"
            />
            The
            <input
              onChange={this.onFieldChange}
              name="adj2"
              value={this.state.adj2}
              type="text"
              placeholder="adjective"
            />
            <input
              onChange={this.onFieldChange}
              name="noun2"
              value={this.state.noun2}
              type="text"
              placeholder="noun"
            />.
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
