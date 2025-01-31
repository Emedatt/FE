import React from 'react'
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import landingHero from '../../images/landing-hero.png';
const Hero = () => {
  return (
    <div className="w-screen">
      <div className="gap-x-[68px] flex items-center flex-col  gap-y-[40px] px-[20px] xl:flex-row xl:relative">
        <div className="mt-[30px] xl:mt-[181px] xl:ml-[107px] max-xl:w-full xl:max-w-[540px]">
          <h1 className="text-[30px] xl:text-[56px] text-[#323232] font-bold max-xl:text-center max-xl:max-w-[500px] max-xl:mx-auto">
            Your Path to <span className="!text-[#417BEB]">Better Health</span>{" "}
            is Just One Click Away!
          </h1>
          <p
            className="mt-[20px] xl:mt-[40px] text-[#323232] text-[14px] xl:text-[16px] w-full text-center max-xl:max-w-[500px] 
          max-xl:mx-auto xl:text-left"
          >
            Set aside the inconvenience of scheduling appointments! Get in touch
            with a doctor whenever it's convenient for you. Our network of
            skilled and qualified doctors can provide you with first-rate
            medical treatment.
          </p>
          <div className="mt-[40px] flex flex-col w-full sm:justify-center gap-y-[20px] xl:flex-row xl:justify-start">
            <Link to="/">
              <button
                className="bg-[#417BEB] w-full max-xl:block max-xl:mx-auto max-xl:max-w-[300px] 
              xl:w-[160px] px-[18px] py-[17px] text-white rounded-[16px] 
              text-[12px]"
              >
                Book Appointment
              </button>
            </Link>
            <Link
              to="/"
              className="flex justify-center items-center w-full xl:w-[120px] text-[#323232] xl:ml-[34px] gap-x-[8px] text-[12px]"
            >
              Learn more
              <MdArrowOutward style={{ fontSize: "16px", color: "#323232" }} />
            </Link>
          </div>
        </div>
        <div
          className="w-full mx-auto min-h-[300px] max-h-[600px] xl:w-[642px] xl:h-[607px] bg-contain bg-no-repeat xl:absolute xl:top-[150px] xl:left-[687px]
          "
          style={{
            backgroundImage: `url(${landingHero})`,
            backgroundPosition: "top center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Hero