import React from 'react'
import allSetProgress from '../../../public/all-set-progress.svg';
import { LeftAuthSignUp } from "@/_components/LeftAuthSignUp";
import styledBigTick from '../../../public/styled-big-tick.svg';
import Link from 'next/link';
const AllSet = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex h-[1400px] items-center">
      <LeftAuthSignUp image={allSetProgress} />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <h1 className="text-[32px] font-bold text-[#323232] text-center mb-[16px]">
          You're All Set!
        </h1>
        <p className="text-[16px] text-[#969696] text-center">
          Welcome to E-MEDATT! Begin your path to a healthier, happier you.
        </p>
        <img
          src={styledBigTick}
          alt="styled-big-tick"
          className="mt-[64px] mx-auto"
        />
        <Link href="/dashboard">
          <button className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[120px] cursor-pointer mt-[60px]">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AllSet