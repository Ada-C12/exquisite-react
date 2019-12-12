import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latestSentence: '',
      wholePoem: [],
      showPoem: false
    }
  }

  makeOneSentence = (words) => {
    const sentence = `The ${words.adj1} ${words.noun1} ${words.adv} ${words.verb} the ${words.adj2} ${words.noun2}.`;
    this.addToPoem(sentence);
    this.setState({
      latestSentence: sentence,
    });
    console.log(sentence);
  }
// Moved this out of makeOneSentence and made it a helper method for clarity
  addToPoem = (toAdd) => {
    this.state.wholePoem.push(toAdd);
    this.setState({
      wholePoem: this.state.wholePoem
    })
  }

  render() {

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

        <RecentSubmission sentence={this.state.latestSentence}/>

        <PlayerSubmissionForm makeOneSentenceCallback={this.makeOneSentence}/>

        <FinalPoem poem={this.state.wholePoem}/>

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
