import React, { useState, useRef, useEffect } from "react";
import { LeftAuthSignUp } from "../SignUp/LeftAuthSignUp";
import { Link } from "react-router-dom";
import leftArrow from "../../images/left-arrow.svg";
import verifyAccountSignup from '../../images/verify-account-signup.svg';
const CheckEmailSignUp = () => {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    if (e.target.value.length === e.target.maxLength) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const [time, setTime] = useState(59);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      secondsRemaining
    ).padStart(2, "0")}`;
  };
  const CountdownTimer = () => {
    useEffect(() => {
      if (time === 0) return;
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }, [time]);
  };
  CountdownTimer();

  return (
    <div className="w-screen flex h-[1024px] items-center">
      <LeftAuthSignUp 
        image={verifyAccountSignup}
        alt="verify-account-signup-progress"
      />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form action="">
          <h1 className="text-[32px] font-bold text-[#323232] text-center">
            Verify Email
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            A 6-digit code was sent to your email Ad***hn@gmail.com. Check email
            and enter code to reset password
          </p>
          <div className="flex mt-[60px] gap-x-[10px]">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="number"
                required
                maxLength="1" // Optional: Limit input to 1 character if needed
                ref={(el) => (inputRefs.current[index] = el)}
                className="appearance-none border border-gray-300 p-2 rounded-md text-[#323232] caret-[#323232] 
                text-[14px] text-center sm:size-[62px] h-[40px] w-1/6
                "
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
          <p className="text-[12px] text-[#FF6F61] font-medium">
            Input a valid code
          </p>
          <Link to="/patient-signup">
            <button type="submit" 
            className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[120px] cursor-pointer mt-[60px]">
              Verify
            </button>
          </Link>
          <p className="text-[14px] text-center mt-[42px] text-[#969696]">
            Reset code in {formatTime(time)}
          </p>
          <Link
            to="/signup"
            className="flex justify-center items-center gap-x-[10px] h-[40px] mt-[48px]"
          >
            <img src={leftArrow} alt="left-arrow" />
            Go Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CheckEmailSignUp;
