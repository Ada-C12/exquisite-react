import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poemLines: [],
      endScreen: false
    }
  }

  addPoemLine = (words) => {
    let poem = [...this.state.poemLines];

    poem.push(words)

    this.setState({
      poemLines: poem
    });
  }

  getLineCount = () => {
    return this.state.poemLines.length + 1
  }

  revealPoem = () => {
    this.setState({
      endScreen: true
    });
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

      const viewAllContent = (

      <section>
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission 
          poemLine={this.state.poemLines.slice(-1)[0]}/>

        <PlayerSubmissionForm 
          addPoemLineCallback={this.addPoemLine}
          getLineCountCallback={this.getLineCount}
          fields={ FIELDS }
          />

        <FinalPoem 
          poem={false}
          revealFinalCallback={this.revealPoem}
          fields={ FIELDS } />
        
        </section>
        );

        const displayEndGame = (
          <section>
            <h2>Game</h2>

            <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

            <p>Please follow the following format for your poetry submission:</p>

            <p className="Game__format-example">
              { exampleFormat }
            </p>

            <FinalPoem 
              poem={this.state.poemLines}
              revealFinalCallback={this.revealPoem}/>
          </section>
        );

        return (
          <div className="Game">
            {this.state.endScreen ? displayEndGame : viewAllContent}
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
