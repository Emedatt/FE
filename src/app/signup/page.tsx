"use client";
import React, { useState, useReducer } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import { LeftAuthSignUp } from "@/_components/LeftAuthSignUp";
import createAccountProgress from "../../../public/create-account-progress.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import hr from "../../../public/hr.svg";
import googleIcon from "../../../public/google-icon.svg";
import appleIcon from "../../../public/apple-icon.svg";
import facebookIcon from "../../../public/facebook-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FormState {
  role: {
    value: string;
    error: { message: string; color: string } | null;
  };
  fullName: {
    value: string;
    error: { message: string; color: string } | null;
  };
  email: {
    value: string;
    error: { message: string; color: string } | null;
  };
  password: {
    value: string;
    error: { message: string; color: string } | null;
  };
  confirmPassword: {
    value: string;
    error: { message: string; color: string } | null;
  };
  termsAndCondition: {
    value: boolean;
    error: { message: string; color: string } | null;
  };
  isValid?: boolean;
}

interface FormAction {
  type: string;
  payLoad: string | boolean;
}

const initialState: FormState = {
  role:{
    value : " ",
    error: null
  },
  fullName:{
    value : " ",
    error : null,
  },
  email:{
    value : " ",
    error : null,
  },
  password:{
    value : " ",
    error : null,
  },
  confirmPassword:{
    value : " ",
    error : null,
  },
  termsAndCondition:{
    value: false,
    error: null
  }
}

const formReducer = (state: FormState, action: FormAction): FormState => {
  let newState;
  switch (action.type) {
    case "ROLE": {
      const roleError = validateRole(action.payLoad);
      newState = {
        ...state,
        role: {
          ...state.role,
          value: action.payLoad,
          error: roleError,
        },
      };
      break;
    }
    case "fullName": {
      const fullNameError = validateFullName(action.payLoad);
      newState = {
        ...state,
        fullName: {
          ...state.fullName,
          value: action.payLoad,
          error: fullNameError,
        },
      };
      break;
    }
    case "EMAIL": {
      const emailError = validateEmail(action.payLoad);
      newState = {
        ...state,
        email: {
          ...state.email,
          value: action.payLoad,
          error: emailError,
        },
      };
      break;
    }
    case "PASSWORD": {
      const passwordError = validatePassword(action.payLoad);
      newState = {
        ...state,
        password: {
          ...state.password,
          value: action.payLoad,
          error: passwordError,
        },
      };
      break;
    }
    case "confirmPassword": {
      const confirmPasswordError = validateConfirmPassword(action.payLoad, state.password.value);
      newState = {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          value: action.payLoad,
          error: confirmPasswordError,
        },
      };
      break;
    }
    case "termsAndCondition": {
      const termsError = validateTermsAndCondition(action.payLoad);
      newState = {
        ...state,
        termsAndCondition: {
          ...state.termsAndCondition,
          value: action.payLoad,
          error: termsError,
        },
      };
      break;
    }
    default:
      newState = state;
  }
  // Check if all fields are valid
  const isValid =
    newState.role.error?.color === "green" &&
    newState.fullName.error?.color === "green" &&
    newState.email.error?.color === "green" &&
    newState.password.error?.color === "green" &&
    newState.confirmPassword.error?.color === "green" &&
    newState.termsAndCondition.error?.color === "green";
  return { ...newState, isValid };
}

const validateRole = (role: string) => {
  if (!role || role === "") return { message: "Please select a role", color: "red" };
  return { message: "Role is valid", color: "green" };
}
const validateFullName=(fullName:string)=>{
  if(!fullName) return { message: "Enter your full name", color: "red" };
  return { message: "Full name is valid", color: "green" };
}
const validateEmail = (email: string) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) return { message: "Email field cannot be blank", color: "red" };
  if (!emailRegex.test(email)) return { message: "Enter a valid email address", color: "red" };
  return { message: "Email is valid", color: "green" };
}
const validatePassword = (password: string) => {
  if (!password) return { message: "Password field cannot be blank", color: "red" };
  if (password.length < 6) return { message: "Password must be at least 8 characters", color: "red" };
  return { message: "Password is valid", color: "green" };
}
const validateTermsAndCondition = (termsAndCondition: string) => {
  if (!termsAndCondition) return { message: "You must agree to the terms and condition before signing up", color: "red" };
  return { message: "Terms accepted", color: "green" };
}
const validateConfirmPassword = (confirmPassword: string, password: string) => {
  if (!confirmPassword) return { message: "Confirm password cannot be blank", color: "red" };
  if (confirmPassword !== password) return { message: "Password mismatch", color: "red" };
  return { message: "Passwords match", color: "green" };
}



