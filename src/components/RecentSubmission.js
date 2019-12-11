import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const recentPoem = `The ${props.mostRecentPoem.adj1} ${props.mostRecentPoem.noun1} ${props.mostRecentPoem.adv} ${props.mostRecentPoem.verb} the ${props.mostRecentPoem.adj2} ${props.mostRecentPoem.noun2}`
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{recentPoem}</p>
    </div>
  );
}

export default RecentSubmission;
