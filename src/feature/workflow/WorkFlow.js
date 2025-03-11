import React, { useState } from 'react';
import workflow from "../images/workflow2.png";

const WorkFlow = () => {
  const [showText, setShowText] = useState(null);

  const workflowSteps = [
    { title: '01 Planning', text: 'From innovative planning to precise analysis, we focus on client needs and satisfaction.' },
    { title: '02 Analysis', text: 'We gather data, analyze the requirements and strategize for effective solutions.' },
    { title: '03 Develop', text: 'Our developers create high-quality solutions tailored to client specifications.' },
    { title: '04 Testing', text: 'We rigorously test the solution to ensure it meets all quality standards.' },
    { title: '05 Implement', text: 'The solution is deployed efficiently with minimal disruption to ongoing work.' },
    { title: '06 Maintenance', text: 'Continuous support and maintenance are provided to keep systems running smoothly.' },
  ];

  return (
    <div className='work-flow'>
      <h1>Our Work Flow</h1>
      <div className='workflow-container'>
        {workflowSteps.map((step, index) => (
          <div 
            key={index} 
            className='workflow-step' 
            onClick={() => setShowText(index === showText ? null : index)} // Toggle the text visibility for each step
          >
            <span>{step.title}</span>
            {showText === index && (
              <p>{step.text}</p>
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


