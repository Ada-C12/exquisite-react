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
    
    //target is the html element itself. You can do 
    //event.target.id to see specifics in the html target.
    
    const field = event.target.id;

    const value = event.target.value;
    // describe what the event.target syntax is doing exactly

    const updatedState = {};
    updatedState[field] = value;

    this.setState(updatedState); 
  }

  onSubmit = (event) => {
    
    event.preventDefault();
    // this prevents the page from refreshing so you don't loose the state
    // what does this do again?

    const {adj1, noun1, adv, verb, adj2, noun2} = this.state;
  
    // what is this saying exactly?
    
    this.props.addPlayerInputCallback(this.state);
    this.resetState();
  }


  render() {
  

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>


        <form onSubmit={this.onSubmit} className="PlayerSubmissionForm__form" >
          
          <div className="PlayerSubmissionForm__poem-inputs">
            <div>The</div>
            <input 
              placeholder="adjective"
              type="text" 
              className="PlaySubmissionForm_input--invalid"
              onChange={this.onFormChange}
              id="adj1"
              value={this.state.adj1}
              // the id, placeholder and value are all very useful. Value is equal to whatever the state is
            />
            <input 
              placeholder="noun"
              type="text" 
              className="PlaySubmissionForm_input--invalid"
              onChange={this.onFormChange}
              id="noun1"
              value={this.state.noun1}
            />
            <input 
              placeholder="adverb"
              type="text" 
              className="PlaySubmissionForm_input--invalid"
              onChange={this.onFormChange}
              id="adv"
              value={this.state.adv}
            />
            <input 
              placeholder="verb"
              type="text" 
              className="PlaySubmissionForm_input--invalid"
              onChange={this.onFormChange}
              id="verb"
              value={this.state.verb}
            />
            <input 
              placeholder="adjective"
              type="text" 
              className="PlaySubmissionForm_input--invalid"
              onChange={this.onFormChange}
              id="adj2"
              value={this.state.adj2}
            />
            <div>the</div>
            <input 
              placeholder="noun"
              type="text" 
              className="PlaySubmissionForm_input--invalid"
              onChange={this.onFormChange}
              id="noun2"
              value={this.state.noun}
            />
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
