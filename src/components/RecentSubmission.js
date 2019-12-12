import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({recentLine}) => {
  // const {adjective1, noun1, adverb, verb, adjective2, noun2} = recentLine

  // const compiledLine = `The ${adjective1} ${noun1} ${adverb} ${verb} the ${adjective2} ${noun2}`

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{recentLine}</p>
    </div>
  );
}

export default RecentSubmission;
