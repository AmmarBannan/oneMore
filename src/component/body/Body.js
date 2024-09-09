import React from 'react'
import './body.css'
import './services.css'
import Slider from './slider'
import { useState } from 'react';


export default function Body({perfumesList,onSearch,searchTermList}) {
  const [isVisible, setIsVisible] = useState(true);
  let isOnSearch=onSearch==""?true:false;

  
  let searchResult=!isOnSearch&&perfumesList.length==0?<h3>NO result!</h3>://
    <ul className='services-slider'>
    {perfumesList.map((item, index) => (
      <li className='service' key={index}>
        <h3>{item}</h3>
        <p>Description for {item}.</p>
        </li>
    ))}
  </ul>
  return (
    <div className='body container'>
      <div className='filterList'>
      {Object.keys(searchTermList).map((searchKeys,index)=>(
        <div className='categoryList'>
        <h3>{searchKeys}</h3>
        <ul>
          {searchTermList[searchKeys].map((term,Index)=>(
            <li className='filterList_item' key={Index}> {term}</li>
          ))}
          
        </ul>
        </div>
      ))}
        
      </div>

      {isOnSearch && (<Slider />)}
      
      <section class="services">
          {searchResult}
        </section>
      
    </div>
  )
}
