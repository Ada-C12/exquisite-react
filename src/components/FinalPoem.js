import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({ lines }) => {
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {lines.map(line => <p>{line}</p>)}
      </section>
    </div>
  );
}

export default FinalPoem;
