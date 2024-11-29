import React from 'react'
import AboutI from '../../assets/AboutImage.png'
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import Mission from './Mission'
import Vision from './Vision'
import WhyUs from './WhyUs'
import Who from './Who'
import Message from './Message'
import ellipse from '../../assets/Ellipse 5.png'

function About() {
  return (
    <div>
    <Navbar />
      <div className='flex flex-col justify-center items-center p-2 mt-3'>
        <img src={ellipse} alt="" className='absolute top-10 -z-40 right-0'/>
        <div className='mb-8 flex flex-col justify-center items-center'>
            <h2 className='font-[Inter] text-[28px] md:text-[36px] leading-[43.2px] text-[#000] text-4xl font-bold'>
            Your <span className="font-[Inter] text-[#417BEB] text-[28px] md:text-[36px] font-bold leading-[43.2px]"> Health</span>, Our<span className="font-[Inter] text-[#417BEB] text-[28px] md:text-[36px] font-bold leading-[43.2px]"> priority</span>
            </h2>
            <p className='font-[Inter] md:w-[672px] text-[14px] md:text-[16px] font-normal leading-[23.2px] text-[#969696] md:text-center'>
            We are committed to making healthcare accessible, affordable, and tailored to your needs. At E-MEDATT, your well-being comes first—delivering trusted care whenever and wherever you need it.
            </p>
        </div>
        <div >
          <img src={AboutI} alt="" className='w-[361px] md:w-[1100px] h-[361px] md:h-[484px]'/>
        </div>
      </div>
      <Mission />
      <Vision/>
      <WhyUs/>
      <Who />
      <Message />
      <Footer />
    </div>
  )
}

export default About
