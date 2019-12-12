import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recentSubmission: undefined,
      finalPoem: []
    }
  }

  generateVerse = (fields) => {
    return fields.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");
  }

  submitForm = (verse) => {
    let fields = FIELDS
    let i = 0
    let j = 0
    while (i < fields.length) {
      if (fields[i]['key']) {
        fields[i]['placeholder'] = Object.values(verse)[j]
        i++
        j++
      } else {
        i++
      }
    }

    const sentence = this.generateVerse(fields)
    let updatePoem = this.state.finalPoem
    updatePoem.push(sentence)
    this.setState({
      recentSubmission: sentence,
      finalPoem: updatePoem
    })
  }

  render() {

    const exampleFormat = this.generateVerse(FIELDS)

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission recentSubmission={this.state.recentSubmission}/>

        <PlayerSubmissionForm fields={FIELDS} addSubmissionCallback={this.submitForm}/>

        <FinalPoem finalPoem={this.state.finalPoem}/>

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
