import React from 'react'
import foreveryone1 from '../../assets/foreveryone1.png';
import foreveryone2 from '../../assets/foreveryone2.png';
import foreveryone3 from '../../assets/foreveryone3.png';
import foreveryone4 from '../../assets/foreveryone4.png';
import foreveryone5 from '../../assets/foreveryone5.png';
import foreveryone6 from '../../assets/foreveryone6.png';

const Mission = () => {
  return (
    <section className='w-full py-8'>
    <div className='w-full max-w-[1312px] flex flex-col lg:justify-between items-center mx-auto px-4 lg:px-0'>
      <div className='mb-8 mt-11 w-[21rem] md:w-[766px] flex flex-col justify-center items-center'>
        <h2 className='font-[Inter] text-[25px] md:text-[36px] leading-[25px] md:leading-[43.2px] text-[#000] text-4xl font-bold'>
          Healthcare for <span className="font-[Inter] text-[#417BEB] text-[25px] md:text-[36px] font-bold leading-[25px] md:leading-[43.2px]"> Everyone</span>,<span className="font-[Inter] text-[#417BEB] text-[25px] md:text-[36px] font-bold leading-[25px] md:leading-[43.2px]"> Wherever</span> You Are
        </h2>
        <p className='font-[Inter] w-[460px] text-[14px] md:text-[16px] font-normal leading-[23.2px] text-[#969696] text-center mt-1'>
          E-MEDATT makes healthcare accessible for different groups, providing tailored care to meet your specific needs.
        </p>
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
         
          <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#DBEFDC]">
              <img src={foreveryone1} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
            </div>
            <div className='mt-10'>
              <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
              Chronic Disease Patients
              </h3>
              <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
              Manage your health with regular check-ups and support to ensure you stay on track with your treatment, because your well-being is our top priority.
              </p>
            </div>
          </div>

          <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#D9E5FB]">
              <img src={foreveryone2} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
            </div>
            <div className='mt-10'>
              <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
              Elderly
              </h3>
              <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
              Receive compassionate care right at home by using our user-friendly telehealth services, allowing you to rest easy knowing expert help is just a call away.
              </p>
            </div>
          </div>

          <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#FFF3CD]">
              <img src={foreveryone3} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
            </div>
            <div className='mt-10'>
              <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
              Working Professionals
              </h3>
              <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
               Schedule flexible appointments that fit into your busy life, allowing you to prioritize your health without hassle and stay on top of your well-being without missing a beat.
              </p>
            </div>
          </div>

          <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#FFE2DF]">
              <img src={foreveryone4} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
            </div>
            <div className='mt-10'>
              <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
              Mental Health Patients
              </h3>
              <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
               Access confidential counseling and support at your convenience, providing you with the tools to improve your mental well-being and first step towards a brighter tomorrow.
              </p>
            </div>
          </div>

          <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#F4E0FF]">
              <img src={foreveryone5} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
            </div>
            <div className='mt-10'>
              <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
              Young Adults
              </h3>
              <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
               You can access high-quality healthcare from the comfort of your home and connect with trusted doctors whenever you need them.
              </p>
            </div>
          </div>

          <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
            <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#DBEFDC]">
              <img src={foreveryone6} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
            </div>
            <div className='mt-10'>
              <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
               Parents
              </h3>
              <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
              Get instant access to pediatric care to ensure your child(ren) receive the best possible attention, as we’re here to support your family's health every step of the way.
              </p>
            </div>
          </div>

      </div>
    </div>
  </section>
  
  )
}

export default Mission;