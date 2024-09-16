import React from 'react'
import "./header.css"
import SearchBar from './searchBar/SearchBar.js';
import Logo from '../logo/Logo';
import DropdownMenu from './DropdownMenu.js';
import {PopUpfilter,setFilterListFun } from './popUpfilter.js';


export default function Header({filterQuery,written,filterOption,filter}) {

    const changeFilter = (cat, val) => {
        setFilterListFun(filter.get,filter.set, cat, val);
      };


  return (
    <header className='header'>
      
        <div className="logo">
            <a href="#"> <Logo/></a>
        </div>
        <div className="header-items">
            <div className='Search'>
                <div className="search-bar">
                    <SearchBar className='searchBar' filterQuery={filterQuery} value={written} placeholder="b"/>
                </div>
                <div className="filter">
                    <DropdownMenu filterOption={filterOption} changeFilter={changeFilter} filter={filter}/>
                </div>
            </div>
            <div className="contact-info">
                <a href="mailto:contact@example.com">Contact Us</a>
                <span>|</span>
                <a href="tel:+1234567890">+123 456 7890</a>
            </div>
        </div>

        < PopUpfilter slectedTerm={filter}/>
        


    </header>
    
  )
}
