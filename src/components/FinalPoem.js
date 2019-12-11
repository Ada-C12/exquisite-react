import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
        {/* this will reveal the final poem somehow */}
        {/* the poem will be passed thru as a prop i think */}
      </div>
    </div>
  );
}

export default FinalPoem;
