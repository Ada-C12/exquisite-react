import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
      {props.final ===false ? null :
      <div>
        <h3>Final Poem</h3>
        <ul className="list"> { props.finalPoemCallback().map((line, i) => <li key={i}> {line} </li>)  }</ul>
      </div>
      }
          </section>
      {props.final ? null :
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={() => { props.onClickCallback() }} />
      </div>
      }
    </div>
  );
}

export default FinalPoem;
