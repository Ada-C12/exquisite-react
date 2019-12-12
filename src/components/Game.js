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
      mostRecentPoem: undefined,
      gameIsOver: false,
    }
  }

  addSubmission = (submission) => {
    const mostRecentPoem = submission;
    const submissions = this.state.submissions;
    submissions.push(submission);

    this.setState({
      submissions,
      mostRecentPoem,
    });
  }

  onButtonClick = () => {
    this.setState({
      gameIsOver: true,
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

    const mostRecentSubmission = (!this.state.gameIsOver && this.state.mostRecentPoem !== undefined) ?
      (<RecentSubmission
        mostRecentPoem={this.state.mostRecentPoem}
        gameIsOver={this.state.gameIsOver} />) : null;


    const submissionForm = (!this.state.gameIsOver) ?
      (<PlayerSubmissionForm
        addSubmissionCallBack={this.addSubmission}
        player={this.state.submissions.length + 1} />) : null;

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">{exampleFormat}</p>
        
        {mostRecentSubmission}
        {submissionForm}

        <FinalPoem
          allSubmissions={this.state.submissions}
          gameIsOver={this.state.gameIsOver}
          onClickCallBack={this.onButtonClick} />

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
