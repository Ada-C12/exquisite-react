import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  
  // const lines = props.lines.map((line) => {
  //   return (
  //     <PlayerSubmissionForm 
  //       handleChangeCallback={props.handleChange}
  //       handleClickCallback={props.handleClick}
  //       {...line}
  //     />
  //   )
  // });

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  lines: PropTypes.array,
  handleChange: PropTypes.func,
  onSelectPet: PropTypes.func
}

export default RecentSubmission;


