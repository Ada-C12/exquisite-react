import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.lastLine }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  lastLine: PropTypes.string,
};

export default RecentSubmission;
