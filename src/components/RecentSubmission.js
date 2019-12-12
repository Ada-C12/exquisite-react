import React from 'react';
import PropTypes from 'prop-types';
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

RecentSubmission.propTypes = {
  recentSubmission: PropTypes.func,
  finalPoem: PropTypes.bool.isRequired,
};

export default RecentSubmission;
