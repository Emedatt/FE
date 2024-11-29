import React from 'react';
import Logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <section className='w-full h-auto bg-[#0D192F] pt-[10rem] px-9 pb-3'>

      <div className='flex justify-between mb-5'>
          <div className='flex flex-col justify-center items-center w-[36.9375rem] gap-[1rem]'>
            <div className='flex items-center bg-[#FCFCFD]  w-[8.8rem] h-[2.875rem] px-[1rem] py-[1rem] gap-[0.2rem] rounded-[5.625rem]'>
              <img className='w-[26.92px] h-[30.12px]' src={Logo} alt="logo" />
              <h1 className='font-[Inter] font-bold text-[14px] leading-8 text-[#3B54FA]'>E-MEDATT</h1>
            </div>
            <p className="font-inter text-[0.75rem] font-medium leading-[0.9rem] text-center md:text-left text-[#fff]">
              Providing accessible, affordable, and quality telehealth services. Connecting you with certified healthcare professionals for your medical needs.
            </p>
            <div className="flex items-center w-[155px] h-[19px] gap-[18px]">
                <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                  <FaFacebook style={{ fontSize: '8px', color: '#4267B2' }} />
                </a>
                <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                  <FaTwitter style={{ fontSize: '8px', color: '#1DA1F2' }} />
                </a>
                <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                  <FaInstagram style={{ fontSize: '8px', color: '#C13584' }} />
                </a>
                <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ fontSize: '8px', color: '#0077B5' }} />
                </a>
                <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://www.youtube.com/channel/example" target="_blank" rel="noopener noreferrer">
                  <FaYoutube style={{ fontSize: '8px', color: '#FF0000' }} />
                </a>
            </div>
          </div>

          <div className='hidden md:block'> 
            <p className="font-inter m-2 text-[#fff] text-[1.125rem] font-semibold leading-[1.63125rem] text-left">
             Subscribe to our newslater
            </p>
            <div className="w-[27.6875rem] h-[3.75rem] pl-[18px] py-[8px] rounded-[12px] bg-white shadow-[0px_1px_4px_0px_#19213D14] text-[#969696] text-[0.875rem] font-normal leading-[1.26875rem] placeholder-[#969696]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className='w-[60%]'
                />
                <button
                  className="w-[6.5625rem] h-[2.75rem] px-[18px] py-[14px] rounded-[16px] bg-[#417BEB] shadow-[0px_1px_2px_0px_#0000000D] text-white font-semibold text-[0.875rem]"
                >
                  Subscribe
                </button>
            </div>
          </div>
      </div>

  <hr className="flex-1 border-gray-300" />      
   
    <div className='max-w-6xl mx-auto grid grid-cols-2 md:flex md:flex-row justify-between items-start gap-8 md:gap-16 px-4 pt-5'>
      <div className='flex flex-col items-start'>
        <h3 className='font-[Inter] font-bold text-xl leading-7 text-[#ffffff] mb-4'>About us</h3>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#"></a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Mission</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Vision</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Our Values</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Why Choose Us?</a>
      </div>
  
      <div className='flex flex-col items-start'>
        <h3 className='font-[Inter] font-bold text-xl leading-7 text-[#ffffff] mb-4'>Services</h3>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Telehealth Consultation</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Speccialist Care</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Medical Records Management</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Wellness Programs</a>
      </div>

      <div className='flex flex-col items-start'>
        <h3 className='font-[Inter] font-bold text-xl leading-7 text-[#ffffff] mb-4'>Pricing</h3>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Basic Plan</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Pro Plan</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Premium Plan</a>
      </div>
  
      <div className='flex flex-col items-start'>
        <h3 className='font-[Inter] font-bold text-xl leading-7 text-[#ffffff] mb-4'>Contact Us</h3>
        <div className="flex justify-center items-center gap-[1rem]">
          <MdEmail className="text-[#0D192F] bg-[#fff] rounded text-2xl" />
          <div>
            <p className="text-[#fff]">Email:</p>
            <p className="text-[#fff]">contact@e-medatt.com</p>
          </div>
         </div>
        <div className="flex justify-center items-center gap-[1rem]">
          <MdPhone className="text-[#0D192F] bg-[#fff] rounded text-2xl" />
          <div>
            <p className="text-[#fff]">Phone:</p>
            <p className="text-[#fff]">(414) 850 - 0417</p>
          </div>
        </div>
      </div>      
  
    </div>

   <div className='block md:hidden'> 
            <p className="font-inter m-2 text-[#fff] text-[1.125rem] font-semibold leading-[1.63125rem] text-left">
             Subscribe to our newslater
            </p>
            <div className="w-[27.6875rem] h-[3.75rem] pl-[18px] py-[8px] rounded-[12px] bg-white shadow-[0px_1px_4px_0px_#19213D14] text-[#969696] text-[0.875rem] font-normal leading-[1.26875rem] placeholder-[#969696]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className='w-[60%]'
                />
                <button
                  className="w-[6.5625rem] h-[2.75rem] px-[18px] py-[14px] rounded-[16px] bg-[#417BEB] shadow-[0px_1px_2px_0px_#0000000D] text-white font-semibold text-[0.875rem]"
                >
                  Subscribe
                </button>
            </div>
    </div>
  
    <div className='w-[full] flex flex-col justify-center items-center gap-2 mt-8'>
      <hr className="w-[80%] border-white/50" />
      <p className="text-center font-inter font-normal text-white/50 text-[0.875rem] leading-[1.269rem] decoration-skip-ink">
          Copyright © 2025 E-Medatt | All Rights Reserved <span className='hidden md:block'>| Terms and Conditions | Privacy Policy</span>
      </p>
    </div>
  </section>
  
  )
}

export default Footer;