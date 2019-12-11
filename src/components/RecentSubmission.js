import React from 'react';
import './RecentSubmission.css';


// if poems.empty? hide section
// if !poems.empty? show the last item in poems

const RecentSubmission = (props) => {
  
  const recentPoem = props.recentPoem.map((stanza, i) => {
    return (
    <p key={i}>
      The {`${ stanza.adjective1 }`} {`${ stanza.noun1 }`} {`${ stanza.adverb }`} {`${ stanza.verb }`} the {`${ stanza.adjective2 }`} {`${ stanza.noun1 }`}.
    </p>
    )
  });
  
  
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{  recentPoem }</p>
    </div>
  );
}

export default RecentSubmission;
