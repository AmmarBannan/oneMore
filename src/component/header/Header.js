import React from 'react'
import "./header.css"
import SearchBar from './searchBar/SearchBar.js';
import Logo from '../logo/Logo';

export default function Header({category,written}) {

  return (
    <div className='header'>
      
      

        <div class="logo">
            <a href="#"> <Logo/></a>
        </div>
        <div class="header-items">
            <div class="search-bar">
                <SearchBar className='searchBar' category={category} value={written} placeholder="b"/>
            </div>
            <div class="filter">
                <select>
                    <option value="">Filter</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
            </div>
            <div class="contact-info">
                <a href="mailto:contact@example.com">Contact Us</a>
                <span>|</span>
                <a href="tel:+1234567890">+123 456 7890</a>
            </div>
        </div>


    </div>
    
  )
}
