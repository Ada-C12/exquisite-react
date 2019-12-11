import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const { adj1, noun1, adv, verb, adj2, noun2 } = props.mostRecentPoem;
  const recentPoem = `The ${adj1} ${noun1} ${adv} ${verb} the ${adj2} ${noun2} .`
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{recentPoem}</p>
    </div>
  );
}

export default RecentSubmission;
