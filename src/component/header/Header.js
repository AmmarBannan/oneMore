import React from 'react'
import "./header.css"

import Logo from '../logo/Logo';

export default function Header() {
  return (
    <div className='header'>
      <div className='header_logo'>
          <Logo/>
      </div>
      <div className='header_main'>
        <nav></nav>
      </div>
      
    </div>
    
  )
}
