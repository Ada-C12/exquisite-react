import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSubmission: '',
      finalPoem: [],
      reveal: false, 
    }
  }

  addRecentSubmission = (line) => {
    const {finalPoem} = this.state;
    finalPoem.push(line)
    this.setState({
      currentSubmission: line, 
      finalPoem, 
    })
  }

  onButtonClick = () => {
    this.setState({reveal: true})
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
        
        { this.state.reveal ? ' ' : <RecentSubmission submission={this.state.currentSubmission}/> }
  
        { this.state.reveal ? ' ' : <PlayerSubmissionForm addRecentSubmission={(line) => { this.addRecentSubmission(line) }} playerNumber={this.state.finalPoem.length + 1}/> }

        <FinalPoem poem={this.state.finalPoem} button={this.onButtonClick} buttonCheck={this.state.reveal} />

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
