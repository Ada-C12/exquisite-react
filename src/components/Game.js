import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

// To-do:
  // add proptypes to each component
  // add CSS to make text box light pink when its not filled in
  
  // add a section that shows the most_recent_submission after player submits a stanza
  // hide the most_recent_submission section until a player submits a stanza
  
  // hide the submission form & most_recent_submission section when "reveal" final poem is clicked


// add the last element from savedPoem to recent_submission
class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      savedPoem: [],
      poemSubmitted: false,
    };
  }
  
  // store each line of submitted poem in array of poems
  addStanzas = (stanza) => {
    console.log("addStanzas method is being called");
    console.log(stanza);

    const poems = this.state.savedPoem;
    poems.push(stanza);
    this.setState({poems});

    console.log(poems);
    console.log(this.state.savedPoem);
  }

  // event handler function that when called
  // will change the state for poemSubmitted to true
  showFinalPoem = (event) => {
    console.log("show final poem method is called")
    
    event.preventDefault();
    this.setState({
      poemSubmitted: true,
    });
  }

  render() {
    // iterates through fields and returns a new array of alternating
    // grammar fields - joins them back into a sentence
    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission 
          recentPoem={ this.state.savedPoem.slice(-1) }
        />

        <PlayerSubmissionForm savePoemCallback={ this.addStanzas }/>

        <FinalPoem 
          poems={ this.state.savedPoem }
          poemSubmitted={ this.state.poemSubmitted }
          showPoemCallback={ this.showFinalPoem }
        />
      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
