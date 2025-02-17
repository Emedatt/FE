import React from 'react'
import { LeftAuth } from "../Login/LeftAuth";
import bigTick from '../../images/big-tick.svg';
import {Link} from 'react-router-dom';
const ResetSuccessful = () => {
  return (
    <div className="w-screen flex h-[1024px] items-center">
      <LeftAuth />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px] flex flex-col">
        <h1 className="text-[32px] font-bold text-[#323232] text-center">
          Password Reset Successfully
        </h1>
        <img src={bigTick} alt="big-tick" className="mt-[64px] mx-auto" />
        <Link to="/login">
          <button className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[120px] cursor-pointer mt-[60px]">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResetSuccessful