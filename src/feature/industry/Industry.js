import React, { useState } from 'react';
import mobileImg from "../images/mobile1.png";

const industries = [
  "Vegetable B2B",
  "Food Delivery",
  "Service Provider",
  "Network",
  "E-Commerce",
  "OTT"
];

const Industry = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className='industry-body'>
      <div className='content-container'>
        <div className='industry-content'>
          <div className='industry-container'>
          <h1>Industries</h1>
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className={`industry-box ${selected === index ? 'selected' : ''}`} 
                onClick={() => setSelected(index)}
              >
                {industry}
              </div>
            ))}
          </div>
          <div className='description'>
            {selected !== null && (
              <>
                <h2>{industries[selected]}</h2>
                <p>
                  Vegetable website and mobile<br />
                  app development focuses on <br />
                  providing a seamless, convenient<br />
                  platform for customers to purchase<br />
                  fresh and organic vegetables directly<br />
                  from local farms or suppliers.
                </p>
              </>
            )}
          </div>
        </div>
        <img src={mobileImg} alt="Mobile Preview" className="mobile-img" />
      </div>
    </div>
  );
};

export default Industry;


