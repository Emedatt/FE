import React from 'react'
import Logo from '../images/Logo.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import youtube from '../images/youtube.svg';
import { Link } from 'react-router-dom';
import message from '../images/message.svg';
import phone from '../images/phone.svg';
export const Footer = () => {
  return (
    <div className="absolute bottom-[-1280px] z-[-20] w-full bg-[#0D192F] *:text-white px-[28px] py-[17px] xl:px-[104px]">
      <div className="mt-[78px] w-full flex flex-col items-center gap-y-[16px] xl:mt-[236px] xl:items-start xl:relative xl:mb-[30px]">
        <img src={Logo} alt="logo" />
        <p className="text-[10px] text-center max-w-[400px] xl:text-left">
          {" "}
          Providing accessible, affordable, and quality telehealth services.
          Connecting you with certified healthcare professionals for your
          medical needs.
        </p>
        <div className="flex gap-x-[8px] mb-[16px]">
          <img src={facebook} alt="social-media" />
          <img src={twitter} alt="social-media" />
          <img src={instagram} alt="social-media" />
          <img src={linkedin} alt="social-media" />
          <img src={youtube} alt="social-media" />
        </div>
        <Search className="max-xl:hidden xl:self-end xl:absolute xl:top-0 xl:w-[400px]" />
      </div>
      <div className="grid grid-cols-12 grid-rows-12 *:text-white">
        <div className="col-span-6 row-span-8 xl:col-span-3 xl:row-span-12">
          <h5 className="font-bold text-[14px] mb-[14px]">About Us</h5>
          <div className="flex flex-col *:text-[12px] gap-y-[12px]">
            <Link to="/about">Mission</Link>
            <Link to="/about">Vision</Link>
            <Link to="/about">Our Values</Link>
            <Link to="/about">Why Choose Us?</Link>
          </div>
        </div>
        <div className="col-span-6 row-span-8 xl:col-span-3 xl:row-span-12">
          <h5 className="font-bold text-[14px] mb-[14px]">Services</h5>
          <div className="flex flex-col *:text-[12px] gap-y-[12px]">
            <Link to="/services">Telehealth Consultations</Link>
            <Link to="/services">Specialist Care</Link>
            <Link to="/services">Medical Records Management</Link>
            <Link to="/services">Wellness Programs</Link>
          </div>
        </div>
        <div className="col-span-6 row-span-4 xl:col-span-3 xl:row-span-12">
          <h5 className="font-bold text-[14px] mb-[14px]">Pricing</h5>
          <div className="flex flex-col *:text-[12px] gap-y-[12px]">
            <Link to="/services">Basic Plan</Link>
            <Link to="/services">Pro Plan</Link>
            <Link to="/services">Premium Plan</Link>
          </div>
        </div>
        <div className="col-span-6 row-span-4 xl:col-span-3 xl:row-span-12">
          <h5 className="font-bold text-[14px] mb-[14px]">Contact us</h5>
          <div className="flex gap-x-[8px] mb-[12px]">
            <img src={message} alt="message" />
            <div className="flex flex-col gap-y-[8px]">
              <p className="text-[12px]">Email:</p>
              <a
                className="text-[8px] xl:text-[10px]"
                href="mailto:contact@e-medatt.com"
              >
                contact@e-medatt.com
              </a>
            </div>
          </div>
          <div className="flex gap-x-[8px]">
            <img src={phone} alt="phone" />
            <div className="flex flex-col gap-y-[8px]">
              <p className="text-[12px]">Email:</p>
              <a
                className="text-[8px] xl:text-[10px]"
                href="tel:tel:+14146875892"
              >
                &#40;414&#41; 687 - 5892
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[24px]">
        <Search className="xl:hidden" />
      </div>
      <hr className="max-xl:hidden xl:text-white xl:w-[70%] xl:mx-auto"/>
      <p
        className="text-[10px] text-[rgba(255,255,255,0.2)] my-[40px] text-center
      "
      >
        Copyright &copy; 2024 E-Medatt | All Rights Reserved{" "}
        <span className="max-xl:hidden"> | Terms and Conditions | Privacy Policy</span>
      </p>
    </div>
  );
}

const Search = ({className}) => {
  return (
    <form className={className}>
      <h4 className="text-white text-[14px] font-semibold mb-[20px]">
        Subscribe to our newsletter
      </h4>
      <label className="relative">
        <input
          className="caret-[#323232] text-[#323232] py-[20px] px-[18px] bg-white w-full rounded-[12px]
          placeholder:text-[12px] xl:placeholder:text-[16px] text-[12px]
          "
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
        <button
          className="text-white absolute right-[10px] top-[-14px] font-bold bg-[#417BEB] rounded-[16px] p-[12px] 
             hover:ring-[2px] hover:ring-offset-[2px] hover:ring-[#417BEB] active:ring-[2px] active:ring-[#417BEB]
             active:ring-offset-[2px]
            "
        >
          Subscribe
        </button>
      </label>
    </form>
  );
}