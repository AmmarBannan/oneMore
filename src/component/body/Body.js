import React from 'react'
import './body.css'
import './services.css'
import Slider from './slider'
import { useState,useEffect } from 'react';
import './DocumentaryBox.css'; 


export default function Body({perfumesList,onSearch,searchTermList}) {
  let isOnSearch=onSearch==""?true:false;

  const [hover, setHover] = useState(false);  // To track hover state
  const [showBox, setShowBox] = useState(false);  // To manage delay

  const handleMouseEnter = () => {
    setHover(true);
    setTimeout(() => {
      setShowBox(true);
    }, 500); // 0.5 second delay
  };

  // Handle mouse leave, hide the box immediately
  const handleMouseLeave = () => {
    setHover(false);
    setShowBox(false);
  };
  
  let searchResult=!isOnSearch&&perfumesList.length==0?<h3>NO result!</h3>://
    <ul className='services-slider'>
    {perfumesList.map((item, index) => (
      <li className='service' 
      key={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <h3>{item}</h3>
        <p>Description for {item}.</p>
        {showBox && hover && <div className="box">I'm a documentary box!</div>}
        </li>
    ))}
  </ul>
    const handlePopupClick = () => {
       // Set back to null to close popup
    };

  return (
    <main className='body container'>
      
      {isOnSearch && (<Slider />)}
      
      <section className="services">
          {searchResult}
        </section>
      
    </main>
  )
}
