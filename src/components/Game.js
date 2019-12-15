import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor() {
    super();

    this.state = {
      submissions: [],
      lastSubmission: {},
      player: 1,
      showPoem: false, 
      showSubm: false
    }
  };

  addSubmission = (submission) => {

    const submissions = this.state.submissions;
    
    submissions.push(submission);
    this.setState({
      submissions,
      player: this.state.player + 1,
      showSubm: true,
    })
  };

  lastSubmission = (submission) => {

    let { lastSubmission } = this.state.lastSubmission;

    lastSubmission = submission
    this.setState({
      lastSubmission,
    });
  }

  revealPoem = (event) => {
    event.preventDefault();
    if (this.state.submissions.length > 0) {
      this.setState({
        showPoem: true,
        showSubm: false,
      });
    };
  };


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

        <RecentSubmission 
          submission={this.state.lastSubmission} 
          showSubm={this.state.showSubm} 
          showPoem={this.state.showPoem}/>

        <PlayerSubmissionForm 
          addSubmissionCallback={this.addSubmission} 
          lastSubmissionCallback={this.lastSubmission} 
          player={this.state.player} 
          showPoem={this.state.showPoem}
          fields={FIELDS}
          />

        <FinalPoem 
          poem={this.state.submissions} 
          revealPoem={this.revealPoem} 
          showPoem={this.state.showPoem} />
      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adjective',
    placeholder: 'adjective',
  },
  {
    key: 'noun',
    placeholder: 'noun',
  },
  {
    key: 'adverb',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adjective2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
