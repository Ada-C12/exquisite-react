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
        lastSubmission: '',
        gameOver: false,
      }
  }

  addSubmission = (submission) => {
    const string = `The ${submission.adj1} ${submission.noun1} ${submission.adv} ${submission.verb} the ${submission.adj2} ${submission.noun2}`

    const subs = this.state.submissions;
    subs.push(string)

    this.setState({
      submissions: subs,
      lastSubmission: string,
    })
  }

  onFinalButtonClick = () => {
    this.setState({
      gameOver: true,
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

    console.log(this.state.submissions)

    const mostRecentSubmission = (!this.state.gameOver && this.state.submissions.length !== 0) ? (<RecentSubmission lastSubmission={this.state.lastSubmission} />) : null;


    const submissionForm = (!this.state.gameOver) ? (<PlayerSubmissionForm playerNumber={this.state.submissions.length + 1} addSubmissionCallback={this.addSubmission}/>) : null;

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>


        {mostRecentSubmission}

        {submissionForm}

        <FinalPoem lines={this.state.submissions} gameOver={this.state.gameOver} onFinalButtonClickCallback={this.onFinalButtonClick}/>

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
