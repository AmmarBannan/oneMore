import React from 'react'
import "./header.css"
import SearchBar from './searchBar/SearchBar.js';
import Logo from '../logo/Logo';

export default function Header({category,written}) {

  return (
    <div className='header'>
      <div className='header_logo'>
          <Logo/>
      </div>
      <div className='header_main'>
        <div>
          <h4>Search Bar Example</h4>
          <SearchBar category={category} value={written}/>
        </div>
        <nav className='nav_header'>
          <ul className='nav_header_list'>
            <li>filter</li>
            <li>notifications</li>
          </ul>
        </nav>
        <ul class="contacts list hide">
          <li class="contacts__item"><a  class="contacts__item__link link" target="_parent" > <p>info@devstudion.com</p> </a></li>

        </ul>

     
      </div>
      
    </div>
    
  )
}
