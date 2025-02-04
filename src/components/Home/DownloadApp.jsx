import React from 'react'
import { FaApple } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import playstore from '../../images/playstore.svg';
import highlight from '../../images/highlight.svg';
import arrowcurvy from '../../images/arrow-curvy.svg';
import mouse from '../../images/mouse.svg'
import gridOne from '../../images/grid-1.svg';
import gridTwo from '../../images/grid-2.svg';
import bigHighlight from '../../images/big-highlight.svg';
import bigMouse from '../../images/big-mouse.svg';
import bigArrowCurvy from '../../images/big-arrow-curvy.svg';
const DownloadApp = () => {
  return (
    <div
      className="xl:w-[90%] max-xl:w-[90%] max-xl:max-w-[370px] bg-[#417BEB] mx-auto *:text-white py-[48px] px-[16px] mt-[60px] 
      rounded-[12px] absolute left-1/2
    -translate-x-1/2 xl:py-[175px]
    "
    >
      <img
        className="absolute right-[-5px] bottom-[90px] xl:hidden"
        src={arrowcurvy}
        alt="arrowcurvy"
      />
      <img className="absolute left-0 z-[-20] max-xl:hidden" src={gridOne} alt="grid-one" />
      <img className="absolute right-0 z-[-20] max-xl:hidden" src={gridTwo} alt="grid-two" />
      <img className="absolute left-0 bottom-0 xl:hidden" src={mouse} alt="mouse" />
      <div className="relative w-full flex flex-col xl:flex-col-reverse">
        <h2 className="text-[24px] font-bold text-center relative xl:text-[56px] xl:w-[700px] xl:mx-auto">
          <img
            className="absolute top-[-5px] left-[10px] xl:hidden"
            src={highlight}
            alt="highlight"
          />
          Download the App Now!
        </h2>
        <p className="text-[16px] text-center mt-[16px] xl:text-[28px] xl:w-[536px] xl:mx-auto xl:mb-[42px] relative">
          <img className="max-xl:hidden xl:absolute xl:top-[-60px] xl:left-[-80px]" src={bigHighlight} alt="bigHighlight" />
          Download our app today and take the first step toward optimal health!
        </p>
      </div>
      <div className="w-full flex flex-col justify-center xl:flex-row xl:gap-x-[66px]">
        <Link to="/" className='relative'>
          <img className='max-xl:hidden xl:absolute xl:bottom-[-185px] xl:left-[-216px]' src={bigMouse} alt="bigMouse" />
          <button
            className="text-white text-[14px] font-bold flex justify-center w-full max-w-[300px]
          bg-[#1E1E1E] px-[50px] py-[14px] gap-x-[8px] rounded-[12px] mt-[32px] mx-auto
          "
          >
            <FaApple
              style={{
                fontSize: "20px",
                color: "white",
              }}
            />
            Download for iOS
          </button>
        </Link>
        <Link to="/" className='relative'>
          <img className='absolute right-[-140px] top-[-170px] max-xl:hidden' src={bigArrowCurvy} alt="big-arrow-curvy" />
          <button
            className="text-white text-[14px] font-bold flex justify-center w-full max-w-[300px]
          bg-[#1E1E1E] px-[70px] py-[14px] gap-x-[8px] rounded-[12px] mt-[32px] mx-auto text-nowrap
          "
          >
            <img src={playstore} alt="playstore" />
            Download for Android
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DownloadApp