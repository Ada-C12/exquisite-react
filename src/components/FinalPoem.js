import React from 'react';
import './FinalPoem.css';

// when reveal button is clicked, call props.showPoemCallback
// then add a conditional statement that if props.showPoemCallback
// is true, render the poem content

const FinalPoem = (props) => {

  const poemStanzas = props.poems.map((stanza, i) => {
    return (
    <p key={i}>
      The {`${ stanza.adjective1 }`} {`${ stanza.noun1 }`} {`${ stanza.adverb }`} {`${ stanza.verb }`} the {`${ stanza.adjective2 }`} {`${ stanza.noun1 }`}.
    </p>
    )
  });

  let poemContent = props.poemSubmitted === true ? <p>{ poemStanzas }</p> : <p></p>;
  
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {/* add ternary that checks if the values of props.poemSubmitted is true */}
        {/* if true, call the show poem function here */}
        {/* else do nothing */}
        { poemContent }
      </section>
      <div className="FinalPoem__reveal-btn-container">
        <input onClick={props.showPoemCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;

