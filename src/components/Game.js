import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

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

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      poem: []
    };
  }

  addLineToPoem = (poemLine) => {
    this.setState((prevState) => ({
      poem: [
        ...prevState.poem,
        poemLine
      ]
    }));
  }
 // ... is saying: in this spot on the code, take all the elements on the array and add them one by one
 // prevState(variable name) will always give you the most current version of state
  render() {
    console.log(this.state.poem)
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

        <RecentSubmission onSubmitLine={this.state.poem}/>

        <PlayerSubmissionForm onSubmitLine={this.addLineToPoem} currentPlayer={this.state.poem.length + 1} />

        <FinalPoem />

      </div>
    );
  }
}

export default Game;
