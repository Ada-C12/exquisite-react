import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const {adjective1, noun1, adverb, verb, adjective2, noun2} = props.recentLine

  const compiledLine = `The ${adjective1} ${noun1} ${adverb} ${verb} the ${adjective2} ${noun2}`

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{compiledLine}</p>
    </div>
  );
}

export default RecentSubmission;
