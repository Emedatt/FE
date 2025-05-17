import React from 'react'
import Logo from "../../public/logo.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedin.svg";
import youtube from '../../public/youtube.svg';
import Link from 'next/link';
import message from "../../public/message.svg";
import phone from "../../public/phone.svg";
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="z-[-20] w-full bg-[#0D192F] *:text-white px-[28px] py-[17px] xl:px-[104px]
    max-w-[1440px] mx-auto
    ">
      <div className="mt-[78px] w-full flex flex-col items-center gap-y-[16px] xl:mt-[236px] xl:items-start xl:relative xl:mb-[30px]">
        <Image src={Logo} alt="logo" />
        <p className="text-[10px] text-center max-w-[400px] xl:text-left">
          {" "}
          Providing accessible, affordable, and quality telehealth services.
          Connecting you with certified healthcare professionals for your
          medical needs.
        </p>
        <div className="flex gap-x-[8px] mb-[16px]">
          <Image src={facebook} alt="social-media" />
          <Image src={twitter} alt="social-media" />
          <Image src={instagram} alt="social-media" />
          <Image src={linkedin} alt="social-media" />
          <Image src={youtube} alt="social-media" />
        </div>
        <Search className="max-xl:hidden xl:self-end xl:absolute xl:top-0 xl:w-[400px]" />
      </div>
      <div className="grid grid-cols-12 grid-rows-12 *:text-white">
        <div className="col-span-6 row-span-8 xl:col-span-3 xl:row-span-12">
          <h5 className="font-bold text-[14px] mb-[14px]">About Us</h5>
          <div className="flex flex-col *:text-[12px] gap-y-[12px]">
            <Link href="/about">Mission</Link>
            <Link href="/about">Vision</Link>
            <Link href="/about">Our Values</Link>
            <Link href="/about">Why Choose Us?</Link>
          </div>
        </div>
        <div className="col-span-6 row-span-8 xl:col-span-3 xl:row-span-12">
          <h5 className="font-bold text-[14px] mb-[14px]">Services</h5>
          <div className="flex flex-col *:text-[12px] gap-y-[12px]">
            <Link href="/services">Telehealth Consultations</Link>
            <Link href="/services">Specialist Care</Link>
            <Link href="/services">Medical Records Management</Link>
            <Link href="/services">Wellness Programs</Link>
          </div>
        </div>
        <div className="col-span-6 row-span-4 xl:col-span-3 xl:row-span-12">
          <h5 className="font-bold text-[14px] mb-[14px]">Pricing</h5>
          <div className="flex flex-col *:text-[12px] gap-y-[12px]">
            <Link href="/services">Basic Plan</Link>
            <Link href="/services">Pro Plan</Link>
            <Link href="/services">Premium Plan</Link>
          </div>
        </div>
        <div className="col-span-6 row-span-4 xl:col-span-3 xl:row-span-12">
          <h5 className="font-bold text-[14px] mb-[14px]">Contact us</h5>
          <div className="flex gap-x-[8px] mb-[12px]">
            <Image src={message} alt="message" />
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
            <Image src={phone} alt="phone" />
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

const Search = ({className}: {className: string}) => {
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