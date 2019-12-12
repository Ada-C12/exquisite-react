import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const recentLine = props.allLines.map((line, i) => {
    return(
      Object.values(line)
    )
  })
  
  if (recentLine.length < 1) {
    return '';
  } else {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ recentLine.slice(-1) }</p>
    </div>
  )};
}

export default RecentSubmission;
