import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if (props.recentSubmission === '') {
    return (
      <div>
        
      </div>
    );
  } else {

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.recentSubmission }</p>
    </div>
  )
}

}

export default RecentSubmission;
