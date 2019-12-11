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
      playerCount: props.player,
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const words = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2
    }

    this.props.makeOneSentenceCallback(words);
    console.log(words);
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
      // does playercount state live in form or game? change this to a functional component and take away state?
      this.state.playerCount += 1
    })
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.playerCount }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The
            <input
              placeholder="adjective"
              name="adj1"
              onChange={this.onLastNameChange}
              type="text" />
            <input
              placeholder="noun"
              name="noun1"
              type="text" />
            <input
              placeholder="adverb"
              name="adv"
              type="text" />
            <input
              placeholder="verb"
              name="verb"
              type="text" />
            the
            <input
              placeholder="adjective"
              name="adj2"
              type="text" />
            <input
              placeholder="noun"
              name="noun2"
              type="text" />
            .

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

// PlayerSubmissionForm.propTypes = {
//   makeOneSentenceCallback: PropTypes.func.isRequired,
// };

export default PlayerSubmissionForm;
