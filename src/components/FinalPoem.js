import React from 'react';
import './FinalPoem.css';

// state, props, any callbacks, event handlers, or helper functions (with the exception of Game component). However, not every render function may need to look like that in the end result. In fact, it is expected that the render functions change in order to accommodate the requirements (namely the ones about conditional rendering).

class FinalPoem extends React.Component {
  render() {
    const fullPoem = this.props.fullPoem.map((line, i) => {
      return (
      <div>
        <p key={i}>The {line.adjective} {line.noun} {line.adverb} {line.verb} the {line.adjective2} {line.noun2}.
        </p>
      </div>
      )
    })
    
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <div>
            { fullPoem }
          </div>
        </section>

        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
        </div>
      </div>
    );
  }
}
export default FinalPoem;
