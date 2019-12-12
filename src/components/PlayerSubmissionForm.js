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

  resetState = () => {
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }


  onFormChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { adj1, noun1, adv, verb, adj2, noun2 } = this.state;
    
    if (adj1 === '' || noun1 === '' || adv === ''|| verb === '' || adj2 === ''|| noun2 === '') return;

    console.log(event);

    this.props.addGameCallback(this.state);

    this.resetState();

  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player()}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <p>The</p>
            <input
              placeholder="adjetive"
              type="text" 
              name="adj1"
              value={this.state.adj1}
              onChange={this.onFormChange}/>
            <input
              placeholder="noun"
              type="text"
              name="noun1"
              value={this.state.noun1}
              onChange={this.onFormChange}/>
            <input
              placeholder="adverb"
              type="text" 
              name="adv"
              value={this.state.adv}
              onChange={this.onFormChange}/>
            <input
              placeholder="verb"
              type="text"
              name="verb" 
              value={this.state.verb}
              onChange={this.onFormChange}/>
            <p>the</p>
            <input
              placeholder="adjetive"
              type="text" 
              name="adj2"
              value={this.state.adj2}
              onChange={this.onFormChange}/>
            <input
              placeholder="noun"
              type="text"
              name="noun2" 
              value={this.state.noun2}
              onChange={this.onFormChange}
              />
            <p>.</p>
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
