import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if(props.recentSubmission && !props.finalPoem) {
    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{props.recentSubmission}</p>
      </div>
    );
  } else {
    return ('')
  }
}

export default RecentSubmission;
