import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  // Starting with the tags in the state so that upon reset, it'll always start with this text in it. 
  constructor(props) {
    super(props);
    this.state = {
      inPlay: props.inPlay,
      player: 1,
      adj1: '',
      noun1: '', 
      adverb: '', 
      verb: '', 
      adj2: '', 
      noun2: '',
      adj1Class: 'invalid',
      noun1Class: 'invalid',
      adverbClass: 'invalid',
      verbClass: 'invalid',
      adj2Class: 'invalid',
      noun2Class: 'invalid',
    }
  }
  //on word tabbing or entering, this takes the new information and adjusts state accordingly
  onInputChange = (event) => {
    //emtpy updated state
    const updatedState = {}
    //sets the data and name/label for setState
    const field = event.target.name;
    const value = event.target.value
    //updates the updated state at the particular name to have the value of value
    //bracket notation is needed when what we're passing into it is a variable
    updatedState[field] = value
    //updated the state with the updatedState object
    this.setState(updatedState)

    switch(field) {
      case "adj1":
        this.setState({adj1Class: 'valid'});
        break;
      case "noun1":
          this.setState({noun1Class: 'valid'});
          break;
      case "adverb":
          this.setState({adverbClass: 'valid'});
          break;
      case "verb":
          this.setState({verbClass: 'valid'});
          break;
      case "adj2":
          this.setState({adj2Class: 'valid'});
          break;
      case "noun2":
          this.setState({noun2Class: 'valid'});
          break;
      default: {}
    }
  }

  //on submit, this takes the event and then takes all the items into state very momentarily
  onSubmitLine = (event) => {

    event.preventDefault();

    // this concatenates the line together
    
    let line = `The ${this.state.adj1} ${this.state.noun1} ${this.state.adverb} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`

    //then, it uses the line to pass into the addLineCallback function, which will go back to Game

    this.props.addLineCallback(line);

    //this resets the form for use next time
    this.setState({
      adj1: '',
      noun1: '', 
      adverb: '', 
      verb: '', 
      adj2: '', 
      noun2: '',
      adj1Class: 'invalid',
      noun1Class: 'invalid',
      adverbClass: 'invalid',
      verbClass: 'invalid',
      adj2Class: 'invalid',
      noun2Class: 'invalid',
    })

    let inc = this.state.player
    inc = inc + 1
    this.setState({player: inc})
  }

  render() {

      return (
        <div className="PlayerSubmissionForm">
          <h3>Player Submission Form for Player #{`${this.state.player}`}</h3>

          <form className="PlayerSubmissionForm__form"  onSubmit={this.onSubmitLine}>

            <div className="PlayerSubmissionForm__poem-inputs">

              The 
              <input name="adj1" Placeholder={'adjective'} type="text" class={`PlayerSubmissionForm__input--${this.state.adj1Class}`} onChange={this.onInputChange} value={this.state.adj1} />
              <input name="noun1" Placeholder={'noun'} type="text" class={`PlayerSubmissionForm__input--${this.state.noun1Class}`} onChange={this.onInputChange} value={this.state.noun1} />
              <input name="adverb" Placeholder={'adverb'} type="text" class={`PlayerSubmissionForm__input--${this.state.adverbClass}`} onChange={this.onInputChange} value={this.state.adverb} />
              <input name="verb" Placeholder={'verb'} type="text" class={`PlayerSubmissionForm__input--${this.state.verbClass}`} onChange={this.onInputChange} value={this.state.verb} />
              the
              <input name="adj2" Placeholder={'adjective'} type="text" class={`PlayerSubmissionForm__input--${this.state.adj2Class}`} onChange={this.onInputChange} value={this.state.adj2} />
              <input name="noun2" Placeholder={'noun'} type="text" class={`PlayerSubmissionForm__input--${this.state.noun2Class}`} onChange={this.onInputChange} value={this.state.noun2} />
              .
            </div>

            <div className="PlayerSubmissionForm__submit">
              <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn"/>
            </div>
          </form>
        </div>
      );
  }
}

PlayerSubmissionForm.propTypes = {
  addLineCallback: PropTypes.func.isRequired,
  adj1: PropTypes.string.isRequired,
  noun1: PropTypes.string.isRequired,
  adverb: PropTypes.string.isRequired,
  verb: PropTypes.string.isRequired,
  adj2: PropTypes.string.isRequired,
  noun2: PropTypes.string.isRequired,
}

export default PlayerSubmissionForm;
