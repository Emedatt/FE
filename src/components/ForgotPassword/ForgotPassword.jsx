import React from 'react';
import { LeftAuth } from '../Login/LeftAuth';
import { Link } from 'react-router-dom';
import leftArrow from '../../images/left-arrow.svg';
const ForgotPassword = () => {
  return (
    <div className="w-screen flex h-[1024px] items-center">
      <LeftAuth />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form action="">
          <h1 className="text-[32px] font-bold text-[#323232] text-center">
            Forgot Password?
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            No worries, enter email to receive password reset instructions.
          </p>
          <div className="flex flex-col mt-[60px]">
            <label
              htmlFor="text"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              E-mail
            </label>
            <input
              type="text"
              id="text"
              name="email"
              required
              placeholder="Enter e-mail"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2
            outline-none
            "
            />
          </div>
          <Link to="/check-email">
            <button className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[40px] cursor-pointer">
              Reset Password
            </button>
          </Link>
          <Link to="/login" className="flex justify-center items-center gap-x-[10px] h-[40px] mt-[48px]">
            <img src={leftArrow} alt="left-arrow" />
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword