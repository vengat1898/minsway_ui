import React, { useState } from 'react';
import workflow from "../images/workflow1.png";

const WorkFlow = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className='work-flow'>
      <h1>Our Work Flow</h1>
      <div className='workflow-container'>
        {['01 Planning', '02 Analysis', '03 Develop', '04 Testing', '05 Implement', '06 Maintenance'].map((item, index) => (
          <div 
            key={index} 
            className='workflow-step' 
            onClick={() => index === 0 && setShowText(!showText)}
          >
            <span>{item}</span>
            {index === 0 && showText && (
              <p>From innovative planning to precise analysis,<br/>we focus on client needs and satisfaction.</p>
            )}
          </div>
        ))}
      </div>
      <div className="workflow-image-container">
        <img src={workflow} alt="Workflow" className="workflow-image" />
      </div>
    </div>
  );
};

export default WorkFlow;

