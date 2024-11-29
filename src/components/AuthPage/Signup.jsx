import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: '',
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { role, fullname, email, password, confirmPassword } = formData;

    // Basic Validation
    if (!role || !fullname || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5173/users', {
        role,
        name: fullname,
        email,
        password, // Normally, you should hash the password.
      });

      console.log('User created:', response.data);
      setErrorMessage('');
      alert('Account created successfully!');
      setFormData({
        role: '',
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      navigate('/auth/additionalInfo');
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage('Failed to create an account. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account!</h2>
        <p className="text-center text-gray-600 mt-2">Sign up to access personalized healthcare.</p>

        {errorMessage && (
          <p className="bg-red-100 text-red-700 p-2 rounded-md text-sm my-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Role */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>Select your role</option>
              <option value="physician">Physician</option>
              <option value="patient">Patient</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              value={formData.fullname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account? <Link to="/auth/signin" className="text-blue-500">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
