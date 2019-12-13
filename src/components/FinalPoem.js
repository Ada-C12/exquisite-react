import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  let formattedPoem = props.poem.map((line, i) => {
    return <p key={i}> {line} </p>;
  })

  const onClickTogglePoem = () => {
    props.togglePoemCallback();
  }

  return (
    (props.showPoem ?
    (<div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {formattedPoem}
      </section>
    </div>)
    :
    (<div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onClickTogglePoem}/>
    </div>)
    )
  )
}

FinalPoem.propTypes = {
  poem: PropTypes.arrayOf(PropTypes.string),
  showPoem: PropTypes.func.isRequired,
  togglePoemCallback: PropTypes.func.isRequired,
}

export default FinalPoem;
