import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerInput: [],
      isPoemSubmitted: false,
    }
  }


  onPoemSubmittedCallback = () => {
    this.setState({
      isPoemSubmitted: true,
    })
  }


  addPlayerInput = (newInput) => {
    const {playerInput} = this.state

    playerInput.push(newInput);

    this.setState({
      // always change state through set state
      // if I didn't have this, the state wouldn't be change, it would only
      // change the local variable 
      playerInput
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

    const recentSubmission = <RecentSubmission
    latestSubmission={this.state.playerInput[this.state.playerInput.length-1]}/>

    const playerSubmissionForm = <PlayerSubmissionForm addPlayerInputCallback={this.addPlayerInput}
    playerNumber={this.state.playerInput.length}/>

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>
        
        {this.state.isPoemSubmitted ? <div/>: recentSubmission}
        {this.state.isPoemSubmitted ? <div/>: playerSubmissionForm}

        <FinalPoem onPoemSubmittedCallback={this.onPoemSubmittedCallback}
        isPoemSubmitted={this.state.isPoemSubmitted}
        finalPlayerInput={this.state.playerInput}/>
      </div>
    );
  }
}

const FIELDS = [
  // Can I use this FIELDS globally? Like can I use it in the state of PlayerSubmissionForm?
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
