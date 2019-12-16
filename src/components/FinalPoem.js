import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const finishedPoem = props.poem.map((line) => {
  return (
  <p> {line}</p>
  )
  })

  if(props.poemStatus){
    return( 
      <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      
      {finishedPoem}
      
      </section>
    </div>

    )
  }else{
    return(

    <div className="FinalPoem__reveal-btn-container">

      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn FinalPoem__reveal-btn:hover" onClick={() => { props.showPoemCallback()} }/>
    </div>
    )}
  
  
// console.log(props.poem)

//   return (
//     <div className="FinalPoem">
//       <section className="FinalPoem__poem">
//         <h3>Final Poem</h3>
      
//       {finishedPoem}
      
//       </section>

//       <div className="FinalPoem__reveal-btn-container">

//         <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn FinalPoem__reveal-btn:hover" />
//       </div>
//     </div>
//   );
}

export default FinalPoem;
