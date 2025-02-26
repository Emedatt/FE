import React, {useState} from 'react'
import {LeftAuthSignUp} from './LeftAuthSignUp';
import createAccountProgress from '../../images/create-account-progress.svg';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import hr from '../../images/hr.svg';
import googleIcon from "../../images/google-icon.svg";
import appleIcon from "../../images/apple-icon.svg";
import facebookIcon from "../../images/facebook-icon.svg";

const SignUp = () => {
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
      <LeftAuthSignUp
        image={createAccountProgress}
        alt="create-account-progress"
      />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form action="">
          <h1 className="text-[32px] font-bold text-[#323232] text-center mb-[16px]">
            Create Your Account!
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            Sign up to access personalized healthcare.
          </p>
          <div className='mt-[60px]'>
            <label
              htmlFor="role"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Role
            </label>
            <select
              name="role"
              id="role"
              required
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="" disabled defaultValue>
                Choose your role
              </option>
              <option value="physician">Physician</option>
              <option value="patient">Patient</option>
            </select>
          </div>
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="full-name"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              required
              placeholder="Enter full name"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2
            outline-none
            "
            />
          </div>
          <div className="flex flex-col mt-[32px]">
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
              placeholder="yourname@example.com"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2
            outline-none
            "
            />
          </div>
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="newpassword"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                type={`${toggleEye ? "password" : "text"}`}
                id="password"
                name="newpassword"
                required
                value={password}
                onChange={handlePasswordChange}
                min="8"
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
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="confirm-password"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                type={`${toggleEye ? "password" : "text"}`}
                id="password"
                name="confirm-password"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                min="8"
                placeholder="Confirm password"
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
            {isMatch && confirmPassword.length > 0 && (
              <p className="text-green-500 text-sm">Passwords match!</p>
            )}
            {!isMatch && confirmPassword.length > 0 && (
              <p className="text-red-500 text-sm">Passwords do not match.</p>
            )}
          </div>
          <div className='mt-[32px]'>
            <input
              type="checkbox"
              value="accept-terms"
              className="accent-[#417BEB]"
            />
            <label
              htmlFor="accept-terms"
              className="max-w-[398px] text-[#969696] ml-[10px] text-[12px]"
            >
              By creating an account means you agree to the{" "}
              <Link to="terms" className="!text-[#417BEB]">
                Terms and Conditions
              </Link>
              , and our{" "}
              <Link to="privacy" className="!text-[#417BEB]">
                Privacy Policy
              </Link>
            </label>
          </div>
          <Link to="/check-email-signup">
            <button type="submit" className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[20px] cursor-pointer">
              Create Account
            </button>
          </Link>
          <div className="flex items-center justify-between w-full mt-[20px]">
            <img src={hr} alt="hr" className="w-1/6" />
            <p className="font-medium text-[12px] text-[#969696] flex-1 text-center">
              or do it via other accounts
            </p>
            <img src={hr} alt="hr" className="w-1/6" />
          </div>
          <div className="flex justify-center gap-x-[32px] mt-[24px]">
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <img
                  src={googleIcon}
                  alt="googleIcon"
                  className="size-[23px]"
                />
              </div>
            </a>
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <img src={appleIcon} alt="appleIcon" className="size-[23px]" />
              </div>
            </a>
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <img
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="size-[23px]"
                />
              </div>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp