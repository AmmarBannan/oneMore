import React from 'react'
import './body.css'
import './services.css'
import Slider from './slider'
import { useState } from 'react';


export default function Body({perfumesList,onSearch}) {
  const [isVisible, setIsVisible] = useState(true);
  let isOnSearch=onSearch==""?true:false;

  
  let searchResult=!isOnSearch&&perfumesList.length>0?
    <ul className='services-slider'>
    {perfumesList.map((item, index) => (
      <li className='service' key={index}>
        <h3>{item}</h3>
        <p>Description for {item}.</p>
        </li>
    ))}
  </ul>:<h3>NO result!</h3>
  return (
    <div className='body container'>
      {isOnSearch && (<Slider />)}
      
      <section class="services">
          {searchResult}
        </section>
      
    </div>
  )
}
