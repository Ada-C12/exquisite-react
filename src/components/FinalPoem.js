import React from "react";
import "./FinalPoem.css";
import PropTypes from "prop-types";

const FinalPoem = props => {
  let contents = "";

  if (props.showFinalPoem) {
    contents = (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>
    );
  } else {
    contents = (
      <div className="FinalPoem__reveal-btn-container">
        <input
          type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onClick={props.showFinalPoemCallback}
        />
      </div>
    );
  }

  let finalPoem = "";
  if (props.showFinalPoem) {
    finalPoem = props.lines.map((line, i) => {
      return <p key={i}>{line}</p>;
    });
  }

  return (
    <div className="FinalPoem">
      {contents}
      {finalPoem}
    </div>
  );
};

FinalPoem.propTypes = {
  showFinalPoem: PropTypes.bool.isRequired,
  showFinalPoemCallback: PropTypes.func.isRequired,
  lines: PropTypes.array.isRequired
};

export default FinalPoem;
