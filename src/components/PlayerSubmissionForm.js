import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1:'',
      noun1:'',
      adverb:'',
      verb:'',
      adj2:'',
      noun2:'',
    }
  }
  onSubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.adjective && this.state.species) {
      this.props.addPetCallback({
        adj1: this.state.adj1,
        noun1: this.state.noun1,
        adverb: this.state.adverb,
        verb: this.state.verb,
        adj2: this.state.adj2,
        noun2: this.state.adj2,
      });

      this.setState({
        name: '',
        species: '',
        about: '',
        images: [],
        image: '',
        location: '',
      });
    }
  }
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitHandler}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The
            <input
              placeholder="adjective"
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
              the
              <input
              placeholder="adjective"
              type="text" />
              <input
              placeholder="noun"
              type="text" />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn"
            onClick={this.onSubmitHandler} />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
