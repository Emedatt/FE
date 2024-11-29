import React, { useState } from 'react';
import more from '../../assets/Frame.png'; // Expand icon
import close from '../../assets/FrameClose.png'; // Close icon
import LinkArrow from "../../assets/LinkArrow.png";


function Faq() {
  // State to track which FAQ is expanded
  const [activeFaq, setActiveFaq] = useState(null);

  const handleFaq = (index) => {
    // Toggle the visibility of the clicked FAQ
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className='w-full flex flex-col md:flex-row justify-between'>
      <div className='w-full h-[280px] md:w-[32.625rem] md:h-[33.4375rem] p-[8.9375rem] pr-[3.9375rem] pb-[10.875rem] pl-[6.5rem] gap-[0.625rem] bg-[#417BEB] flex flex-col justify-center'>
        <h2 className='font-inter text-[#fff] text-[2.25rem] font-extrabold leading-[2.5rem] text-left'>
          FAQs
        </h2>
        <p className="font-inter text-[#fff] text-[1rem] font-regular leading-[1.5rem] text-left">
          Here, we’ve compiled answers to some of the most common inquiries to help you navigate your online consultation experience with ease and confidence.
        </p>
        <button className="w-[137px] h-[44px] flex justify-center items-center p-[15px] px-[18px] gap-[8px] rounded-[16px] bg-[#fff]">
          <p className="font-inter text-[14px] font-semibold leading-[20px] text-center text-[#323232] text-underline-custom">
           Learn more
          </p>
          <img src={LinkArrow} alt="" />
        </button>
      </div>
      <div className='flex-1 flex flex-col justify-center items-center w-full md:w-[36.5rem] h-[33.4375rem] p-3 md:p-[4rem] gap-[1.5rem]'>
        {/* FAQ Item 1 */}
        <div className="w-[360px] md:w-[584px] p-[20px] pl-[24px] gap-[10px] rounded-[12px] border border-[#DCDCDC] bg-white">
          <div className='flex justify-between'>
            <p className="font-inter text-[1rem] font-semibold leading-[1.45rem] text-left text-[#323232]">
              How do I schedule an appointment?
            </p>
            <img
              src={activeFaq === 0 ? close : more}  // Toggle between 'more' and 'close' based on FAQ state
              onClick={() => handleFaq(0)}
              className='w-[16px] h-[16px] cursor-pointer'
              alt={activeFaq === 0 ? "close" : "expand"}
            />
          </div>
          {activeFaq === 0 && (
            <div className='mt-2'>
              <p className="font-inter text-[0.875rem] font-normal leading-[1.268rem] text-left text-[#969696]">
                To schedule an appointment, you can visit our online portal and select a time that works best for you.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="w-[360px] md:w-[584px] p-[20px] pl-[24px] gap-[10px] rounded-[12px] border border-[#DCDCDC] bg-white">
          <div className='flex justify-between'>
            <p className="font-inter text-[1rem] font-semibold leading-[1.45rem] text-left text-[#323232]">
              What types of consultations are available?
            </p>
            <img
              src={activeFaq === 1 ? close : more}  // Toggle between 'more' and 'close' based on FAQ state
              onClick={() => handleFaq(1)}
              className='w-[16px] h-[16px] cursor-pointer'
              alt={activeFaq === 1 ? "close" : "expand"}
            />
          </div>
          {activeFaq === 1 && (
            <div className='mt-2'>
              <p className="font-inter text-[0.875rem] font-normal leading-[1.268rem] text-left text-[#969696]">
                We offer a wide range of consultations, including primary care, mental health, dermatology, pediatrics, and more. You can browse specialties on EMedatt to find the right fit for your needs.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="w-[360px] md:w-[584px] p-[20px] pl-[24px] gap-[10px] rounded-[12px] border border-[#DCDCDC] bg-white">
          <div className='flex justify-between'>
            <p className="font-inter text-[1rem] font-semibold leading-[1.45rem] text-left text-[#323232]">
              Is the consultation secure and private?
            </p>
            <img
              src={activeFaq === 2 ? close : more}  // Toggle between 'more' and 'close' based on FAQ state
              onClick={() => handleFaq(2)}
              className='w-[16px] h-[16px] cursor-pointer'
              alt={activeFaq === 2 ? "close" : "expand"}
            />
          </div>
          {activeFaq === 2 && (
            <div className='mt-2'>
              <p className="font-inter text-[0.875rem] font-normal leading-[1.268rem] text-left text-[#969696]">
                Yes, all our consultations are conducted using encrypted communication channels to ensure privacy and security.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div className="w-[360px] md:w-[584px] p-[20px] pl-[24px] gap-[10px] rounded-[12px] border border-[#DCDCDC] bg-white">
          <div className='flex justify-between'>
            <p className="font-inter text-[1rem] font-semibold leading-[1.45rem] text-left text-[#323232]">
              Can I change or cancel my appointment?
            </p>
            <img
              src={activeFaq === 3 ? close : more}  // Toggle between 'more' and 'close' based on FAQ state
              onClick={() => handleFaq(3)}
              className='w-[16px] h-[16px] cursor-pointer'
              alt={activeFaq === 3 ? "close" : "expand"}
            />
          </div>
          {activeFaq === 3 && (
            <div className='mt-2'>
              <p className="font-inter text-[0.875rem] font-normal leading-[1.268rem] text-left text-[#969696]">
                Yes, you can change or cancel your appointment directly through our portal up to 24 hours before the scheduled time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
