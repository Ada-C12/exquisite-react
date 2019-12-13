import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.recentLine }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  recentLine: PropTypes.string.isRequired,
}

export default RecentSubmission;
