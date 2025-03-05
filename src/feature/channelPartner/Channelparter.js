import React from 'react'
import channelparter1 from "../images/channelpartner1.png";
import channelparter2 from "../images/channelpartner2.png";
import channelparter from "../images/channelpartner.png";

const Channelparter = () => {
  return (
    <div className='Channelparter-container'>
        <h1>Our Channel Partner</h1>
        <div className='Channelparter-img'>
           <img src={channelparter1} alt="channelparter1" className="channelparter1" />
           <img src={channelparter2} alt="channelparter2" className="channelparter2" />
           <img src={channelparter} alt="channelparter" className="channelparter" />
        </div>
      
    </div>
  )
}
export default Channelparter
