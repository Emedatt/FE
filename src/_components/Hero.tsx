import React from 'react'
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import landingHero from '../../public/landing-hero.png';
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='lg:px-20 px-5'>
      <div className="w-full gap-x-[68px] flex items-center flex-col 
      gap-y-[40px] lg:flex-row lg:relative">
        <div className="mt-[30px] xl:max-w-[480px] w-full xl:w-1/2">
          <h1 className="text-[30px] lg:text-[56px] text-[#323232] font-bold text-center 
          lg:text-start
          max-lg:max-w-[500px] max-lg:mx-auto">
            Your Path to <span className="!text-[#417BEB]">Better Health</span>{" "}
            is Just One Click Away!
          </h1>
          <p
            className="mt-[20px] xl:mt-[40px] text-[#323232] text-[14px] xl:text-[16px] w-full 
            text-center max-xl:max-w-[500px] 
          max-lg:mx-auto lg:text-left"
          >
            Set aside the inconvenience of scheduling appointments! Get in touch
            with a doctor whenever it's convenient for you. Our network of
            skilled and qualified doctors can provide you with first-rate
            medical treatment.
          </p>
          <div className="mt-[40px] flex flex-col w-full justify-center gap-y-[20px] lg:flex-row lg:justify-start">
            <Link href="/">
              <button
                className="bg-[#417BEB] w-full max-lg:block max-lg:mx-auto max-lg:max-w-[300px] 
              xl:w-[160px] px-[18px] py-[17px] text-white rounded-[16px] 
              text-[12px]"
              >
                Book Appointment
              </button>
            </Link>
            <Link
              href="/"
              className="flex justify-center items-center w-full lg:w-[120px] text-[#323232] lg:ml-[34px] gap-x-[8px] text-[12px]"
            >
              Learn more
              <MdArrowOutward style={{ fontSize: "16px", color: "#323232" }} />
            </Link>
          </div>
        </div>
        <Image src={landingHero} alt="landingHero" className='w-full max-w-[480px] xl:max-w-1/2 mt-[30px]'/>
      </div>
    </div>
  );
}

export default Hero