import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  // lines is the running collection of lines in the poem, stored as strings in an array
  // inplay determines whether the poem is still being added to or whether it is completed
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      inplay: true,
    }
  }

  addLine = (lineString) => {
      let addingLine = this.state.lines
      addingLine.push(lineString)
      this.setState({lines: addingLine})
  }

  finishPoem = () => {
      this.setState({inplay: false})
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

        {/* Based on whether the poem is in play, Recent Submission and Player Submission Form appear in the render.  */}
        {this.state.inplay ? <RecentSubmission lines = {this.state.lines}/> : '' }

   
        {this.state.inplay ? <PlayerSubmissionForm addLineCallback = {(lineString) => this.addLine(lineString)}/> : '' }
        
        {/* Final poem displays the "finish" button when the poem is in play and then the actual final poem when not, so it is always rendered.  */}
        <FinalPoem
        lines = {this.state.lines}
        inPlay = {this.state.inplay}
        onFinishPoemCallback = {() => this.finishPoem()}
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
