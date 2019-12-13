import React, { Component } from "react";
import "./Game.css";
import PlayerSubmissionForm from "./PlayerSubmissionForm";
import FinalPoem from "./FinalPoem";
import RecentSubmission from "./RecentSubmission";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNumber: 1,
      isFormSubmitted: false,
      userInputs: ["The", "the"],
      userSubmission: "",
      finalPoem: [],
      shouldShowFinalPoem: false
    };
  }

  handleRecentSubmission = userInputs => {
    console.log(userInputs);

    let { adj1, noun1, adv, verb, adj2, noun2 } = userInputs;
    let sentence = `The ${adj1} ${noun1} ${adv} ${verb} the ${adj2} ${noun2}.`;

    let finalPoem = this.state.finalPoem;
    finalPoem.push(sentence);
    // userInputs.forEach(data => console.log(data));

    this.setState({
      isFormSubmitted: true,
      playerNumber: this.state.playerNumber + 1,
      userSubmission: sentence,
      finalPoem: finalPoem
    });
  };

  showFinalPoem = () => {
    this.setState({
      shouldShowFinalPoem: true
    });
  };

  render() {
    const exampleFormat = FIELDS.map(field => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    const userSubmission = this.state.userSubmission;

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>
          Each player should take turns filling out and submitting the form
          below. Each turn should be done individually and <em>in secret!</em>{" "}
          Take inspiration from the revealed recent submission. When all players
          are finished, click the final button on the bottom to reveal the
          entire poem.
        </p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">{exampleFormat}</p>

        {this.state.isFormSubmitted && (
          <RecentSubmission submission={this.state.userSubmission} />
        )}

        <PlayerSubmissionForm
          playerNumber={this.state.playerNumber}
          handleRecentSubmission={this.handleRecentSubmission}
        />

        <FinalPoem
          shouldShowFinalPoem={this.state.shouldShowFinalPoem}
          showFinalPoem={this.showFinalPoem}
          finalPoem={this.state.finalPoem}
        />
      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: "adj1",
    placeholder: "adjective"
  },
  {
    key: "noun1",
    placeholder: "noun"
  },
  {
    key: "adv",
    placeholder: "adverb"
  },
  {
    key: "verb",
    placeholder: "verb"
  },
  "the",
  {
    key: "adj2",
    placeholder: "adjective"
  },
  {
    key: "noun2",
    placeholder: "noun"
  },
  "."
];

export default Game;
