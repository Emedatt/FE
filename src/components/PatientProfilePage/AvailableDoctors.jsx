// src/components/AvailableDoctors.jsx
import React from 'react';

function AvailableDoctors() {
  const doctors = [
    { name: 'Dr. Mide Adams', specialty: 'Dentist', image: 'src/assets/dentist.jpeg', rating: 5 },
    { name: 'Dr. Harry Mike', specialty: 'Optician', image: 'src/assets/optician.jpeg', rating: 4 },
    { name: 'Dr. Tilpathi Guz', specialty: 'Surgeon', image: 'src/assets/surgeon.jpeg', rating: 5 },
    { name: 'Dr. Esther Moses', specialty: 'Therapist', image: 'src/assets/therapist.jpeg', rating: 4 },
  ];

  return (
    <section className="mt-8 p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-inter font-bold">Available Doctors</h2>
        <button className="text-blue-500 font-inter">See all</button>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4 ">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <h3 className="mt-2 text-lg font-inter font-bold">{doctor.name}</h3>
            <p className="text-gray-600 font-inter">{doctor.specialty}</p>
            <div className="mt-2 text-yellow-400">
              {'★'.repeat(doctor.rating) + '☆'.repeat(5 - doctor.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AvailableDoctors;