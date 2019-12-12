import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  if(props.finalPoem){
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        
        {/* This clever code borrowed from Emily Ball */}
        {
        props.submissions.map((submission) => {
            return <p>{submission}</p>
          })}
      </section>
    </div>
  );}
  else{
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          
        </section>
  
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.showPoemCallback}/>
        </div>
      </div>
    );
  }
}

export default FinalPoem;
