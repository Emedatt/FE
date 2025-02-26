import React from "react";
import doctorFinish from "../../images/doctor-finish.svg";
import { LeftAuthSignUp } from "../SignUp/LeftAuthSignUp";
import { Link } from "react-router-dom";
import leftArrow from "../../images/left-arrow.svg";
import upload from '../../images/upload.svg';
const DoctorSignUp = () => {
  return (
    <div className="w-screen flex h-[1024px] items-center">
      <LeftAuthSignUp image={doctorFinish} alt="doctor-finish-progress" />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form action="">
          <h1 className="text-[32px] font-bold text-[#323232] text-center mb-[16px]">
            You Are Almost There!
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            Complete your profile to finish setting up your account.
          </p>
          <div className="mt-[60px]">
            <label
              htmlFor="gender"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              required
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="" disabled defaultValue>
                Choose your gender
              </option>
              <option value="physician">Male</option>
              <option value="patient">Female</option>
            </select>
          </div>
          <div className="mt-[32px]">
            <label
              htmlFor="area-of-specialization"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Area of Specialization
            </label>
            <select
              name="area-of-specialization"
              id="area-of-specialization"
              required
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="" disabled defaultValue>
                e.g Optician
              </option>
              <option value="physician">Male</option>
              <option value="patient">Female</option>
            </select>
          </div>
          <div className="mt-[32px]">
            <label
              htmlFor="years-of-experience"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Years of Experience
            </label>
            <select
              name="years-of-experience"
              id="years-of-experience"
              required
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="" disabled defaultValue>
                e.g, 5years
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
              Professional Bio
            </label>
            <textarea
              name="additional-health-information"
              id="additional-health-information"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] 
              border-solid border-2
            outline-none appearance-none w-full"
              placeholder="Tell us about yourself"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="mt-[32px] flex flex-col">
            <label
              htmlFor="upload-ID"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Upload valid I.D
            </label>
            <label
              htmlFor="upload-ID"
              className="bg-white py-4 font-semibold text-[#323232] w-full rounded-lg cursor-pointer border-2 border-[#DCDCDC]
              flex items-center justify-center gap-2"
            >
              <img src={upload} alt="Upload" className="size-[16px]" />
              <span className="text-[14px] text-[#323232]">
                Upload document
              </span>
            </label>
            <input type="file" id="upload-ID" className="hidden" />
          </div>
          <Link to="/allset">
            <button
              type="submit"
              className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[120px] cursor-pointer mt-[60px]"
            >
              Finish Up
            </button>
          </Link>
        </form>
        <Link
          to="/check-email-signup"
          className="flex justify-center items-center gap-x-[10px] h-[40px] mt-[48px]"
        >
          <img src={leftArrow} alt="left-arrow" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default DoctorSignUp;
