import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const lines = props.lines
  
  if (lines.length === 0) {
    return ( <div> </div> )
  }

  else {
    return (
      <div>
        <div className="RecentSubmission">
          <h3>The Most Recent Submission</h3>
          <p className="RecentSubmission__submission">{lines[lines.length -1]}</p>
        </div>
      </div>
    )
  }
}

export default RecentSubmission;
