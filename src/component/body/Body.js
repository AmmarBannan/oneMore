import React from 'react'
import './body.css'

export default function Body({perfumesList}) {
  

    
  return (
    <div className='body container'>
      <div>
        <ul className='perfume_list'>
          {perfumesList.map((item, index) => (
            <li className='perfume_list_item' key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}
