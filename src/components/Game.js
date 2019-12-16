import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      recentLine: "",
      submissions: [],
      poemFinished: false,
      playerNum: 1
    }
  }

  showPoem = () => {
    
    this.setState({
      poemFinished: true
    }
    )
    console.log(this.state)

  }

  addLine = (words) => {
    
   
    const wordArray = Object.values(words)
    const line = `The ${wordArray[0]} ${wordArray[1]} ${wordArray[2]} ${wordArray[3]} the ${wordArray[4]} ${wordArray[5]}.`
    
    this.setState({
      recentLine: line, 
      playerNum: this.state.playerNum + 1
    })
    this.state.submissions.push(line)

  }

  render() {
    let recentSubmission = ""
    if (this.state.submissions.length >= 1 && !this.state.poemFinished){
      recentSubmission = <RecentSubmission recentSubmission={this.state.recentLine} />
    }
   
  

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

        
        {recentSubmission}

    { this.state.poemFinished ? "" : <PlayerSubmissionForm fields={FIELDS} addLineCallback={this.addLine} playerNum={this.state.playerNum} /> }

        <FinalPoem poem={this.state.submissions} poemStatus={this.state.poemFinished} showPoemCallback={this.showPoem} />

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
