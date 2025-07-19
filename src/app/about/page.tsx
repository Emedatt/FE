'use client'
import React from 'react'
import { useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import aboutImage1 from '../../../public/aboutImage1.png'
import aboutImage2 from '../../../public/aboutImage2.png'
import aboutImage3 from '../../../public/aboutImage3.png'
import aboutImage4 from '../../../public/aboutImage4.png'
import aboutImage5 from '../../../public/aboutImage5.png'
import aboutImage7 from '../../../public/aboutImage7.png'
import aboutImage8 from '../../../public/aboutImage8.png'
import {FaCheckCircle, FaTimesCircle} from 'react-icons/fa'
import {whyChooseUs} from  '@/_components/data'


const About = () => {
  const [message, setMessage] = useState<React.ReactNode>(" ")
  const [ formStatus, setFormStatus] = useState (false)
  const [responseType, setResponseType] = useState<'success' | 'error' | ''>('');
  

  const form= useRef<HTMLFormElement> (null);

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_quqi1bl', 'template_8lr859g', form.current as HTMLFormElement, {
        publicKey: 'MFTwAIYs_sv9fpNLk',
      })
      .then(
        () => {
          setFormStatus(true)
          setMessage(<><FaCheckCircle color="green" /> Mail sent successfully</>)
          setResponseType("success")
        },
        (error) => {
          setFormStatus(true)
          setMessage(<><FaTimesCircle color="red" /> Try again.... something went wrong</>)
          setResponseType("error")
        },
      );
  };
  
  return (
    <div>
      <section className = "text-center mb-12 py-12">
        <h1 className="text-4xl font-bold mb-4"> Your <span className="text-blue-500"> Health</span>, Our <span className="text-blue-500">Priority</span></h1>
        <p className='text-lg text-gray-600 mb-8 w-auto mx-auto lg:w-[550]'  >
          We are commited to make health care accessible, affordable and tailored to your needs,
          At, E-MEDATT, your well-being comes first-delivering trusted care whenever and whenever you need it.
        </p>
        {/* image below */}
        <Image
          src={aboutImage1}
          alt="image of doctors"
          className="mx-auto w-3/4 h-auto rounded-lg shadow-lg"
        />
      </section>
      {/* mission section */}
      <section className="relative bg-[#f9fcff] py-15 px-4 sm:px-8 md:px-16 flex flex-col items-center justify-center overflow-x-hidden">
        <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto min-h-[350px]">
          {/* Text box - overlaps image on all screens */}
          <div
            className="z-20 bg-white bg-opacity-90 p-6 lg:p-8 rounded-md shadow-md w-11/12 sm:w-3/4 lg:w-[500px] text-center lg:text-left
            absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2
            lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0
            lg:mr-[-120px]"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              At E-Medatt, we believe everyone deserves access to quality healthcare,<br />
              no matter where they are. Our mission is to break down barriers to healthcare by
              offering easy-to-use online consultations with certified doctors, providing
              a seamless and convenient experience for all.
            </p>
          </div>
          {/* Image section - flush to the right edge on desktop */}
          <div className="relative w-full lg:w-2/3 h-64 sm:h-80 lg:h-[400px] flex-shrink-0 flex justify-end">
            <Image
              src={aboutImage2}
              alt="Our Mission"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
      {/* vision section */}
      <section className='py-10 px-4 flex items-center justify-space-between gap-10 flex-col md:flex-row'>
        <Image
          src={aboutImage3}
          alt="Our Vision"
          className='rounded-lg shadow-lg lg:w-1/2 w-full h-auto'
        />
        <div className='text-center lg:text-start mt-6 lg:w-[500px]'>
          <h2 className='text-2xl font-bold text-gray-800 mb-3'>Our Vision</h2>
          <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
            We envision a world where healthcare is not just a privilege, but a right.Our goal is to make professional
            healthcare available at the tap of a button, ensuring that no one is left behind when it comes to managing their health.
          </p>
        </div>
      </section>
      {/* why choose us section */}
       <section className='py-10 px-8 flex items-center justify-between gap-10 flex-col-reverse lg:flex-row'>
        <div className='text-center lg:text-start mt-6 lg:w-[500px]'>
          <h2 className='text-2xl font-bold text-gray-800 mb-3'>Why Chose Us?</h2>
          <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
            E-medatt provide instant access to quality healthcare services and seasoned professionals
            across the medical fields around the world. our system is refined to keep your health in check while maintaining a high level of privacy.          
          </p>
          <ul className='mt-4 space-y-2'>
            {whyChooseUs.map((item) => (
              <li key={item.id} className='flex gap-2 text-gray-700'>
                <Image src={item.icon} alt="tick icon" className='size-6' />
                {item.text}
              </li>
            ))}
          </ul>
          <button className='bg-blue-500 rounded-lg text-white px-5 py-2 text-center w-full lg:w-50 mt-8'> Get Started</button>
        </div>
        <Image
          src={aboutImage4}
          alt="Our Vision"
          className='rounded-lg shadow-lg lg:w-1/2 w-full h-auto'
        />
      </section>

      {/* who are we section */}

      <section className='bg-[#f0f4f8] py-10 px-4'>
        <h2 className='text-center font-bold text-2xl  text-gray-800 mb-3'> Who Are We</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
          <div>
            <Image
              src={aboutImage5}
              alt="Who Are We"
              className='rounded-lg shadow-lg w-full h-auto'
            />
            <h6 className='mt-3 text-lg font-bold'>Our Team</h6>
            <p className='mt-3 text-gray-600 text-sm md:text-base leading-relaxed'>
              Our diverse team consist of board-certified health professionals, technology experts,
              and healthcare innvators, all passionate about transforming healthcare access in Nigeria.
            </p>
          </div>
          <div>
            <Image
              src={aboutImage7}
              alt="Who Are We"
              className='rounded-lg shadow-lg w-full h-auto'
            />
            <h6 className='mt-3 text-lg font-bold'>Our Expertise</h6>
            <p className='mt-3 text-gray-600 text-sm md:text-base leading-relaxed'>
             With years of experience in telehealth, medical technology, and patient management,
             we specialize in providing tailored healthcare services that meet the unique needs of our communities.
            </p>
          </div>
          <div>
            <Image
              src={aboutImage8}
              alt="Who Are We"
              className='rounded-lg shadow-lg w-full h-auto'
            />
            <h6 className='mt-3 text-lg font-bold'>Our Commitment</h6>
            <p className='mt-3 text-gray-600 text-sm md:text-base leading-relaxed'>
              We are dedicated to fostering trust and transparency in every interaction,
              ensuring that our patients recieve personalized care and support thrughout their healthcare journey.
              
            </p>
          </div>
        </div>
      </section>
      {/* what you think */}
      <section className='py-12 px-12 bg-white flex items-center gap-8 lg:[gap-0] justify-between flex-col md:flex-row'>
        <div className='max-w-md lg:[w-1/2]'>
          <h1 className='font-bold text-2xl lg:text-5xl mb-6'>Let us Know What you think!</h1>
          <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
            We'd love to hear from you. Whether you have questions about our services,
            need assistance with your account, or just want to share feedback, our team is ready to assist.
          </p>
          <div className='flex items-center gap-3 mt-4 rounded-md p-4 border-gray-300 border'>
            <div className='bg-[#417BEB] p-3 rounded-lg' >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.48 4.47998H4.47998C3.37541 4.47998 2.47998 5.37541 2.47998 6.47998V18.48C2.47998 19.5845 3.37541 20.48 4.47998 20.48H20.48C21.5846 20.48 22.48 19.5845 22.48 18.48V6.47998C22.48 5.37541 21.5846 4.47998 20.48 4.47998Z" fill="white"/>
              <path d="M22.48 7.47998L13.51 13.18C13.2013 13.3734 12.8443 13.476 12.48 13.476C12.1157 13.476 11.7587 13.3734 11.45 13.18L2.47998 7.47998" stroke="#417BEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <p className='text-gray-600'>Email:</p>
              <p className='font-bold'> emedattcare@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-4 rounded-md p-4 border-gray-300 border'>
            <div className='bg-[#417BEB] p-3 rounded-lg'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4799 15.36V18.36C20.481 18.6385 20.424 18.9142 20.3124 19.1694C20.2009 19.4246 20.0372 19.6536 19.832 19.8419C19.6268 20.0302 19.3845 20.1735 19.1207 20.2627C18.8568 20.352 18.5773 20.3851 18.2999 20.36C15.2227 20.0257 12.2669 18.9742 9.66991 17.29C7.25374 15.7547 5.20525 13.7062 3.66991 11.29C1.97989 8.68124 0.928157 5.71103 0.599914 2.62004C0.574924 2.34351 0.607788 2.0648 0.696414 1.80166C0.785039 1.53853 0.927484 1.29673 1.11468 1.09166C1.30187 0.886591 1.52972 0.722748 1.7837 0.61056C2.03769 0.498373 2.31225 0.4403 2.58991 0.440038H5.58991C6.07522 0.435262 6.54571 0.607117 6.91368 0.923571C7.28165 1.24003 7.52199 1.67949 7.58991 2.16004C7.71654 3.1201 7.95136 4.06277 8.28991 4.97004C8.42446 5.32796 8.45358 5.71695 8.37382 6.09092C8.29406 6.46488 8.10878 6.80815 7.83991 7.08004L6.56991 8.35004C7.99347 10.8536 10.0664 12.9265 12.5699 14.35L13.8399 13.08C14.1118 12.8112 14.4551 12.6259 14.829 12.5461C15.203 12.4664 15.592 12.4955 15.9499 12.63C16.8572 12.9686 17.7998 13.2034 18.7599 13.33C19.2457 13.3986 19.6893 13.6432 20.0064 14.0175C20.3236 14.3918 20.4921 14.8696 20.4799 15.36Z" fill="white"/>
              </svg>
            </div>
            <div>
              <p className='text-gray-600'>phone:</p>
              <p className='font-bold'>(414) 687-5892</p>
            </div>
          </div>
        </div>
        <div className="max-w-md lg:[w-1/2] p-4 border border-gray-300 rounded-md">
          <form ref ={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                  type="text"
                  name="name"
                  placeholder="Ade John"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                  type="email"
                  name='email'
                  placeholder="example@youremail.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                  type="text"
                  name= "title"
                  placeholder=" Enter subject of message/mail"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                  rows={5}
                  name='message'
                  placeholder="Type your message here..."
                ></textarea>
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full lg:w-auto"
              type="submit"
            >
              Send Message
            </button>
            {formStatus && (
              <div style={{ color: responseType === 'success' ? 'green' : 'red' }}>
                {message}
              </div>
            )}
          </form>
        </div>
        
      </section>
       {/* what you think section, contains form, where users send message to email */}
    </div>
  )
}

export default About