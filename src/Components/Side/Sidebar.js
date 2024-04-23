import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;