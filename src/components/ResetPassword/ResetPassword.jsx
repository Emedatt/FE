import React, { useState } from "react";
import { LeftAuth } from "../Login/LeftAuth";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [toggleEye, setToggleEye] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isMatch, setIsMatch] = useState(false);
  
    
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      checkPasswordMatch(newPassword, confirmPassword);
    };
  
    
    const handleConfirmPasswordChange = (e) => {
      const newConfirmPassword = e.target.value;
      setConfirmPassword(newConfirmPassword);
      checkPasswordMatch(password, newConfirmPassword);
    };
  
    
    const checkPasswordMatch = (password, confirmPassword) => {
      if (password.length < 8) {
        setError("Must be 8 characters at least");
        setIsMatch(false);
      } else if (password === confirmPassword && confirmPassword.length > 0) {
        setIsMatch(true);
        setError("");
      } else {
        setIsMatch(false);
        setError("");
      }
    };

  return (
    <div className="w-screen flex h-[1024px] items-center">
      <LeftAuth />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form action="" className="">
          <h1 className="text-[32px] font-bold text-[#323232] text-center">
            Reset Password
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            Set a new password to secure your account.
          </p>
          <div className="flex flex-col mt-[60px]">
            <label
              htmlFor="passwordOne"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Password
            </label>
            <input
              type="text"
              id="passwordOne"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Enter password"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="passwordTwo"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                type={`${toggleEye ? "password" : "text"}`}
                id="passwordTwo"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                placeholder="Confirm password"
                className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none w-full"
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
            {isMatch && confirmPassword.length > 0 && (
              <p className="text-green-500 text-sm">Passwords match!</p>
            )}
            {!isMatch && confirmPassword.length > 0 && (
              <p className="text-red-500 text-sm">Passwords do not match.</p>
            )}
          </div>
          <Link to="/reset-successful">
            <button className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[120px] cursor-pointer mt-[60px]">
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
