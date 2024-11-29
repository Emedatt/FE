import React from 'react';
import HeroImg from '../../assets/HeroImg.png';
import HomeVector from '../../assets/HomeVector.png';

const Hero = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col lg:flex-row items-center justify-center mt-[10rem] md:mt-[15rem] lg:mt-[0.5625rem] gap-[4.25rem]">
    {/* Main Content Section */}
    <div className="w-[25rem] md:[30rem] lg:w-[33.75rem] h-auto gap-[1.5rem]">
     {/* Heading */}
      <h1 className="font-[Inter] lg:text-[3rem] md:text-[2rem] text-[1.75rem] text-[#000] font-bold leading-[1.75rem] md:leading-[4.375rem] md:text-center lg:mr-[-0.9rem] sm:mr-0">
        Your Path to
        <span className="font-[Inter] text-[#417BEB] text-[1.75rem] md:text-[2.7rem] lg:text-[3.5rem] font-bold leading-[3.814rem] mx-2">
          Better Health
        </span>
        is Just One Click Away!
      </h1>
  
      {/* Paragraph */}
      <p className="font-[Inter] text-[0.875rem] md:text-[1rem] font-normal leading-[1.5rem] text-[#969696] mt-2">
        Set aside the inconvenience of scheduling appointments! Get in touch with a doctor whenever it's convenient for you. Our network of skilled and qualified doctors can provide you with first-rate medical treatment.
      </p>
  
      {/* Buttons */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[1rem] mt-3">
        <button className="relative font-[Inter] text-[0.875rem] text-[#fff] font-semibold leading-[1.25rem] text-center bg-[#417BEB] shadow-[0px_1px_2px_0px_#0000001D] w-full md:w-[10.1875rem] h-[2.75rem] px-[18px] py-[14px] gap-[8px] rounded-[16px]">
          Book Appointment
              {/* Vector Image */}
            <div className="w-[3.96rem] md:w-[12.667rem] absolute top-[0.5rem] left-[-2.5rem] md:left-[-10rem] p-[3.3275rem] [padding-left:0] [padding-right:1.3931rem] [padding-bottom:3.3681rem] z-[-1]">
              <img src={HomeVector} alt="Vector" />
            </div>
        </button>
        <button className="relative font-[Inter] text-[0.875rem] font-semibold leading-[1.25rem] text-center shadow-[0px_0.0625rem_0.125rem_0px_#0000001D] w-full md:w-[8.5625rem] h-[2.75rem] px-[1.125rem] py-[0.9375rem] gap-[0.5rem] rounded-[1rem]">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[2rem] h-[2rem] absolute top-[0.5rem] right-[0]" viewBox="0 0 20 20">
            <polygon points="10,5 13,8 7,8" fill="#000" transform="rotate(45 9 8)" />
            <rect x="9" y="8" width="1" height="8" fill="#000" transform="rotate(45 9 8)" />
          </svg>
        </button>
      </div>
    </div>
  
    {/* Image and Info */}
    <div className="relative w-[23rem] md:w-[36.6875rem] sm:h-[20.878rem] md:h-auto gap-0 sm:gap-0 z-[-1]">
      <div className="w-auto h-auto gap-[0.625rem]">
        <div className="absolute bg-[#fff] flex top-[7.24rem] left-[-2rem] w-[7.125rem] h-[2.5625rem] gap-[0.625rem] rounded-[1.6875rem] border-b border-transparent shadow-[0px_0px_1.08125rem_-0.1875rem_rgba(0,0,0,0.36)]">
          <div className="w-[3.0625rem] h-[2.5625rem] p-[0.75rem] [padding-left:0.875rem] [padding-right:0.875rem] gap-[0.625rem] rounded-[9.9375rem] bg-[#D9E5FB] flex items-center justify-center">
            <span className="font-[Inter] text-[0.75rem] font-medium leading-[1.0875rem] text-[#417BEB]">
              1K+
            </span>
          </div>
          <span className="font-[Inter] text-[0.75rem] font-medium leading-[1.0875rem] text-[#323232] text-center">
            12K patients
          </span>
        </div>
      </div>
      <img src={HeroImg} className="w-full h-full object-cover" alt="physicians" />
      <div className="w-auto h-auto gap-[0.625rem]">
        <div className="absolute bg-[#fff] flex items-center top-[15rem] md:top-[27.24rem] right-[-2rem] w-[7.125rem] h-[2.5625rem] gap-[0.625rem] rounded-[1.6875rem] border-b border-transparent shadow-[0px_0px_1.08125rem_-0.1875rem_rgba(0,0,0,0.36)]">
          <div className="w-[3.0625rem] h-[2.5625rem] p-[0.75rem] [padding-left:0.875rem] [padding-right:0.875rem] gap-[0.625rem] rounded-[9.9375rem] bg-[#D9E5FB] flex items-center justify-center">
            <span className="font-[Inter] text-[0.75rem] font-medium leading-[1.0875rem] text-[#417BEB]">
              1K+
            </span>
          </div>
          <span className="font-[Inter] text-[0.75rem] font-medium leading-[1.0875rem] text-[#323232] text-center">
            Doctors
          </span>
        </div>
      </div>
    </div>
  
  </section>  
  );
};

export default Hero;
