import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PhHeartbeat from '../../assets/ph_heartbeat-duotone.png';
import { useNavigate } from 'react-router-dom';  // import useNavigate from react-router-dom

const OTPVerification = () => {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const handleChange = (value, index) => {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    };
  
    const handleKeyDown = (e, index) => {
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      // Add verification logic here
      // On success:
      // navigate('/additional-info');
      // On failure:
      // setError('Invalid OTP');
      setLoading(false);
    };
  
    return (
      <div className="flex flex-col justify-center items-center p-8">
        <h1>Verify Email</h1>
        <p>A 6-digit code was sent to your email. Check your email and enter the verification code.</p>
        <form className="mt-[5rem] w-full space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2 mt-3">
            {otp.map((data, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="mt-1 block w-10 px-3 py-2 border border-[#F44949] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-center text-lg"
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <div className='flex justify-center'>
            <button
              type="submit"
              className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  };
export default OTPVerification;
