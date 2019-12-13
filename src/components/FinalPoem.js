import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  let formattedPoem = props.poem.map(line => {
    return <p>{line}</p>;
  })
  // if (props.showPoem === false) {
  //   formattedPoem = []
  // }

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

export default FinalPoem;
