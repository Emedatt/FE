"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { accordion } from './data';
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="xl:flex">
      <section className="px-[40px] py-[48px] text-white bg-[#417BEB] text-center xl:h-[535px] xl:w-[522px] xl:pt-[143px] xl:pl-[104px]
      xl:text-left
      ">
        <h1 className="font-bold text-[20px]">FAQs</h1>
        <p className="text-[14px] mt-[20px] max-w-[500px] mx-auto xl:max-w-[300px] xl:mx-0">
          Here, we've compiled answers to some of the most common inquiries to
          help you navigate your online consultation experience with ease and
          confidence.
        </p>
        <Link href="/">
          <button
            className="w-full max-w-[200px] py-[12px] rounded-[16px] bg-white text-[#323232] flex gap-x-[8px]
            justify-center border-1 border-solid border-[#DCDCDC] xl:w-[163px] xl:text-[14px]
          items-center max-xl:mx-auto mt-[20px]"
          >
            Learn more
            <MdArrowOutward style={{ fontSize: "16px", color: "#323232" }} />
          </button>
        </Link>
      </section>
      <section className='mt-[24px] flex flex-col gap-y-[24px] items-center xl:justify-center xl:items-center xl:mx-auto'>
        {
          accordion.map(({id, title, titleStyles, text, textStyles}) => {
            return (
              <div
                key={id}
                className="p-[10px] border-1 border-solid border-[#CACACA] max-xl:max-w-[300px] rounded-[12px] xl:w-[500px]"
              >
                <div className="flex justify-between items-center">
                  <h2 className={titleStyles}>{title}</h2>
                  {openIndex === id ? (
                    <IoCloseSharp
                      style={{ fontSize: "20px", color: "#323232" }}
                      onClick={() => toggleAccordion(id)}
                    />
                  ) : (
                    <FaPlus
                      style={{ fontSize: "16px", color: "#323232" }}
                      onClick={() => toggleAccordion(id)}
                    />
                  )}
                </div>
                {openIndex === id && (
                  <div className="text-[#323232] text-[14px] bg-white pt-[10px]">
                    <p className={textStyles}>{text}</p>
                  </div>
                )}
              </div>
            );
          })
        }
      </section>
    </div>
  );
}

export default FAQs;