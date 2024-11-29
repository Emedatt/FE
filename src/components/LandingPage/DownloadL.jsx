import React from 'react';
import Mouse from '../../assets/Mouse.png';
import leftCell from '../../assets/LeftCell.png';
import rightCell from '../../assets/RightCell.png';
import Highlight from '../../assets/Highlight.png';
import RightArrowD from '../../assets/RightArrowD.png';
import android from '../../assets/androidDownload.png';
import ios from '../../assets/iosDownload.png';

function DownloadL() {
  return (
    <div className="relative top-[8rem] flex justify-center items-center z-20">
      <div
        className="w-[26rem] h-[23rem] sm:w-[30rem]  md:w-[50rem] lg:w-[70rem] md:h-[38.71rem] bg-[#417BEB] p-5 lg:p-[7.125rem] gap-[0.625rem] rounded-[0.75rem] flex justify-center items-center"
        style={{
          backgroundImage: `url(${leftCell}), url(${rightCell})`,
          backgroundPosition: 'left center, right center',
          backgroundSize: '33rem 38.44rem, 33rem 38.44rem',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-[329px] lg:w-[696px]"> {/* Ensure content is on top of background */}
          {/* Text with Highlight Image */}
          <div className="relative m-1 md:m-10">
            <p className="text-white text-base md:text-lg">
              Download our app today and take the first step toward optimal health!
            </p>
            <img
              src={Highlight}
              alt="Highlight"
              className="absolute top-[-3rem] left-[-4rem] w-[6.03rem] h-[3.59rem]"
            />
          </div>
          <h1 className="text-[24px] md:text-[48px] lg:text-[64px] font-bold text-white">
            Download the App Now!
          </h1>
          <div className="download-buttons flex flex-col md:flex-row gap-2 md:gap-[66.34px]">
            <div className="relative">
              {/* Android Image */}
              <img
                src={android}
                alt="Android Download"
                className="w-full md:w-[244px] h-[]"
              />
              {/* Mouse Image (positioned absolutely relative to the parent div) */}
              <img
                src={Mouse}
                alt="Mouse"
                className="absolute bottom-[-2rem] md:bottom-[-10rem] left-[-2.5rem] md:left-[-12rem] md:w-[12.19rem] md:h-[12.24rem] w-[43.22px] h-[43.39px]"
              />
            </div>

            <div className="relative">
              {/* iOS Image */}
              <img
                src={ios}
                alt="iOS Download"
                className="w-full md:w-[244px] h-[]"
              />
              {/* Right Arrow Image */}
              <img
                src={RightArrowD}
                alt="Right Arrow"
                className="absolute bottom-[2rem] right-[-4rem] md:right-[-13rem] md:w-[127.29px] md:h-[205.97px] w-[34.75px] h-[65.66px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadL;
