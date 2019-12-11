import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allLines: [],
      revealPoem: false,
    };
  };

  addLine = (line) => {
    const updatedSubmits = this.state.allLines;
    updatedSubmits.push(line);

    this.setState({
      allLines: updatedSubmits,
    });

    // console.log(this.state.allLines);
  };

  finishPoem = () => {
    this.setState({
      revealPoem: true,
    });
  };

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    const allLines = this.state.allLines;
    const revealPoem = this.state.revealPoem;

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        { (allLines.length > 0 && !revealPoem) ? <RecentSubmission lastLine={allLines[allLines.length - 1]} /> : '' }

        { revealPoem ? '' : <PlayerSubmissionForm id={ allLines.length + 1 } addLine={ this.addLine } /> }
        
        <FinalPoem allLines={ allLines } revealPoem={ revealPoem } finalPoemCallback={ this.finishPoem } />
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
