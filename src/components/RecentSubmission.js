import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

    // want to write '.prop' less 
  const lines = props.lines
  
  // if no lines are in the poem (if this is player 1) section does not render
  if (lines.length === 0) {
    return ( <div> </div> )
  }

  //only displays the last line (string) in the array
  else {
    return (
      <div>
        <div className="RecentSubmission">
          <h3>The Most Recent Submission</h3>
          <p className="RecentSubmission__submission">{lines[lines.length -1]}</p>
        </div>
      </div>
    )
  }
}

export default RecentSubmission;
