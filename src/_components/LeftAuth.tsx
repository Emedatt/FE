import React from 'react';
import authentication from '../../public/authentication.png';
import logo from "../../public/logo.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedin.svg";
import youtube from "../../public/youtube.svg";
import Image from 'next/image';
export const LeftAuth = () => {
  return (
    <div
      className="hidden xl:block xl:w-1/2 h-full bg-cover relative p-[40px] bg-[url('/authentication.png')]"
    >
      <Image src={logo} alt="logo" className="w-[138px] h-[46px]" />
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
          <Image src={facebook} alt="social-media" />
          <Image src={twitter} alt="social-media" />
          <Image src={instagram} alt="social-media" />
          <Image src={linkedin} alt="social-media" />
          <Image src={youtube} alt="social-media" />
        </div>
      </footer>
    </div>
  );
};