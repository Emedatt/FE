import React from 'react'
import { FaApple } from "react-icons/fa6";
import Link from 'next/link';
import playstore from '../../public/playstore.svg';
import highlight from '../../public/highlight.svg';
import arrowcurvy from '../../public/arrow-curvy.svg';
import mouse from '../../public/mouse.svg'
import gridOne from '../../public/grid-1.svg';
import gridTwo from '../../public/grid-2.svg';
import bigHighlight from '../../public/big-highlight.svg';
import bigMouse from '../../public/big-mouse.svg';
import bigArrowCurvy from '../../public/big-arrow-curvy.svg';
import Image from 'next/image';
const DownloadApp = () => {
  return (
    <div
      className="lg:w-4/5 max-lg:max-w-[370px] bg-[#417BEB] mx-auto *:text-white py-[48px] px-[16px] mt-[60px] 
      rounded-[12px] lg:py-[175px]
    "
    >
      <Image
        className="absolute right-[-5px] bottom-[90px] lg:hidden"
        src={arrowcurvy}
        alt="arrowcurvy"
      />
      <Image className="absolute left-0 z-[-20] hidden lg:block" src={gridOne} alt="grid-one" />
      <Image className="absolute right-0 z-[-20] hidden lg:block" src={gridTwo} alt="grid-two" />
      <Image className="absolute left-0 bottom-0 hidden lg:block" src={mouse} alt="mouse" />
      <div className="relative w-full flex flex-col xl:flex-col-reverse">
        <h2 className="text-[24px] font-bold text-center relative xl:text-[56px] xl:w-[700px] xl:mx-auto">
          <Image
            className="absolute top-[-5px] left-[10px] lg:hidden"
            src={highlight}
            alt="highlight"
          />
          Download the App Now!
        </h2>
        <p className="text-[16px] text-center mt-[16px] xl:text-[28px] xl:w-[536px] xl:mx-auto xl:mb-[42px] relative">
          <Image className="max-xl:hidden xl:absolute xl:top-[-60px] xl:left-[-80px]" src={bigHighlight} alt="bigHighlight" />
          Download our app today and take the first step toward optimal health!
        </p>
      </div>
      <div className="w-full flex flex-col justify-center xl:flex-row xl:gap-x-[66px]">
        <Link href="/" className='relative'>
          <Image className='max-xl:hidden xl:absolute xl:bottom-[-185px] xl:left-[-216px]' src={bigMouse} alt="bigMouse" />
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
        <Link href="/" className='relative'>
          <Image className='absolute right-[-140px] top-[-170px] max-xl:hidden' src={bigArrowCurvy} alt="big-arrow-curvy" />
          <button
            className="text-white text-[14px] font-bold flex justify-center w-full max-w-[300px]
          bg-[#1E1E1E] px-[70px] py-[14px] gap-x-[8px] rounded-[12px] mt-[32px] mx-auto text-nowrap
          "
          >
            <Image src={playstore} alt="playstore" />
            Download for Android
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DownloadApp