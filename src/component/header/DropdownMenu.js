// src/DropdownMenu.js
import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({subject,setfilterListFun}) => {
  // State to track whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      
      {/* Conditionally render the dropdown items */}
      {isOpen && (
        <div className='dropdown-menu'>
          <ul className="dropdown_list brand">
            <h3>Brands</h3>
            {subject["br"].map((brand,index)=>(
              <li className="dropdown-item" key={index} onClick={() => setfilterListFun("brand",brand)}>{brand}</li>
            ))}
          </ul>
          <ul className="dropdown_list gender">
            <h3>Gender</h3>
            {subject["gender"].map((gender,index)=>(
              <li className="dropdown-item" key={index} onClick={() => setfilterListFun("gender",gender)}>{gender}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
