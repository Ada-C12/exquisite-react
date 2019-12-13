import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  // want to write '.prop' less 
  const lines = props.lines

  // maps the lines into individual paragraphs
  let finalPoem = lines.map((line, i) => {
    return (
      <p key= {i}>{line}</p>
    )
  })

  // if the poem is in play, shows the button that will be used to stop the poem. Note, if there is text in the fields this does NOT submit it and end the poem, that line will be lost. 
  if (props.inPlay === true) {
    return (
      <div className="FinalPoem">
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ () => {props.onFinishPoemCallback()}}/>
        </div>
      </div>
    );
  } 
  
  // if the poem is not in play, shows the final poem
  else {
    return (
      <div>
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
      {finalPoem}
      </div>
    )
  }

}
FinalPoem.propTypes = {
  onFinishPoemCallback: PropTypes.func.isRequired,
}
export default FinalPoem;