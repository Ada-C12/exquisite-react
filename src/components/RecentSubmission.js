import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  
  if (props.latestSubmission) {
    return (

      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{props.latestSubmission}</p>
      </div>
    );
  } else {
    return (
      <div />
    )
  }

  // return (

  //   <div className="RecentSubmission">
  //     <h3>The Most Recent Submission</h3>
  //     <p className="RecentSubmission__submission">{ props.latestSubmission  }</p>
  //   </div>
  // );
}

export default RecentSubmission;
