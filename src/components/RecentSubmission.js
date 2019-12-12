import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({recentLine}) => {

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{recentLine}</p>
    </div>
  );
}

export default RecentSubmission;
