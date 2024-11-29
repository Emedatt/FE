// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarCheck, faCog } from '@fortawesome/free-solid-svg-icons';
import { BiMenu } from 'react-icons/bi';

function Menu() {
  return (
    <nav className="fixed top-0 left-0 bg-[#3B54FA] text-white flex justify-around py-4">
      <div className="flex flex-col items-center">
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center">
        <span>Appointments</span>
      </div>
      <div className="flex flex-col items-center">
        <span>schedule</span>
      </div>
      <div className="flex flex-col items-center">
        <span>doctors</span>
      </div>

      <div className="flex flex-col items-center">
        <span>Settings</span>
      </div>
    </nav>
  );
}

export default Menu;