// src/DropdownMenu.js
import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({subject}) => {
  // State to track whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log("ds",subject["br"])
  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      
      {/* Conditionally render the dropdown items */}
      {isOpen && (

        <ul className="dropdown-menu">
          <h3>Brands</h3>
          {subject["br"].map((company,index)=>(
            <li className="dropdown-item" key={index}>{company}</li>
          ))}
          
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
