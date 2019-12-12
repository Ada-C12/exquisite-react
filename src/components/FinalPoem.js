import React from "react";
import "./FinalPoem.css";

const FinalPoem = props => {
  let finalPoem = "";

  if (props.showFinalPoem) {
    finalPoem = props.lines.map((line, i) => {
      return <p key={i}>{line}</p>;
    });
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>
      {finalPoem}
      <div className="FinalPoem__reveal-btn-container">
        <input
          type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onClick={props.showFinalPoemCallback}
        />
      </div>
    </div>
  );
};

export default FinalPoem;