const SignUp = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [toggleEye, setToggleEye] = useState(true);
  const router = useRouter();

  const handleRoleChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
   dispatch({type:"ROLE", payLoad:e.target.value.trim()})
  }
  const handlefullNameChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
   dispatch({type:"fullName", payLoad:e.target.value.trim()})
  }
  const handleEmailChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
   dispatch({ type:"EMAIL", payLoad:e.target.value.trim()})
  }
  const handlePasswordChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
   dispatch({type:"PASSWORD", payLoad:e.target.value.trim()})
  }
  const handleConfirmPasswordChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
   dispatch({type:"confirmPassword", payLoad:e.target.value.trim()})
  }
  const handleTermsAndConditionChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
   dispatch({type:"termsAndCondition", payLoad:e.target.checked})
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.isValid) {
      alert("Please fill all fields correctly and accept terms before submitting.");
      return;
    }
    // Send data to backend here
    // Example: fetch(...)
    alert("Form is valid! Ready to send to backend.");
  };
  
  return (
    <div className="flex h-[1400px] items-center max-w-[1440px] mx-auto">
      <LeftAuthSignUp image={createAccountProgress} />
      <div className="px-[20px] 1/2 max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-[32px] font-bold text-[#323232] text-center mb-[16px]">
            Create Your Account!
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            Sign up to access personalized healthcare.
          </p>

          {/* Role Field */}
          <div className="mt-[60px]">
            <label
              htmlFor="role"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Role
            </label>
            <select
              id="role"
              className={`w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 outline-none text-[#969696] bg-white ${state.role.error?.color === 'green' ? 'border-green-500' : state.role.error?.color === 'red' ? 'border-red-500' : 'border-[#DCDCDC]'}`}
              onChange={handleRoleChange}
            >
              <option value="">Choose your role</option>
              <option value="patient">Patient</option>
              <option value="physician">Physician</option>
              {/* Changed from "doctor" */}
            </select>
            {state.role.error && <p className={`text-${state.role.error.color}-500 text-sm mt-1`}>{state.role.error.message}</p>}
          </div>

          {/* Full Name Field */}
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="fullName"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Full Name
            </label>
            <input
              id="fullName"
              placeholder="Enter full name"
              className={`border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none ${state.fullName.error?.color === 'green' ? 'border-green-500' : state.fullName.error?.color === 'red' ? 'border-red-500' : ''}`}
              value = {state.fullName.value}
              onChange={handlefullNameChange}
            />
            {state.fullName.error && <p className={`text-${state.fullName.error.color}-500 text-sm mt-1`}>{state.fullName.error.message}</p>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="email"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="yourname@example.com"
              className={`border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none ${state.email.error?.color === 'green' ? 'border-green-500' : state.email.error?.color === 'red' ? 'border-red-500' : ''}`}
              value = {state.email.value}
              onChange={handleEmailChange}
            />
            {state.email.error && <p className={`text-${state.email.error.color}-500 text-sm mt-1`}>{state.email.error.message}</p>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="password"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                id="password"
                type={toggleEye ? "password" : "text"}
                placeholder="Enter password"
                className={`border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none w-full ${state.password.error?.color === 'green' ? 'border-green-500' : state.password.error?.color === 'red' ? 'border-red-500' : ''}`}
                value ={state.password.value}
                onChange={handlePasswordChange}
              />
              {toggleEye ? (
                <FaEye
                  onClick={() => setToggleEye(!toggleEye)}
                  className="absolute top-[18px] right-[18px] cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setToggleEye(!toggleEye)}
                  className="absolute top-[18px] right-[18px] cursor-pointer"
                />
              )}
              {state.password.error && <p className={`text-${state.password.error.color}-500 text-sm mt-1`}>{state.password.error.message}</p>}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col mt-[32px]">
            <label
              htmlFor="confirmPassword"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                id="confirmPassword"
                type={toggleEye ? "password" : "text"}
                placeholder="Confirm password"
                className={`border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none w-full ${state.confirmPassword.error?.color === 'green' ? 'border-green-500' : state.confirmPassword.error?.color === 'red' ? 'border-red-500' : ''}`}
                value = {state.confirmPassword.value}
                onChange={handleConfirmPasswordChange}
              />
              {toggleEye ? (
                <FaEye
                  onClick={() => setToggleEye(!toggleEye)}
                  className="absolute top-[18px] right-[18px] cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setToggleEye(!toggleEye)}
                  className="absolute top-[18px] right-[18px] cursor-pointer"
                />
              )}
              {state.confirmPassword.error && <p className={`text-${state.confirmPassword.error.color}-500 text-sm mt-1`}>{state.confirmPassword.error.message}</p>}
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="mt-[32px]">
            <input
              id="acceptTerms"
              type="checkbox"
              className={`accent-[#417BEB] ${state.termsAndCondition.error?.color === 'green' ? 'border-green-500' : state.termsAndCondition.error?.color === 'red' ? 'border-red-500' : ''}`}
              checked = {state.termsAndCondition.value}
              onChange={handleTermsAndConditionChange}
            />
            <label
              htmlFor="acceptTerms"
              className="max-w-[398px] text-[#969696] ml-[10px] text-[12px]"
            >
              By creating an account means you agree to the{" "}
              <Link href="terms" className="!text-[#417BEB]">
                Terms and Conditions
              </Link>
              , and our{" "}
              <Link href="privacy" className="!text-[#417BEB]">
                Privacy Policy
              </Link>
            </label>
            {state.termsAndCondition.error && <p className={`text-${state.termsAndCondition.error.color}-500 text-sm mt-1`}>{state.termsAndCondition.error.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[20px] cursor-pointer"
          >
            Create Account
          </button>

          {/* Social Login Section */}
          <div className="flex items-center justify-between w-full mt-[20px]">
            <Image src={hr} alt="hr" className="w-1/6" />
            <p className="font-medium text-[12px] text-[#969696] flex-1 text-center">
              or do it via other accounts
            </p>
            <Image src={hr} alt="hr" className="w-1/6" />
          </div>
          <div className="flex justify-center gap-x-[32px] mt-[24px]">
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <Image
                  src={googleIcon}
                  alt="googleIcon"
                  className="size-[23px]"
                />
              </div>
            </a>
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <Image
                  src={appleIcon}
                  alt="appleIcon"
                  className="size-[23px]"
                />
              </div>
            </a>
            <a href="" className="cursor-pointer">
              <div className="size-[52px] p-[14px] shadow-md rounded-[50%]">
                <Image
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
};

export default SignUp;
