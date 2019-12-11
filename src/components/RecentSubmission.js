import React from "react";
import "./RecentSubmission.css";

const RecentSubmission = props => {
  let line = "";

  Object.values(props.recentSub).forEach(value => {
    line = line + value;
  });
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{line}</p>
    </div>
  );
};

export default RecentSubmission;
