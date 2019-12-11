import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  
  const recentPoem = props.recentPoem.map((stanza, i) => {
    return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission" key={i}>
        The {`${ stanza.adjective1 }`} {`${ stanza.noun1 }`} {`${ stanza.adverb }`} {`${ stanza.verb }`} the {`${ stanza.adjective2 }`} {`${ stanza.noun1 }`}.
      </p>
    </div>
    )
  });
  
  const recentPoemContent = (recentPoem.length === 0 || props.poemSubmitted === true) ? <div></div> : <div>{ recentPoem }</div> ;

  return (
    <div>{ recentPoemContent }</div>
  );
};

RecentSubmission.propTypes = {
  recentPoem: PropTypes.array.isRequired,
  poemSubmitted: PropTypes.bool.isRequired,
};

export default RecentSubmission;
