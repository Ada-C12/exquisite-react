import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {

  const lastSubmission = `The ${props.submission.adjective} ${props.submission.noun} ${props.submission.adverb} ${props.submission.verb} the ${props.submission.adjective2} ${props.submission.noun2}.`;
    
    if (props.showSubm === true && props.showCompletePoem === false) {
      return (
        <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
          <p className="RecentSubmission__submission">{ lastSubmission }</p>
        </div>
      );
    } else {
      return ('')
    } 
}

// RecentSubmission.propTypes = {
//   submission: PropTypes.func
// };

export default RecentSubmission;
