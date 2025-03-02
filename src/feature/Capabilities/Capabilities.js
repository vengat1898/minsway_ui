import React, { useState } from 'react';
import socialimg from "../images/socialmedia12.jpg";

function Capabilities() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCapabilities = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`capabilities-container ${isOpen ? "active" : ""}`}>
      <div className="capabilities-title" >
        Capabilities
      </div>
      {isOpen && (
        <>
          <div className="lines">
            {[...Array(7)].map((_, index) => (
              <div key={index} className={`line line-${index + 1}`}></div>
            ))}
          </div>
          <div className="text">
            <h2 className="capability-text">INNOVATION</h2>
            <h2 className="capability-text">SOLUTION FOR</h2>
            <h2 className="capability-text">DIGITAL SUCCESS</h2>
          </div>
        </>
      )}
      <button className="read-more">Read More</button>
      <img src={socialimg} alt="Social Media" className="right-image" />
    </div>
  );
}

export default Capabilities;
