import React from 'react'

const AdditionalInfo = () => {
    const [formData, setFormData] = useState({
      gender: '',
      dateOfBirth: '',
      healthConditions: [],
      additionalInfo: '',
      specialization: '',
      experience: '',
      professionalBio: '',
      idFile: null,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (e) => {
      setFormData({ ...formData, idFile: e.target.files[0] });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the submission of additional info
    };
  
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
        <div className="bg-white shadow-md rounded-md p-6 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">You Are Almost There!</h1>
          <p className="text-gray-600 mb-6">
            Complete your profile to finish setting up your account.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
  
            {/* Date of Birth */}
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
  
            {/* Health Conditions */}
            <div>
              <label htmlFor="healthConditions" className="block text-sm font-medium text-gray-700">
                Health Conditions
              </label>
              <select
                name="healthConditions"
                id="healthConditions"
                multiple
                value={formData.healthConditions}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="condition1">Condition 1</option>
                <option value="condition2">Condition 2</option>
                <option value="condition3">Condition 3</option>
              </select>
            </div>
  
            {/* Additional Info */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                Additional Health Information
              </label>
              <textarea
                name="additionalInfo"
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
              ></textarea>
            </div>
  
            {/* Specialization */}
            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                Area of Specialization (if physician)
              </label>
              <input
                type="text"
                name="specialization"
                id="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
  
            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Years of Experience (if physician)
              </label>
              <input
                type="text"
                name="experience"
                id="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
  
            {/* Professional Bio */}
            <div>
              <label htmlFor="professionalBio" className="block text-sm font-medium text-gray-700">
                Professional Bio (if physician)
              </label>
              <textarea
                name="professionalBio"
                id="professionalBio"
                value={formData.professionalBio}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
              ></textarea>
            </div>
  
            {/* ID File */}
            <div>
              <label htmlFor="idFile" className="block text-sm font-medium text-gray-700">
                Upload Valid ID
              </label>
              <input
                type="file"
                name="idFile"
                id="idFile"
                onChange={handleFileChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
  
            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Finish Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
export default AdditionalInfo
