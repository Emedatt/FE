import React from 'react';
import ellipse from '../../assets/Ellipse 5.png'
import basicplan from '../../assets/basicplan.png'
import BulletV from '../../assets/BulletVector.png';
import BulletW from '../../assets/BulletWhite.png';
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import Faq from '../LandingPage/Faq';

const Pricing = () => {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center">
      <Navbar/>
      {/* Pricing Title */}
      <div className="w-full md:w-[506px] text-center mb-[3rem] mt-8">
        <h1 className="font-[Inter] text-[2rem] md:text-[3rem] text-[#000] font-bold leading-[3.814rem]">
         Simple<span className="font-[Inter] text-[#417BEB] text-[48px] font-bold leading-[43.2px]">Pricing Plan </span> For You!
        </h1>
        <p className="font-[Inter] text-[1rem] text-[#969696] leading-[1.5rem]">
        We offer flexible pricing options to ensure everyone has access to quality healthcare. Select a plan that fits your needs and budget.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="relative w-full flex flex-col md:flex-row justify-center gap-[2rem] mb-8 px-11">
      <img src={ellipse} alt="" className='absolute top-[-25rem] -z-40 left-0 rotate-180'/>
        {/* Basic Plan */}
        <div className="w-[390px] h-[691px] p-[32px] px-[24px] gap-[24px] rounded-[16px] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] bg-white">
          <div  className='flex'>
            <img src={basicplan} alt="" />
            <div>
              <p>
                Personal
              </p>
              <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#323232]">
                Basic
              </h2>
            </div>
          </div>
          <p className="font-[Inter] text-[1rem] text-[#969696]">
          Get essential healthcare services with the Basic Plan. Perfect for individuals looking for affordable care
          </p>
          <div className="mt-[1.5rem] mb-[2rem]">
            <span className="text-[2rem] font-bold text-[#323232]">₦2,499</span> / month
          </div>
          <h3>What's included?</h3>
           <ul className="list-none my-4 space-y-2">
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                1 user account
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Access to certified health professionals
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                3 consultations per month (chat or call)
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Access to medical records
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Appointment scheduling
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                General health tips and wellness resources
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                24/7 support
              </li>
            </ul>
          <button className="font-[Inter] text-[1rem] text-white bg-[#417BEB] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Select Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="w-[390px] h-[691px] p-[32px] px-[24px] gap-[24px] rounded-[16px] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] bg-[#417BEB]">
          <div  className='flex'>
            <img src={basicplan} alt="" />
            <div>
              <p className='text-[#fff]'>
                Family
              </p>
              <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#fff]">
                Pro
              </h2>
            </div>
          </div>
          <p className="font-[Inter] text-[1rem] text-[#fff]">
           Ensure the well-being of your entire family with the Family Plan. Manage multiple users and enjoy more consultations
          </p>
          <div className="mt-[1.5rem] mb-[2rem] text-[#fff]">
            <span className="text-[2rem] font-bold text-[#fff]">₦7,499</span> / month
          </div>
           <ul className="list-none my-4 space-y-2">
              <li className="flex items-center text-[#fff]">
                <img src={BulletW} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                5 user account
              </li>
              <li className="flex items-center text-[#fff]">
                <img src={BulletW} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Access to certified health professionals
              </li>
              <li className="flex items-center text-[#fff]">
                <img src={BulletW} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                10 consultations per month (chat or call)
              </li>
              <li className="flex items-center text-[#fff]">
                <img src={BulletW} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Access to medical records
              </li>
              <li className="flex items-center text-[#fff]">
                <img src={BulletW} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Priority support
              </li>
              <li className="flex items-center text-[#fff]">
                <img src={BulletW} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Chronic disease management resources
              </li>
            </ul>
          <button className="font-[Inter] text-[1rem] text-[#417BEB] bg-[#fff] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Upgrade to pro
          </button>
        </div>

        {/* Premium Plan */}
        <div className="w-[390px] h-[691px] p-[32px] px-[24px] gap-[24px] rounded-[16px] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] bg-white">
          <div  className='flex'>
            <img src={basicplan} alt="" />
            <div>
              <p>
                All-inclusive
              </p>
              <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#323232]">
              Premium
              </h2>
            </div>
          </div>
          <p className="font-[Inter] text-[1rem] text-[#969696]">
          Experience complete peace of mind with the Premium Plan. Enjoy unlimited consultations and access to specialists
          </p>
          <div className="mt-[1.5rem] mb-[2rem]">
            <span className="text-[2rem] font-bold text-[#323232]">₦12,499</span> / month
          </div>
           <ul className="list-none my-4 space-y-2">
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Unlimited users
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Unlimited consultations (chat or call)
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Access to specialist doctors
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Comprehensive medical records
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Personalized health programs
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Virtual health check-ups and reminders
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                24/7 premium customer support
              </li>
            </ul>
          <button className="font-[Inter] text-[1rem] text-[#969696] bg-[#EAEAEA] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Upgrade to Premium
          </button>
        </div>
        <img src={ellipse} alt="" className='absolute bottom-[-15rem] -z-50 right-0'/>
      </div>

       <Faq/>
      <Footer/>
    </section>
  );
};

export default Pricing;
