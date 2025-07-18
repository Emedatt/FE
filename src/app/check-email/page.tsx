"use client";
import React, { useState, useRef, useEffect } from "react";
import { LeftAuth } from "@/_components/LeftAuth";
import Link from "next/link";
import leftArrow from "../../../public/left-arrow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CheckEmail = () => {
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const [time, setTime] = useState(59);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    if (e.target.value.length === 1 && index < 5) {
      const nextInput = inputRefs.current[index + 1];
      nextInput?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secondsRemaining).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (time === 0) return;
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [time]);


  return (
    <div className="max-w-[1440px] mx-auto flex h-[1400px] items-center">
      <LeftAuth />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form>
          <h1 className="text-[32px] font-bold text-[#323232] text-center">
            Check Your Email
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            A 6-digit code was sent to your email Ad***hn@gmail.com. Check email
            and enter code to reset password
          </p>
          <div className="flex mt-[60px] gap-x-[10px]">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={code[index]}
                onChange={(e) => handleInputChange(e, index)}
                ref={(el) => {
                  if (el) {
                    inputRefs.current[index] = el;
                  }
                }}
                className="appearance-none border border-gray-300 p-2 rounded-md text-[#323232] text-center sm:size-[62px] h-[40px] w-1/6"
              />
            ))}
          </div>
          {error && (
            <p className="text-[12px] text-[#FF6F61] font-medium">{error}</p>
          )}
          <button
            type="submit"
            className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[60px]"
          >
            Submit Code
          </button>
          <p className="text-[14px] text-center mt-[42px] text-[#969696]">
            Reset code in {formatTime(time)}
          </p>
          <Link
            href="/forgot-password"
            className="flex justify-center items-center gap-x-[10px] h-[40px] mt-[48px]"
          >
            <Image src={leftArrow} alt="left-arrow" />
            Go Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CheckEmail;
