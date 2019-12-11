import React from 'react';
import PropTypes from "prop-types";
import './FinalPoem.css';

const FinalPoem = (props) => {
  const lines = props.lines

  const lineCollection = lines.map((line, i) => {  
    return (
      <p key={i}>
        {line}
      </p>
    );
  });

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        { lineCollection }
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  lines: PropTypes.array,
};

export default FinalPoem;
