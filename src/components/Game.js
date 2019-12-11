import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      submissions: [],
      currentPlayer: 1,
    }
  }

  mapToString = (arrayOfStrings) => {
    const newString = arrayOfStrings.map((string) => {
      if (string.key) {
        return string.placeholder;
      } else {
        return string;
      }
    }).join(" ");
    return newString;
  }

  onFormSubmit = (submissionComponents) => {
    const newSubmission = this.mapToString(submissionComponents);
    
    let { submissions, currentPlayer } = this.state;
    
    // need to add submissionComponents to submissions array
    submissions.push(newSubmission);
    // need to add one to currentPlayer
    currentPlayer += 1;
    
    this.setState( {submissions, currentPlayer} );
  }

  render() {
    const exampleFormat = this.mapToString(FIELDS);

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission />

        <PlayerSubmissionForm playerNumber={this.state.currentPlayer} onFormSubmit={this.onFormSubmit} />

        <FinalPoem />

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
