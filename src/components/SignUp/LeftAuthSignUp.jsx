import React from 'react';
import authentication from '../../images/authentication.png';
import logo from "../../images/logo.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import youtube from "../../images/youtube.svg";

export const LeftAuthSignUp = ({image}) => {
  return (
    <div
      className="hidden xl:block xl:w-1/2 h-full bg-cover relative p-[40px]"
      style={{ backgroundImage: `url(${authentication})` }}
    >
      <img src={logo} alt="logo" className="w-[138px] h-[46px]" />
      <img src={image} alt="progress" className='mt-[48px]'/>
      <div className="absolute top-1/2 -translate-y-1/2 max-w-[561px]">
        <h1 className="text-[56px] text-white font-bold">
          Access Quality Care Anytime, Anywhere.
        </h1>
        <p className="text-white text-[18px] font-medium mt-[24px]">
          Access personalized healthcare, schedule consultations with certified
          doctors, manage and review your medical records anytime, keep track of
          your upcoming appointments, and stay connected with your healthcare
          team.
        </p>
      </div>
      <footer className="flex justify-between absolute bottom-[40px] w-[90%]">
        <p className="text-white text-[11px] font-medium">
          Copyright © E-medatt 2024
          <a href="" className="text-white text-[11px] font-medium underline">
            Terms and Conditions
          </a>
        </p>
        <div className="flex gap-x-[8px]">
          <img src={facebook} alt="social-media" />
          <img src={twitter} alt="social-media" />
          <img src={instagram} alt="social-media" />
          <img src={linkedin} alt="social-media" />
          <img src={youtube} alt="social-media" />
        </div>
      </footer>
    </div>
  );
};