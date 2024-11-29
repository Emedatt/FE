import React, {useState} from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaApple } from 'react-icons/fa';
import Google from '../../assets/Google.png';
import facebook from '../../assets/facebook.png';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Email address is invalid';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      validationErrors.password = 'Password must be at least 8 characters long, contain at least one letter and one number';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setTimeout(() => {
        navigate('/Profile');
      }, 1000);
    }
  };

  return (
    <div>
     <div className='w-full h-full p-2 sm:p-6 md:p-8 gap-4 sm:gap-2 md:gap-3 rounded-lg border-transparent lg:border-gray-400 lg:flex flex-col'>
          <h1 className='hidden md:block font-Inter font-bold text-[32px] leading-[38.4px] text-center text-[#2d2d2d] mx-auto'>Welcome Back!</h1>
          <p className='font-Inter text-base font-normal leading-[23.2px] text-center text-[#969696]'>
            We're glad to see you again
          </p>


          <form className='flex flex-col justify-center items-center h-full' onSubmit={handleLoginSubmit}>
            <div className='flex flex-col w-full sm:w-[300px] md:w-[350px] lg:w-[485px] h-[64px] sm:h-[70px] md:h-[74px] gap-[4px]'>
            <label className='font-Inter font-medium text-sm leading-[20.3px] text-[#323232] text-left' htmlFor="email">
              Email
            </label>
              <input
                className='w-full h-[50px] py-[18px] px-[20px] rounded-[12px] border-[1.5px] border-[#DCDCDC] text-[#868686] outline-none'
                type="text"
                placeholder='Enter e-mail address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
            </div>

            <div className='flex flex-col w-full sm:w-[300px] md:w-[350px] lg:w-[485px] h-[84px] sm:h-[94px] md:h-[104px] mt-2 gap-[8px]'>
              <label className='font-Inter font-medium text-sm leading-[20.3px] text-[#323232] text-left' htmlFor="password">Password</label>
              <input
                className='w-full h-[50px] py-[18px] px-[20px] rounded-[12px] border-[1.5px] border-[#DCDCDC] text-[#868686] outline-none'
                type="password"
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
            </div>

            <div className='flex justify-end self-end'>
              <Link to="/ForgotPassword" className='font-Inter font-medium text-xs leading-[17.4px] text-[#969696]'>Forgot password?</Link>
            </div>

            <div className='flex justify-center items-center mx-auto mt-4'>
              <Link to="/Profile" className='w-full flex justify-center items-center sm:w-[312px] md:w-[360px] lg:w-[485px] h-[48px] sm:h-[48px] md:h-[52px] lg:h-[56px] rounded-lg p-2 gap-[10px] bg-[#3b54fa] text-white text-center'>
                Log in
              </Link>
            </div>
            
            <div className="flex items-center justify-center my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-4 text-gray-500 whitespace-nowrap">or do it via other accounts</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <div className='max-w-md gap-4 flex items-center'>
            <button className='sm:w-[35px] md:w-[46px] lg:w-[54px] h-[44px] sm:h-[48px] md:h-[52px] lg:h-[56px] flex items-center justify-center gap-4 py-1 px-2 rounded-[50%] bg-white text-black text-base sm:text-sm font-normal leading-6 [letter-spacing:-0.02em] border-2'>
              <img className='w-[27px]' src={Google} alt="google logo" />
            </button>

            <button className='sm:w-[35px] md:w-[46px] lg:w-[54px] h-[44px] sm:h-[48px] md:h-[52px] lg:h-[56px] flex items-center justify-center gap-4 py-1 px-2 rounded-[50%] bg-white text-black text-base sm:text-sm font-normal leading-6 [letter-spacing:-0.02em] border-2'>
              <FaApple style={{ fontSize: '20px' }} />
            </button>
            <button className='sm:w-[35px] md:w-[46px] lg:w-[54px] h-[44px] sm:h-[48px] md:h-[52px] lg:h-[56px] flex items-center justify-center gap-4 py-1 px-2 rounded-[50%] bg-white text-black text-base sm:text-sm font-normal leading-6 [letter-spacing:-0.02em] border-2'>
              <img className='w-[17px] object-cover' src={facebook} alt="google logo" />
            </button>
          </div>

          <div className='w-[314px] h-[24px] flex justify-center items-center mx-auto mt-2 sm:mt-2 md:mt-3'>
              <p className='font-Inter font-normal text-base leading-6 text-[#4e4e4e]'>Don't have an account yet? <Link to="/auth/signup" className='font-Inter font-medium text-base leading-6 text-[#5754ec] underline'>Sign up here!</Link></p>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signin
