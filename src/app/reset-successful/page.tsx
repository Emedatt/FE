import React from 'react'
import { LeftAuth } from "@/_components/LeftAuth";
import bigTick from '../../../public/big-tick.svg';
import Link from 'next/link';
import Image from 'next/image';

const ResetSuccessful = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex h-[1400px] items-center">
      <LeftAuth />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px] flex flex-col">
        <h1 className="text-[32px] font-bold text-[#323232] text-center">
          Password Reset Successfully
        </h1>
        <Image src={bigTick} alt="big-tick" className="mt-[64px] mx-auto" />
        <Link href="/login">
          <button className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[120px] cursor-pointer mt-[60px]">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResetSuccessful