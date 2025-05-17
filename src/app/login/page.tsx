"use client";
import React, { useState } from "react";
import Link from "next/link";
import hr from "../../../public/hr.svg";
import googleIcon from "../../../public/google-icon.svg";
import appleIcon from "../../../public/apple-icon.svg";
import facebookIcon from "../../../public/facebook-icon.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { LeftAuth } from "@/_components/LeftAuth";
import Image from 'next/image';
export default function Login () {
  const [toggleEye, setToggleEye] = useState(true);
  return (
    <div className="max-w-[1440px] mx-auto flex h-[1400px] items-center">
      <LeftAuth />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form action="" className="">
          <h1 className="text-[32px] font-bold text-[#323232] text-center">
            Welcome Back!
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            We're glad to see you again
          </p>
          <div className="flex flex-col mt-[60px]">
            <label
              htmlFor="email"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter e-mail"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2
            outline-none
            "
            />
          </div>
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="password"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                type={`${toggleEye ? "password" : "text"}`}
                id="password"
                name="password"
                required
                placeholder="Enter password"
                className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2
            outline-none w-full
            "
              />
              <FaEye
                onClick={() => setToggleEye(!toggleEye)}
                className={`absolute top-[18px] right-[18px] cursor-pointer ${
                  toggleEye ? "block" : "hidden"
                }`}
              />
              <FaEyeSlash
                onClick={() => setToggleEye(!toggleEye)}
                className={`absolute top-[18px] right-[18px] ${
                  toggleEye ? "hidden" : "block"
                }`}
              />
            </div>
          </div>
          <div className="mt-[10px] flex justify-end">
            <Link
              href="/forgot-password"
              className="text-[12px] text-[#969696] font-medium"
            >
              Forgot Password?
            </Link>
          </div>
          <Link href="/dashboard">
            <button
              type="submit"
              className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[40px] cursor-pointer"
            >
              Login
            </button>
          </Link>
          <div className="flex items-center justify-between w-full mt-[40px]">
            <Image src={hr} alt="hr" className="w-1/6" />
            <p className="font-medium text-[12px] text-[#969696] flex-1 text-center">
              or do it via other accounts
            </p>
            <Image src={hr} alt="hr" className="w-1/6" />
          </div>
          <div className="flex justify-center gap-x-[32px] mt-[24px]">
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <Image
                  src={googleIcon}
                  alt="googleIcon"
                  className="size-[23px]"
                />
              </div>
            </a>
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <Image src={appleIcon} alt="appleIcon" className="size-[23px]" />
              </div>
            </a>
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <Image
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="size-[23px]"
                />
              </div>
            </a>
          </div>
          <div className="mt-[60px]">
            <p className="text-[14px] text-[#969696] text-center">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="!text-[#1877F2] font-medium cursor-pointer"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
