import React from 'react'
import ourclients1 from "../images/ourclient-img2.png"
import ourclients2 from "../images/ourclient-img3.png"
import ourclients3 from "../images/ourclient-img4.png"
import ourclients4 from "../images/ourclient-img5.png"
import ourclients5 from "../images/ourclient-img6.png"

const Ourclients = () => {
  return (
    <div  className='outclient-container'>
        <h1>OUR CLIENTS</h1>
        <p> Our decade-long journey has been defined by the trust and satisfaction of our happy clients. It's the enduring <br/>
        relationships we've cultivated that truly speak to the quality and dedication of our software services.</p>
        <div className='ourclients-img'>
        <img src={ourclients1} alt="ourclients1" className="ourclients1" />
        <img src={ourclients2} alt="Social Media" className="ourclient2" />
        <img src={ourclients3} alt="Social Media" className="ourclient3" />
        <img src={ourclients4} alt="Social Media" className="ourclient4" />
        <img src={ourclients5} alt="Social Media" className="ourclient5" />
        </div>
      
    </div>
  )
}

export default Ourclients
