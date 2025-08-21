import React from 'react';
import { benefits } from './data';
import Image from 'next/image';

const Benefits = () => {
  return (
    <div className="mt-[20px] p-[10px]">
      <h1 className="text-[30px] xl:text-[56px] text-[#323232] font-bold text-center max-xl:max-w-[500px] max-xl:mx-auto">
        Healthcare for&nbsp;
        <span className="!text-[#417BEB]">Everyone, Wherever</span> You Are
      </h1>
      <p
        className="mt-[20px] xl:mt-[40px] text-[#323232] text-[14px] xl:text-[16px] w-full text-center max-xl:max-w-[500px] 
          mx-auto xl:w-[500px]"
      >
        E-MEDATT makes healthcare accessible for different groups, providing
        tailored care to meet your specific needs.
      </p>
      <div className="flex flex-col items-center gap-y-[30px] mt-[30px] xl:grid xl:grid-cols-12 xl:grid-rows-6
        xl:gap-x-[20px] xl:px-[100px] xl:justify-center
      ">
        {
          benefits.map(({id, color, img, title, text}: {id: number, color: string, img: string, title: string, text: string}) => {
            return (
              <div key={id} className="max-w-[362px] h-[319px] shadow-lg xl:col-span-4 xl:row-span-3">
                <div
                  style={{
                    backgroundColor: `${color}`,
                  }}
                  className="w-full h-[99px] relative"
                >
                  <Image
                    className="w-[64px] h-[64px] absolute top-[100px] left-1/2 -translate-1/2"
                    src={img}
                    alt={title}
                  />
                </div>
                <div className="mt-[40px] flex flex-col gap-y-[20px]">
                  <p className="font-bold text-[#323232] text-center">
                    {title}
                  </p>
                  <p className="text-[#323232] text-center">{text}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Benefits