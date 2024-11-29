import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PhHeartbeat from '../../assets/ph_heartbeat-duotone.png';
import loginbg from '../../assets/loginbg.png';
import Signin from './Signin';
import SignUpOTP from './OTP';
import Signup from './Signup';
import AdditionalInfo from './AdditionalInfo';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const { type } = useParams(); // Get the step from URL
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState(type || 'signup'); // Default to 'signup'
  
  const steps = ['signup', 'otp', 'additionalInfo', 'success']; // Define the steps
  const currentStep = steps.indexOf(activeComponent); // Get current step index

  useEffect(() => {
    setActiveComponent(type); // Sync with URL changes
  }, [type]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'signin':
        return <Signin />;
      case 'signup':
        return <Signup />;
      case 'otp':
        return <SignUpOTP />;
      case 'additionalInfo':
        return <AdditionalInfo />;
      case 'success':
        return <div className="p-8 text-center">
          <h1 className="text-2xl font-bold">Account Successfully Created!</h1>
          <p>You can now log in and enjoy personalized healthcare.</p>
          <Link to="/auth/signin" className="text-blue-500">Go to Login</Link>
        </div>;
      default:
        return <Signup />;
    }
  };

  const goToStep = (step) => {
    navigate(`/auth/${step}`); // Navigate to the step
  };

  return (
    <div className='w-full h-[100vh] overflow-auto flex relative'>
      <div className='relative hidden md:flex justify-center lg:block flex-1'>
        <div className="absolute top-[40px] left-[40px] w-[138px] h-[46px] flex items-center bg-[#FCFCFD] p-[16px] rounded-[90px] z-50">
          <Link to="/" className='flex justify-between items-center w-full'>
            <img src={PhHeartbeat} alt="E-MEDATT Logo" className="w-[26.92px] h-[30.12px]" />
            <h1 className="font-inter text-[15px] font-bold leading-[13.64px] text-left text-[#3b54fa] whitespace-nowrap">
              E-MEDATT
            </h1>
          </Link>
        </div>
        
        {['signup', 'otp', 'additionalInfo', 'success'].includes(activeComponent) && (
          <div className="absolute top-[80px] left-[0] w-full p-3 h-3 flex space-x-2 mt-5 z-50">
            {steps.map((step, index) => (
              <div key={index} className={`flex-1 relative h-1 rounded ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}>
                {index === currentStep && (
                  <div className="absolute -top-0 w-full h-1 bg-blue-500 rounded" />
                )}
              </div>
            ))}
          </div>
        )}

        <div className='absolute top-1/2 transform -translate-y-1/2 left-[2.5rem] w-[35.0625rem] text-[#fff] z-50'>
          <h2 className="font-inter text-[56px] font-bold leading-[56px] text-left">
            {activeComponent === 'signin'
              ? 'Access Quality Care Anytime, Anywhere.'
              : 'Your journey to better health starts here.'}
          </h2>
          <p className='font-inter text-[18px] font-medium leading-[26.1px] text-left'>
            {activeComponent === 'signin'
              ? 'Access personalized healthcare, schedule consultations with certified doctors, and more.'
              : 'Unlock personalized healthcare tailored to you and book appointments with ease.'}
          </p>
        </div>

        <img className='absolute inset-0 object-cover w-full h-full' src={loginbg} alt="virtual doctor" />
        <div className='absolute bottom-0 w-full p-5 h-[23px] flex justify-between items-center'>
          <div className='w-[159px] h-[19px]'>
            <p className='font-Inter text-[#fff] text-xs leading-[14.52px] tracking-[-1%] text-nowrap'>
              Copyright © Emedatt 2024. <span><a href="#" className='underline'>Terms and Conditions</a></span>
            </p>
          </div>
          <div className="flex items-center w-[155px] h-[19px] gap-[18px]">
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="#" target="_blank">
              <FaFacebook style={{ fontSize: '8px', color: '#4267B2' }} />
            </a>
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="#" target="_blank">
              <FaTwitter style={{ fontSize: '8px', color: '#1DA1F2' }} />
            </a>
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="#" target="_blank">
              <FaInstagram style={{ fontSize: '8px', color: '#C13584' }} />
            </a>
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="#" target="_blank">
              <FaLinkedin style={{ fontSize: '8px', color: '#0077B5' }} />
            </a>
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="#" target="_blank">
              <FaYoutube style={{ fontSize: '8px', color: '#FF0000' }} />
            </a>
          </div>
        </div>
      </div>
      
      <div className='flex-1 flex justify-center'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default AuthPage;
