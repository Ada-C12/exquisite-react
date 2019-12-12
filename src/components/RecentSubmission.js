import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({ submitted, lastSub }) => {
  if (submitted) return '';

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ lastSub }</p>
    </div>
  );
}

export default RecentSubmission;
