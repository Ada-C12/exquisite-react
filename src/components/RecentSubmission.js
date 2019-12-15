import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  const { adjective, noun, adverb, verb, adjective2, noun2 } = props.submission;

  const lastSubmission = `The ${adjective} ${noun} ${adverb} ${verb}
   the ${adjective2} ${noun2}.`;
  
  const showSubmission =
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ lastSubmission }</p>
    </div>;
      
  return ( 
    props.showSubm ? showSubmission : ("") 
  );
};

RecentSubmission.propTypes = {
  showSubmission: PropTypes.bool.isRequired,  
  showPoem: PropTypes.bool.isRequired,
  submission: PropTypes.object.isRequired
}

export default RecentSubmission;
