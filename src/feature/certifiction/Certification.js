import React from 'react';
import certification1 from "../images/certify1.png";
import certification2 from "../images/ceritify2.png";
import certification3 from "../images/certify3.png";

const Certification = () => {
  return (
    <div className='certification'>
      <h1>Certification</h1>
      <p>We deliver a comprehensive set of<br/> professional In demand custom<br/> software development service<br/> from dedicated developer<br/>
      vast industry-specific experience<br/> delivering high-end solution with<br/> an agile approach<br/> 
      </p>
      
      <div className="image-row">
        <img src={certification1} alt="certification1" />
        <img src={certification2} alt="certification2" />
        <img src={certification3} alt="certification3" />
      </div>
    </div>
  );
}

export default Certification;

