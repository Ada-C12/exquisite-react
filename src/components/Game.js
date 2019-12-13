import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    //in this state we can store the final poem 
    this.state = {
      submissions: [],
      player: 1,
      revealPoem: false,
    }
  }

  addSentence = (newSentence) => {
    //Right now this is adding each submission object to the submitted Poems array. Maybe in here we could destructure it to only add the values that we want?
    //Take in new sentence, and loop through each key-value, and return a string 
    let sentenceString =`the ${newSentence.adjective} ${newSentence.noun} ${newSentence.adverb} the ${newSentence.adjective2} ${newSentence.noun2}.`

    const {submissions} = this.state;
    submissions.push(sentenceString); 
    this.setState({
      submissions,
      player: this.state.player + 1
    })
    console.log(submissions)
  }

  render() {
    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");


    const displayRecent = () => {
      if (this.state.submissions.length > 0 ){
        return <RecentSubmission submission={this.state.submissions.slice(-1)[0]}/>
      }
    }

    const displayForm = () => {
      return <PlayerSubmissionForm addSentenceCallback={this.addSentence} player={this.state.player} fields={FIELDS}/>
    }

    const onFinalPoemSubmit = () => { 
      this.setState({revealPoem: true})

    }

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        {this.state.revealPoem ? "" : displayRecent() }
        {this.state.revealPoem ? "" : displayForm()}
   
        <FinalPoem submissions={this.state.submissions} onFinalPoemSubmitCallback={onFinalPoemSubmit} revealPoem={this.state.revealPoem}/>

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
