"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LeftAuthSignUp } from "@/_components/LeftAuthSignUp";
import createAccountProgress from "../../../public/create-account-progress.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import hr from "../../../public/hr.svg";
import googleIcon from "../../../public/google-icon.svg";
import appleIcon from "../../../public/apple-icon.svg";
import facebookIcon from "../../../public/facebook-icon.svg";
import Image from "next/image";

// Define Zod schema
const signUpSchema = z
  .object({
    role: z.string().min(1, "Please select your role"),
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [toggleEye, setToggleEye] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data: SignUpFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="flex h-[1400px] items-center max-w-[1440px] mx-auto">
      <LeftAuthSignUp image={createAccountProgress} />
      <div className="px-[20px] 1/2 max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("role")}
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="">Choose your role</option>
              <option value="physician">Physician</option>
              <option value="patient">Patient</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
            )}
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
              {...register("fullName")}
              placeholder="Enter full name"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
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
              {...register("email")}
              placeholder="yourname@example.com"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
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
                {...register("password")}
                placeholder="Enter password"
                className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none w-full"
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
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
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
                {...register("confirmPassword")}
                placeholder="Confirm password"
                className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none w-full"
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
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
            {!errors.confirmPassword &&
              password &&
              confirmPassword &&
              password === confirmPassword && (
                <p className="text-green-500 text-sm mt-1">Passwords match!</p>
              )}
          </div>

          {/* Terms Checkbox */}
          <div className="mt-[32px]">
            <input
              id="acceptTerms"
              type="checkbox"
              {...register("acceptTerms")}
              className="accent-[#417BEB]"
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
            {errors.acceptTerms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.acceptTerms.message}
              </p>
            )}
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
