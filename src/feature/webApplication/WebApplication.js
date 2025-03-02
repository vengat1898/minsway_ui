import React from 'react'
import weblap from "../images/web-lap.png"
import weblap2 from "../images/web-lap2.png"

const WebApplication = () => {
  return (
    <div className='web-application'>
      <h1>Web Application</h1>
      <p>
        We deliver a comprehensive set of Professional In-Demand custom software development services from dedicated<br />
        developers with vast industry-specific experience delivering high-end solutions with an agile approach.
      </p>

      <div className="projects-container">
        <div className="project-box">
          <div className="project-text">
            <h2>ACCSYS India</h2>
            <p>
              From innovating planning<br /> to precise analysis,<br /> we focus on client needs<br /> and satisfaction.
            </p>
            <button className="project-button">Project Details</button>
          </div>
          <img src={weblap} alt="Web lap" className="project-image" />
        </div>

        <div className="project-box1">
          <div className="project-text1">
            <h2>Ring Master</h2>
            <p>
            From innovating planning<br /> to precise analysis,<br /> we focus on client needs<br /> and satisfaction.
            </p>
            <button className="project-button1">Project Details</button>
          </div>
          <img src={weblap2} alt="Web lap 2" className="project-image1" />
        </div>
      </div>
    </div>
  )
}

export default WebApplication

