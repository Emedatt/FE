import React from 'react'
import ourvision from '../../assets/ourvision.png'

function Vision() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center p-2 mt-10'>
      <div className='flex-1'>
        <img src={ourvision} alt="" className='w-full h-[361px] lg:w-[627px] lg:h-[484px]'/>
      </div>

      <div className='flex-1 flex flex-col items-center justify-center px-10'>
        <div>
          <h1 className='font-inter font-bold text-[20px] leading-[20px] text-left'>
              Our Vision
          </h1>
          <p className='font-inter text-[14px] leading-[20.3px] text-[#969696] lg:w-[25rem]'>
          We envision a world where healthcare is not just a privilege but a right. Our goal is to make professional healthcare available at the tap of a button, ensuring that no one is left behind when it comes to managing their health.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Vision
