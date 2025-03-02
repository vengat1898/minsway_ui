import React, { useState } from 'react';
import webimg1 from "../images/webImg1.png";
import webimg2 from "../images/webImg2.jpg";
import webimg3 from "../images/webImg3.jpg";
import webimg4 from "../images/webImg4.jpg";
import webimg6 from "../images/webImg6.jpg";

const ImgSlider = () => {
  const images = [webimg2, webimg3, webimg1, webimg4, webimg6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="imageslider">
      <div className="text-content">
        <h2>Capabilities & Solution</h2>
        <p>
          We deliver a comprehensive<br /> set of professional in<br />demand custom software<br />
          development services from<br /> dedicated developers with<br /> vast industry-specific<br />
          experience delivering high-end<br /> solutions with an agile<br /> approach.
        </p>
        <button className="img-read-more">Read More</button>
      </div>

      <div className="image-carousel">
        <div className="slider-container">
          <div className="slider-images">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slider-image ${index === currentIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="dot-container">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;



