import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentPoem: '',
      finalPoem: [],
      finalDisplay: false,
      playerNum: 1,
    }
  }

  onSubmitPoem = (submission) => {
    let newFinalPoem = this.state.finalPoem;
    newFinalPoem.push(submission);
    let playNum = this.state.playerNum
    playNum += 1
    this.setState({
      recentPoem: submission,
      finalPoem: newFinalPoem,
      playerNum: playNum,
    })
    // console.log(this.state.finalPoem);
  };

  onFinalPoem = () => {
    let poemState = this.state.poemState
    poemState = true;
    this.setState({
      finalDisplay: poemState,
    })
  }

  revealSubmission = () => {
    if (!this.state.finalDisplay) {
      return <RecentSubmission />
    }
  }

  revealForms = () => {
    if (!this.state.finalDisplay) {
      return <PlayerSubmissionForm 
      onSumbitPoemCallback={this.onSubmitPoem}
      fields={FIELDS} 
      playerNum={this.state.playerNum}
      />
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
        
        {this.revealSubmission()}
        {this.revealForms()}
        

        <FinalPoem 
          onFinalPoemCallback={this.onFinalPoem}
          finalPoem={this.state.finalPoem}
          finalDisplay={this.state.finalDisplay}
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
