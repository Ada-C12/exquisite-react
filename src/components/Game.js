import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recentSubmission: '',
      finalPoem: [],
      revealFinalPoem: false,
      playerNumber: 1,
    };
  }

  onSubmitForm = (submission) => {
    let updatedPoem = this.state.finalPoem;
    updatedPoem.push(submission);
    let updatedPlayer = this.state.playerNumber;
    updatedPlayer += 1;

    this.setState({
      recentSubmission: submission,
      finalPoem: updatedPoem,
      playerNumber: updatedPlayer,
    })
  }

  onRevealPoem = () => {
    this.setState({
      revealFinalPoem: true,
    })
  }

  displayRecentSubmission = () => {
    if (!this.state.revealFinalPoem && this.state.recentSubmission !== '') {
      return <RecentSubmission recentSubmission={this.state.recentSubmission}/>
    }
  }

  displayForm = () => {
    if (!this.state.revealFinalPoem) {
      return <PlayerSubmissionForm onSubmitFormCallback={this.onSubmitForm} fields={FIELDS} playerNumber={this.state.playerNumber}/>
    }
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

        {this.displayRecentSubmission()}
        {this.displayForm()}

        <FinalPoem poemData={this.state.finalPoem} onRevealPoemCallback={this.onRevealPoem} poemRevealed={this.state.revealFinalPoem}/>

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
