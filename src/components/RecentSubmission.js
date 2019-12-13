import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

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
}

RecentSubmission.propTypes = {
  latestSubmission: PropTypes.string
}

export default RecentSubmission;
