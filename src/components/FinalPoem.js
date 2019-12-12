import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const { onFinalPoemCallback, finalPoem, finalDisplay } = props;
  const finalTotalPoem = finalPoem.map((line,i) => {
    return(
      <p key={i}>
        {line}
      </p>
    )
  })

  if (finalDisplay === true) {
    return(
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {finalTotalPoem}
        </section>
      </div>
    )
  } else {
    return(
      <div className="FinalPoem">
        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn"
            onClick={onFinalPoemCallback} 
          />
        </div>
      </div>
    )
  };
};

export default FinalPoem;
