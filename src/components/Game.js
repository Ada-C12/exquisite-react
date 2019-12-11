import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';
import { valueToNode } from '@babel/types';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      submissions: [],
    }
  }

  addSubmission = (submission) => {
    // submission comes in as object
    // turn submission into submissionString

    const submissionString = `The ${submission.adj1} ${submission.noun} ${submission.adverb} ${submission.verb} the ${submission.adjective} ${submission.noun} .`

    this.setState({
      submissions: this.state.submissions.push(submissionString)
    })
  }

  render() {

    console.log('this.state', this.State)

    const currentPlayerNumber = this.state.submissions.length + 1

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    // console.log('fieldsAndPlaceholders', fieldsAndPlaceholders)

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission
          submissionLine={this.state.submissions[this.state.submissions.length - 1]}
        />

        <PlayerSubmissionForm 
          playerNumber={currentPlayerNumber}  
          formatFieldsPlaceholders={FIELDS}
        />

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
