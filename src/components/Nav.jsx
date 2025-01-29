import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegEnvelope } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../images/logo.svg';
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [showServices, setShowServices] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
    setShowCancel(!showCancel);
  }
  function displayServices() {
    setShowServices(!showServices);
  }
  return (
    <>
      <nav className="hidden xl:flex xl:w-screen px-[106px] xl:items-center xl:h-[43px] lg:gap-[47px]">
        <div className="flex gap-[5px] items-center h-full">
          <FaRegEnvelope style={{ fontSize: "14px", color: "#969696" }} />
          <a className="text-[#969696]" href="mailto:contact@e-medatt.com">
            contact@e-medatt.com
          </a>
        </div>
        <div className="flex gap-[5px] items-center h-full">
          <CiPhone style={{ fontSize: "14px", color: "#969696" }} />
          <a className="text-[#969696]" href="tel:+14148500417">
            &#40;414&#41; 850 - 0417
          </a>
        </div>
      </nav>
      <nav className="w-screen h-[88px] px-[16px] xl:px-[106px] bg-[#0D192F] flex items-center justify-between">
        <Link to="/">
          <img className="w-[138px] h-[46px]" src={logo} alt="logo" />
        </Link>
       
        <GiHamburgerMenu
          className="xl:hidden"
          onClick={handleClick}
          style={{ color: "white", fontSize: "30px" }}
        />
        {showMenu && (
          <div className="absolute top-0 right-0 w-[90%] h-screen py-[30px] bg-[#0D192F] flex flex-col">
            <div className="*:text-[20px] *:text-[#FFFFFF] flex flex-col items-center gap-y-[48px]">
              {showCancel && (
                <IoCloseSharp
                  onClick={handleClick}
                  style={{ color: "white", fontSize: "30px" }}
                />
              )}
              <Link onClick={handleClick} to="/">
                Home
              </Link>
              <Link onClick={handleClick} to="/about">
                About
              </Link>
              <Link
                className="flex gap-x-[10px] items-center"
                onClick={displayServices}
                to="/services"
              >
                Services{" "}
                <IoIosArrowDown style={{ color: "white", fontSize: "20px" }} />
              </Link>
              {showServices && (
                <div
                  className="bg-white w-full py-[50px] px-[10px] *:text-[#323232] flex flex-col items-center gap-y-[20px] *:rounded-[12px]
                  *:w-full *:active:bg-[#D9E5FB] *:hover:bg-[#D9E5FB] *:h-auto *:text-center
                   *:text-[20px] transition-all linear duration-300 *:py-[20px]
                "
                >
                  <Link to="/telehealthconsultations" onClick={handleClick}>
                    Telehealth Consultations
                  </Link>
                  <Link to="/specialistcare" onClick={handleClick}>
                    Specialist Care
                  </Link>
                  <Link to="/mediarecordsmanagement" onClick={handleClick}>
                    Media Records Management
                  </Link>
                  <Link to="/medicaltestsanddiagnostics" onClick={handleClick}>
                    Medication Tests &amp; Diagnostics
                  </Link>
                  <Link to="/wellnessprograms" onClick={handleClick}>
                    Wellness Programs
                  </Link>
                  <Link to="/appointmentscheduling" onClick={handleClick}>
                    Appointment Scheduling
                  </Link>
                </div>
              )}
              <Link onClick={handleClick} to="/pricing">
                Pricing
              </Link>
            </div>
            <div className="w-full mt-[48px] flex flex-col gap-y-[20px]">
              <div className="w-full flex justify-center items-center h-[23px] gap-x-[5px]">
                <FaRegEnvelope style={{ fontSize: "20px", color: "#FFFFFF" }} />
                <a
                  className="text-[#FFFFFF]"
                  href="mailto:contact@e-medatt.com"
                >
                  contact@e-medatt.com
                </a>
              </div>
              <div className="w-full flex gap-[5px] justify-center h-[23px] items-center">
                <CiPhone style={{ fontSize: "20px", color: "#FFFFFF" }} />
                <a className="text-[#FFFFFF]" href="tel:+14148500417">
                  &#40;414&#41; 850 - 0417
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center mt-[48px] gap-y-[48px]">
              <Link
                to="/login"
                onClick={handleClick}
                className="text-[#FFFFFF] text-[20px]"
              >
                Login
              </Link>
              <Link to="/signup" onClick={handleClick}>
                <button className="h-[53px] w-[240px] text-[20px] bg-[#417BEB] text-white rounded-[16px]">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav