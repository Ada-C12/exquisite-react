import React from 'react';
import './FinalPoem.css';

// state, props, any callbacks, event handlers, or helper functions (with the exception of Game component). However, not every render function may need to look like that in the end result. In fact, it is expected that the render functions change in order to accommodate the requirements (namely the ones about conditional rendering).

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
