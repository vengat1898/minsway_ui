import readyapp from "../images/appreadyimg.png";
import React, { useState, useEffect } from 'react';

// Higher-Order Component to check screen size
const withScreenSize = (WrappedComponent) => {
  return function WithScreenSize(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return <WrappedComponent {...props} isMobile={isMobile} />;
  };
};

// Readyapp component
const Readyapp = ({ isMobile }) => {
  return (
    <div className={`READY-APP-container ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className='readyapp-header'>
        <h1>READY APP</h1>
        <h3>READY APP FOR BUSINESS</h3>
      </div>
    
      <div className='img-box'>
        {/* Image boxes for mobile/desktop */}
        <div className={`READY-APP-img1 ${isMobile ? 'mobile' : 'desktop'}`}>
          <img src={readyapp} alt="readyapp1" className="readyapp1" />
          <div className='readyapp1-h'>
            <span className='grocery-text'>
              grocery app <br />requesting for a quote
            </span>
            <button className='attach-btn'>&lt;</button>
          </div>
        </div>

        <div className={`READY-APP-img23 ${isMobile ? 'mobile' : 'desktop'}`}>
          <div className='readyapp-2'>
            <img src={readyapp} alt="readyapp2" className="readyapp2" />
            <div className='readyapp2-h'>
              <span className='grocery-text2'>
                grocery app <br />requesting for a quote
              </span>
              <button className='attach-btn2'>&lt;</button>
            </div>
          </div>

          <div className='readyapp-3'>
            <img src={readyapp} alt="readyapp3" className="readyapp3" />
            <div className='readyapp3-h'>
              <span className='grocery-text3'>
                grocery app <br />requesting for a quote
              </span>
              <button className='attach-btn3'>&lt;</button>
            </div>
          </div>
        </div>

        <div className={`READY-APP-img4 ${isMobile ? 'mobile' : 'desktop'}`}>
          <img src={readyapp} alt="readyapp4" className="readyapp4" />
          <div className='readyapp4-h'>
            <span className='grocery-text4'>
              grocery app <br />requesting for a quote
            </span>
            <button className='attach-btn4'>&lt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withScreenSize(Readyapp);




