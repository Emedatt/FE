"use client"
import React, { useState } from "react";
import doctorFinish from "../../../public/doctor-finish.svg";
import { LeftAuthSignUp } from "@/_components/LeftAuthSignUp";
import Link from "next/link";
import leftArrow from "../../../public/left-arrow.svg";
import upload from "../../../public/upload.svg";
import Image from 'next/image';
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { users, doctorProfile } from '@/db/schema';
const DoctorSignUp = () => {

  const router = useRouter();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      gender: "",
      areaOfSpecialization: "",
      yearsOfExperience: "",
      professionalBio: "",
      validID: "",
      idDocument: "",
    });

    // In your handleSubmit function:
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          // 1. Create user first
          const hashedPassword = await bcrypt.hash(formData.password, 10);
          const [user] = await db
            .insert(users)
            .values({
              email: formData.email,
              password: hashedPassword,
              role: "patient",
            })
            .returning({ id: users.id });
    
          // 2. Insert patient profile with proper typing
          await db.insert(doctorProfile).values({
            userId: user.id,
            gender: formData.gender, // No need for type assertion if schema matches
            areaOfSpecialization: formData.areaOfSpecialization,
            yearsOfExperience: formData.yearsOfExperience,
            professionalBio: formData.professionalBio,
            validID: formData.validID,
            idDocument: formData.idDocument,
          });
    
          router.push("/allset");
        } catch (error) {
          console.error("Signup failed:", error);
        }
      };
  
  return (
    <div className="max-w-[1440px] mx-auto flex h-[1400px] items-center">
      <LeftAuthSignUp image={doctorFinish} />
      <div className="px-[20px] w-full max-w-[424px] mx-auto xl:w-1/2 h-[80%] xl:h-[70%] mt-[100px]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-[32px] font-bold text-[#323232] text-center mb-[16px]">
            You Are Almost There!
          </h1>
          <p className="text-[16px] text-[#969696] text-center">
            Complete your profile to finish setting up your account.
          </p>
          <div className="mt-[60px]">
            <label
              htmlFor="gender"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              required
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="" disabled>
                Choose your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mt-[32px]">
            <label
              htmlFor="area-of-specialization"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Area of Specialization
            </label>
            <select
              name="area-of-specialization"
              id="area-of-specialization"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  areaOfSpecialization: e.target.value,
                })
              }
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            >
              <option value="" disabled>
                e.g Optician
              </option>
              <option value="physician">Male</option>
              <option value="patient">Female</option>
            </select>
          </div>
          <div className="mt-[32px]">
            <label
              htmlFor="years-of-experience"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Years of Experience
            </label>
            <input
              name="years-of-experience"
              id="years-of-experience"
              required
              onChange={(e) =>
                setFormData({ ...formData, yearsOfExperience: e.target.value })
              }
              className="w-full py-[14px] px-[16px] text-[14px] rounded-[12px] border-solid border-2 border-[#DCDCDC] text-[#969696] bg-white"
            />
          </div>
          <div className="mt-[32px]">
            <label
              htmlFor="additional-health-information"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Professional Bio
            </label>
            <textarea
              name="professional-bio"
              id="professional-bio"
              className="border-[#DCDCDC] py-[14px] px-[16px] rounded-[12px] text-[#969696] text-[14px] caret-[#969696] 
              border-solid border-2
            outline-none appearance-none w-full"
              placeholder="Tell us about yourself"
              cols={30}
              rows={5}
              onChange={(e) =>
                setFormData({ ...formData, professionalBio: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mt-[32px] flex flex-col">
            <label
              htmlFor="upload-ID"
              className="text-[14px] text-[#323232] mb-[10px]"
            >
              Upload valid I.D
            </label>
            <label
              htmlFor="upload-ID"
              className="bg-white py-4 font-semibold text-[#323232] w-full rounded-lg cursor-pointer border-2 border-[#DCDCDC]
              flex items-center justify-center gap-2"
            >
              <Image src={upload} alt="Upload" className="size-[16px]" />
              <span className="text-[14px] text-[#323232]">
                Upload document
              </span>
            </label>
            <input
              type="file"
              id="upload-ID"
              className="hidden"
              onChange={(e) =>
                setFormData({ ...formData, idDocument: e.target.value })
              }
            />
          </div>
          <Link href="/allset">
            <button
              type="submit"
              className="bg-[#417BEB] py-[16px] font-semi-bold text-white w-full rounded-[16px] mt-[120px] cursor-pointer mt-[60px]"
            >
              Finish Up
            </button>
          </Link>
        </form>
        <Link
          href="/check-email-signup"
          className="flex justify-center items-center gap-x-[10px] h-[40px] mt-[48px]"
        >
          <Image src={leftArrow} alt="left-arrow" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default DoctorSignUp;

