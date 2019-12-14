import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const lastSubmission = `The ${props.submission.adjective} ${props.submission.noun} 
  ${props.submission.adverb} ${props.submission.verb} the ${props.submission.adjective2} 
  ${props.submission.noun2}.`;
  
  const showSubmission =
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ lastSubmission }</p>
    </div>;
      
  return ( 
    props.showSubm ? showSubmission : ("") 
  );
};

export default RecentSubmission;
