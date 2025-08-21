"use client"
import React, { useState } from "react";
import patientFinish from "../../../public/patient-finish.svg";
import { LeftAuthSignUp } from "@/_components/LeftAuthSignUp";
import Link from "next/link";
import leftArrow from "../../../public/left-arrow.svg";
import Image from 'next/image';
import { useRouter } from "next/router";

const PatientSignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gender: "",
    dob: "",
    healthConditions: "",
    additionalInfo: "",
  });

  return (
    <div className="max-w-[1440px] mx-auto flex h-[1400px] items-center">
      <LeftAuthSignUp image={patientFinish} />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form>
          <h1 className="text-[32px] font-bold text-[#323232] text-center mb-[16px]">
            You Are Almost There!
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            Complete your profile to finish setting up your account.
          </p>
          <div className="mt-[32px]">
            <label htmlFor="gender" className="text-[14px] text-[#323232] mb-[10px]">
              Gender
            </label>
            <select
              name="gender"
              required
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="" disabled>
                Choose your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="date-of-birth"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="date-of-birth"
              name="date-of-birth"
              onChange={(e) => setFormData({...formData, dob: e.target.value})}
              required
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2
            outline-none
            "
            />
          </div>
          <div className="mt-[32px]">
            <label
              htmlFor="health-conditions"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Do you have any of the following health conditons?
            </label>
            <select
              name="health-conditions"
              id="health-conditions"
              onChange={(e) => setFormData({...formData, healthConditions: e.target.value})}
              required
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="" disabled>
                Select all that apply
              </option>
              <option value="physician">Physician</option>
              <option value="patient">Patient</option>
            </select>
          </div>
          <div className="mt-[32px]">
            <label
              htmlFor="additional-health-information"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Share any additional health information or concerns
            </label>
            <textarea
              name="additional-health-information"
              id="additional-health-information"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] 
              border-solid border-2
            outline-none appearance-none w-full"
              placeholder="e.g, medications you are currently taking, lifestyle habits"
              cols={30}
              rows={5}
              onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
            ></textarea>
          </div>
          <Link href="/allset">
            <button
              type="submit"
              className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[120px] cursor-pointer mt-[60px]"
            >
              Finish Up
            </button>
          </Link>
        </form>
        <Link
          href="/check-email-signup"
          className="flex justify-center items-center gap-x-[10px] h-[40px] mt-[48px]"
        >
          <Image src={leftArrow} alt="left-arrow" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PatientSignUp;


