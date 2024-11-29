import React from 'react'
import usImageOne from '../../assets/usImageOne.png';
import usImageTwo from '../../assets/usImageTwo.png';
import usImageThree from '../../assets/usImageThree.png';

function Who() {
  return (
    <div>
               <h1 className='font-bold text-center'>Who Are We?</h1>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center px-5'>
         <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <img src={usImageOne} alt="" className='w-full h-[50%] shadow-[0px_1px_3px_0px_#0000001A]' />
           <div className='mt-10'>
             <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
             Our team
             </h3>
             <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
             Our diverse team consists of board-certified health professionals, technology experts, and healthcare innovators, all passionate about transforming healthcare access in Nigeria
             </p>
           </div>
         </div>

         <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <img src={usImageTwo} alt="" className='w-full h-[50%] shadow-[0px_1px_3px_0px_#0000001A]' />
           <div className='mt-10'>
             <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
             Our Expertise
             </h3>
             <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
             With years of experience in telehealth, medical technology, and patient management, we specialize in providing tailored healthcare services that meet the unique needs of our communities
             </p>
           </div>
         </div>

         <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <img src={usImageThree} alt="" className='w-full h-[50%] shadow-[0px_1px_3px_0px_#0000001A]' />
           <div className='mt-10'>
             <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
             Our commitment
             </h3>
             <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
             We are dedicated to fostering trust and transparency in every interaction, ensuring that our patients receive personalized care and support throughout their healthcare journey
             </p>
           </div>
         </div>
         </div>
    </div>
  )
}

export default Who
