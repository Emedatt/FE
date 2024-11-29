import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required');
    } else if (!emailRegex.test(email)) {
      setError('Email address is invalid');
    } else {
      setError('');
      console.log('Forgot Password form is valid');
      // Perform forgot password logic here

      // Simulate successful forgot password process and navigate to login page
      setTimeout(() => {
        navigate('/Login');
      }, 1000); // Simulate network delay
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-lg sm:max-w-md p-6 sm:p-8 gap-6 sm:gap-8 rounded-lg border border-gray-400 flex flex-col'>
        <h1 className='font-Inter font-bold text-xl sm:text-2xl leading-8 sm:leading-10 text-[#2d2d2d] mx-auto'>Forgot Password</h1>

        <form onSubmit={handleForgotPasswordSubmit} className='w-full'>
          <div className='flex flex-col w-full gap-1 sm:gap-2'>
            <label 
              className='font-Inter font-medium text-sm sm:text-base leading-5 sm:leading-6 text-[#4e4e4e]' 
              htmlFor="email-input">
              Email
            </label>
            <input
              id="email-input"
              className='w-full h-[40px] sm:h-[48px] rounded border-2 p-2 text-[#868686] outline-none'
              type="text"
              placeholder='Enter e-mail address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <span className='text-red-500 text-xs sm:text-sm'>{error}</span>}
          </div>

          <div className='flex justify-center items-center mt-6 sm:mt-9'>
            <button className='w-full h-[40px] sm:h-[48px] rounded-lg border p-2 bg-[#3b54fa] text-white text-sm sm:text-base'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
