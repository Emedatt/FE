import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHome, faCalendarCheck, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // For routing
import userImage from '../../assets/alpha.jpeg';
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

function Header() {
  // State to manage the visibility of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(prevState => !prevState);


  return (
    <header className="relative flex justify-between items-center p-8 pt-4">
      {/* Burger Menu Icon - visible only on small screens */}
      {menuOpen ?
      <CgClose
      className="text-[2rem] md:hidden cursor-pointer" 
      onClick={toggleMenu} // Toggle menu visibility on click
    />
          :
          <BiMenu 
          className="text-[2rem] md:hidden cursor-pointer" 
          onClick={toggleMenu} // Toggle menu visibility on click
        />
        }
      <div>
        <h1 className="text-4xl font-inter font-bold">Hi John,</h1>
        <p className="text-gray-600 mt-2 font-inter font-semibold">Your health, our priority!</p>
      </div>
      {/* Menu on smaller screens - hidden or shown based on state */}
      <div
        className={`flex flex-col md:flex-row gap-5 absolute md:static top-[6rem] rounded h-[100vh] md:h-auto p-5 left-0 bg-slate-50 md:bg-inherit transition-transform duration-300 ease-in-out ${
          menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } md:transform-none`}>
         <Link to="/" className="flex items-center gap-2 hover:text-blue-500 transition-all duration-200">
          <FontAwesomeIcon icon={faHome} size="2x" className="lg:hidden"/>
          <span>Home</span>
        </Link>
        <Link to="/appointments" className="flex items-center gap-2 hover:text-blue-500 transition-all duration-200">
          <FontAwesomeIcon icon={faCalendarCheck} size="2x" className="lg:hidden"/>
          <span>Appointments</span>
        </Link>
        <Link to="/schedule" className="flex items-center gap-2 hover:text-blue-500 transition-all duration-200">
          <FontAwesomeIcon icon={faCalendarCheck} size="2x" className="lg:hidden"/>
          <span>Schedule</span>
        </Link>
        <Link to="/doctors" className="flex items-center gap-2 hover:text-blue-500 transition-all duration-200">
          <FontAwesomeIcon icon={faCalendarCheck} size="2x" className="lg:hidden"/>
          <span>Doctors</span>
        </Link>
        <Link to="/settings" className="flex items-center gap-2 hover:text-blue-500 transition-all duration-200">
          <FontAwesomeIcon icon={faCog} size="2x" className="lg:hidden"/>
          <span>Settings</span>
        </Link>
      </div>

      {/* Bell and User Image Section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="text-black-300 text-2xl" />
          <span className="absolute -top-2 -right-2 bg-black-300 text-white text-xs rounded-full px-1">1</span>
        </div>
        <img src={userImage} alt="User" className="w-10 h-10 rounded-full object-cover ml-4" />
      </div>
    </header>
  );
}

export default Header;
