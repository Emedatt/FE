import React from 'react'
import {howitworks} from './data.js';
import arrowTwo from '../../images/arrow-2.svg';
import arrowThree from '../../images/arrow-3.svg';
import arrowFour from '../../images/arrow-4.svg';
import bigArrow from '../../images/big-arrow.svg';

const HowItWorks = () => {
  return (
    <div className="bg-[#F9FCFF] pt-[40px] pb-[40px] px-[20px] flex flex-col items-center xl:h-[10vh]">
      <div>
        <h1 className="text-center font-bold text-[20px] text-[#323232] xl:text-[36px]">
          How It Works
        </h1>
        <p className="text-center text-[14px] text-[#323232] xl:text-[16px] max-w-[480px]">
          Follow these easy steps to enjoy quick and seamless access to
          certified doctors on E-Medatt.
        </p>
      </div>
      <div className="flex flex-col gap-y-[40px] mt-[50px] px-[20px] relative items-center xl:w-[90vw] xl:flex-row xl:mx-auto">
        <img
          className="absolute top-[250px] left-[20px] xl:hidden"
          src={arrowTwo}
          alt="arrowTwo"
        />
        <img
          className="absolute top-[550px] right-[20px] xl:hidden"
          src={arrowThree}
          alt="arrowThree"
        />
        <img
          className="absolute top-[850px] left-[20px] xl:hidden"
          src={arrowFour}
          alt="arrowFour"
        />
        <img
          className="xl:absolute xl:top-[300px] xl:left-[200px] max-xl:hidden"
          src={bigArrow}
          alt="big-arrow"
        />
        <img
          className="xl:absolute xl:top-[400px] xl:left-[500px] max-xl:hidden"
          src={bigArrow}
          alt="big-arrow"
        />
        <img
          className="xl:absolute xl:top-[480px] xl:left-[820px] max-xl:hidden"
          src={bigArrow}
          alt="big-arrow"
        />
        {howitworks.map(
          ({
            id,
            header,
            icon,
            headerStyles,
            title,
            titleStyles,
            text,
            textStyles,
            absolute,
          }) => {
            return (
              <div key={id} className={absolute}>
                <h1 className={headerStyles}>{header}</h1>
                <img src={icon} alt="how it works" />
                <h3 className={titleStyles}>{title}</h3>
                <p className={textStyles}>{text}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default HowItWorks