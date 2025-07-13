"use client";
import React, { useState, useRef, useEffect } from "react";
import { LeftAuthSignUp } from "@/_components/LeftAuthSignUp";
import Link from "next/link";
import leftArrow from "../../../public/left-arrow.svg";
import verifyAccountSignup from "../../../public/verify-account-signup.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq, and, gt } from "drizzle-orm";

const CheckEmailSignUp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const [time, setTime] = useState(300); // 5 minutes

  // Handle code input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    if (e.target.value.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Countdown timer
  useEffect(() => {
    if (time === 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");

    try {
      // Verify code against database
      const [user] = await db
        .select()
        .from(users)
        .where(
          and(
            eq(users.email, email),
            eq(users.verificationCode, fullCode),
            gt(users.codeExpiresAt, new Date())
          )
        );

      if (!user) {
        setError("Invalid or expired code");
        return;
      }

      // Clear verification code
      await db
        .update(users)
        .set({ verificationCode: null, codeExpiresAt: null })
        .where(eq(users.id, user.id));

      // Redirect based on user role
      if (user.role === "patient") {
        router.push("/patient-signup");
      } else if (user.role === "physician") {
        router.push("/doctor-signup");
      } else {
        router.push("/signup"); // Fallback
      }
    } catch (err) {
      setError("Verification failed");
      console.error(err);
    }
  };
  const handleResend = async () => {
    try {
      const res = await fetch("/api/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role: "patient" }), // or get role from elsewhere
      });

      if (!res.ok) throw new Error("Failed to resend");

      setTime(300); // Reset timer
      setError("");
    } catch (err) {
      setError("Could not resend code. Please try again.");
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-[1440px] mx-auto flex h-[1400px] items-center">
      <LeftAuthSignUp image={verifyAccountSignup} />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-[32px] font-bold text-[#323232] text-center">
            Verify Email
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            A 6-digit code was sent to{" "}
            {email
              ? `your email ${email.replace(/(.{2}).+@/, "$1***@")}`
              : "your email"}
            . Check email and enter code to continue
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
                  if (el) inputRefs.current[index] = el;
                }}
                className="appearance-none border border-gray-300 p-2 rounded-md text-[#323232] text-center sm:size-[62px] h-[40px] w-1/6"
                required
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
            Verify
          </button>
          <p className="text-[14px] text-center mt-[42px] text-[#969696]">
            Code expires in {formatTime(time)}
          </p>
          <Link
            href="/signup"
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

export default CheckEmailSignUp;
