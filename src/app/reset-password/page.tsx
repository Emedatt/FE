"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { LeftAuth } from "@/_components/LeftAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { db } from "@//db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { verifyResetToken, invalidateResetToken } from "@/lib/auth";

const ResetPassword = () => {
  const [toggleEye, setToggleEye] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordMatch(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    checkPasswordMatch(password, newConfirmPassword);
  };

  const checkPasswordMatch = (password: string, confirmPassword: string) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isMatch) {
      setError("Passwords do not match");
      return;
    }

    const token = searchParams.get("token");
    if (!token) {
      setError("Invalid reset link");
      return;
    }

    setIsLoading(true);

    try {
      // Verify the token
      const tokenData = await verifyResetToken(token);
      if (!tokenData) {
        throw new Error("Invalid or expired token");
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Update user password - now types will match
      await db
        .update(users)
        .set({ password: hashedPassword })
        .where(eq(users.id, parseInt(tokenData.userId))); // No more type error

      // Invalidate the used token
      await invalidateResetToken(tokenData.tokenId);

      router.push("/reset-successful");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Reset failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto flex h-[1400px] items-center">
      <LeftAuth />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form onSubmit={handleSubmit} className="">
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
              type={toggleEye ? "password" : "text"}
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
                type={toggleEye ? "password" : "text"}
                id="passwordTwo"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                placeholder="Confirm password"
                className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] border-solid border-2 outline-none w-full"
              />
              <button
                type="button"
                onClick={() => setToggleEye(!toggleEye)}
                className="absolute top-[18px] right-[18px]"
              >
                {toggleEye ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {isMatch && confirmPassword.length > 0 && (
              <p className="text-green-500 text-sm">Passwords match!</p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isMatch || isLoading}
            className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[60px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
