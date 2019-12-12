import React from 'react';
import './RecentSubmission.css';


function showLine(props) {
  if (props.recentSubmissionWordsArray) {
    return (
      <div>
      The&nbsp;
        {props.recentSubmissionWordsArray[0]}&nbsp;
        {props.recentSubmissionWordsArray[1]}&nbsp;
        {props.recentSubmissionWordsArray[2]}&nbsp;
        {props.recentSubmissionWordsArray[3]} the&nbsp;
        {props.recentSubmissionWordsArray[4]}&nbsp;
        {props.recentSubmissionWordsArray[5]}
        .
        {/*magical spaces: https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react */}
        </div> 
    );
  } else {
    return null;
  }
}

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        {showLine(props)}
      
      
      </p>
    </div>
  );
}

export default RecentSubmission;
