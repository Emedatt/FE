import React from 'react'
import benefitsTwoHero from '../../images/benefitsTwo-hero.png';
import { benefitsTwo } from './data.js';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
const BenefitsTwo = () => {
  return (
    <div className="w-screen mt-[60px] px-[10px] flex flex-col items-center xl:flex-row xl:gap-x-[30px] xl:px-[100px] overflow-x-hidden">
      <img className="xl:w-1/2" src={benefitsTwoHero} alt="benefits-two-hero" />
      <div>
        <div className="mt-[30px] xl:w-[90%]">
          <h1
            className="font-bold text-[20px] text-[#323232] text-center xl:text-left xl:font-bold xl:text-[36px]
          xl:ml-[50px]
          "
          >
            Your Healthcare Benefits
          </h1>
          <p className="text-[#323232] text-[14px] w-[80%] max-w-[700px] text-center mx-auto mt-[20px] xl:text-[16px] xl:text-left">
            Experience convenient and affordable healthcare at your fingertips.
            From easy scheduling to secure telehealth, our features make
            accessing quality care simple and efficient.
          </p>
        </div>
        <ul className="mt-[30px] flex flex-col gap-y-[10px] w-[320px] xl:w-[600px] mx-auto">
          {benefitsTwo.map(({ id, icon, text }) => {
            return (
              <li
                key={id}
                className="flex items-center gap-x-[5px] xl:ml-[50px]"
              >
                <img src={icon} alt="tick" />
                {text}
              </li>
            );
          })}
        </ul>
        <div className="mt-[20px] flex flex-col text-center mx-auto gap-y-[20px] w-[400px] xl:flex-row xl:gap-x-[20px]
        xl:ml-[44px] 
        ">
          <Link to="/">
            <button className="bg-[#417BEB] text-white w-full max-w-[300px] py-[17px] rounded-[16px] xl:w-[163px] xl:text-[14px]">
              Book Appointment
            </button>
          </Link>
          <Link to="/">
            <button
              className="w-full max-w-[300px] py-[17px] rounded-[16px] text-[#323232] flex gap-x-[8px]
              justify-center border-1 border-solid border-[#DCDCDC] xl:w-[163px] xl:text-[14px]
            items-center max-xl:mx-auto"
            >
              Learn more
              <MdArrowOutward style={{ fontSize: "16px", color: "#323232" }} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BenefitsTwo