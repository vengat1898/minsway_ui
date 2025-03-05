import React from 'react'
import ourclientsays from "../images/ourclient-img1.png"

const Clientsays = () => {
  return (
    <div className='ourclientsays-container'>
        <img src={ourclientsays} alt="ourclientsays" className="ourclientsays" />
        <div>
            <h1 className='ourclientsays-heading'> What Our Client Says</h1>
            <p>Our clients appreciate our commitment to delivering exceptional solutions that drive their business success.<br/>Their 
            positive feedback motivates us to continually exceed expectations.</p>
        </div>
        <div>
            <h2> Accsy India</h2>
            <p2>
            Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
            industry. Lorem Ipsum has been the industry's standard dummy text<br/> 
            ever since the 1500s, when an unknown printer took a galley of type<br/> 
            and scrambled it to make a type specimen book. It has survived not<br/> 
            only five centuries, but also the leap into electronic typesetting,<br/> 
            remaining essentially unchanged
            </p2>
            <button class="arrow-button">&lt;</button>
            <button class="arrow-button">&lt;</button>
        </div>
      
    </div>
  )
}

export default Clientsays
