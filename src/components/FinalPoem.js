import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poemStanzas = props.poems.map((stanza, i) => {
    return (
      <p key={i}>
        The {`${ stanza.adjective1 }`} {`${ stanza.noun1 }`} {`${ stanza.adverb }`} {`${ stanza.verb }`} the {`${ stanza.adjective2 }`} {`${ stanza.noun1 }`}.
      </p>
    )
  });

  const finalPoemButton = 
    <div className="FinalPoem__reveal-btn-container">
      <input onClick={props.showPoemCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
    </div>;

  const finalPoemContent = props.poemSubmitted === true ? <p>{ poemStanzas }</p> : <p></p>;
  const conditionalButton = props.poemSubmitted === false ? <p>{ finalPoemButton }</p> : <p></p>
  
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        { finalPoemContent }
      </section>
      { conditionalButton }
    </div>
  );
}

export default FinalPoem;

