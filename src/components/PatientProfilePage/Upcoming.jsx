// src/components/UpcomingAppointment.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import userImage from '../../assets/doc.jpeg';

function Upcoming() {
  return (
    <section className="mt-8 p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-inter font-extrabold">Upcoming Appointment</h2>
        <button className="text-black-500 font-inter font-normal text-2xl">See all</button>
      </div>
      <div className="mt-4 bg-[#3B54FA] text-white p-4 rounded-2xl shadow-md">
        <div className="flex items-center gap-4">
          <img
            src={userImage} // Replace with actual path
            alt="Dr. Mike Murdock"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-inter font-semibold mb-2">Dr. Mike Murdock</h3>
            <div className="flex items-center gap-5">
                <p className="text-base font-inter font-normal">9:30 am </p>
                <p className="text-base font-inter font-normal">Optician</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="bg-[#F11111] px-4 py-2 rounded-lg font-inter text-sm">Starts in 15 Mins</button>
          <button className="bg-white text-[#3B54FA] px-7 py-2 rounded-lg font-inter"><FontAwesomeIcon icon={faVideo} /> Join the call</button>
        </div>
      </div>
    </section>
  );
}

export default Upcoming;