  "use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  is_email_verified: boolean;
}

interface PatientProfile {
  user: User;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  address: string;
  medical_history: Record<string, unknown>;
}

const dummyPatientProfile: PatientProfile = {
  user: {
    id: 1,
    email: "user@example.com",
    first_name: "Ade",
    last_name: "John.",
    role: "patient",
    is_email_verified: true,
  },
  date_of_birth: "1990-01-01",
  gender: "male",
  phone_number: "123-456-7890",
  address: "123 Main St, Anytown, USA",
  medical_history: {},
};

const PatientDashboard = () => {
  const [patientProfile, setPatientProfile] = useState<PatientProfile | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const healthStats = [
    {
      id: 1,
      label: "Blood Pressure",
      value: "128/80",
      unit: "mmHg",
      icon: "/heart-icon.svg",
      bgColor: "bg-red-100",
      iconBg: "bg-red-500",
    },
    {
      id: 2,
      label: "Body Weight",
      value: "70",
      unit: "kg",
      icon: "/weight-icon.svg",
      bgColor: "bg-green-100",
      iconBg: "bg-green-500",
    },
    {
      id: 3,
      label: "Heart Rate",
      value: "72",
      unit: "bpm",
      icon: "/heart-rate-icon.svg",
      bgColor: "bg-pink-100",
      iconBg: "bg-pink-500",
    },
    {
      id: 4,
      label: "Sleep",
      value: "7",
      unit: "hrs",
      icon: "/sleep-icon.svg",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-500",
    },
  ];

  const membershipInfo = {
    membershipNumber: "234-576-345-328",
    dateSubscribed: "1 November, 2024",
    status: "Active",
    expiry: "31 November, 2025",
  };

  const appointments = [
    {
      date: "19 April, 2025",
      title: "Post Surgical care",
      doctor: "Dr. David Richard",
      color: "#a855f7", // purple
    },
    {
      date: "14 May, 2025",
      title: "Lens Recommendation",
      doctor: "Dr. David Richard",
      color: "#facc15", // yellow
    },
    {
      date: "14 June, 2025",
      title: "Follow up",
      doctor: "Dr. David Richard",
      color: "#ef4444", // red
    },
  ];

  const fitnessData = [
    { month: "Jan", Water1: 30, Water2: 20, Run: 10 },
    { month: "Feb", Water1: 20, Water2: 25, Run: 15 },
    { month: "Mar", Water1: 27, Water2: 22, Run: 18 },
    { month: "Apr", Water1: 35, Water2: 30, Run: 20 },
    { month: "May", Water1: 40, Water2: 35, Run: 25 },
    { month: "Jun", Water1: 45, Water2: 40, Run: 30 },
    { month: "Jul", Water1: 50, Water2: 45, Run: 35 },
    { month: "Aug", Water1: 48, Water2: 42, Run: 33 },
    { month: "Sep", Water1: 40, Water2: 38, Run: 28 },
    { month: "Oct", Water1: 35, Water2: 30, Run: 25 },
    { month: "Nov", Water1: 30, Water2: 25, Run: 20 },
    { month: "Dec", Water1: 25, Water2: 20, Run: 15 },
  ];

  useEffect(() => {
    setPatientProfile(dummyPatientProfile);
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">
        Loading patient dashboard...
      </div>
    );
  if (error)
    return (
      <div className="text-center py-20 text-red-600">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="p-8 max-w-7xl mx-auto bg-gray-50 rounded-lg space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <CardContent className="flex items-center justify-between p-8">
          <div>
            <h1 className="text-4xl font-extrabold mb-3">
              Good Morning,{" "}
              {`${patientProfile?.user.first_name || ""} ${
                patientProfile?.user.last_name || ""
              }`.trim() || "Patient"}
            </h1>

            <p className="mb-6 text-lg max-w-md">
              Feeling great today,{" "}
              {patientProfile?.user.first_name || "Patient"}? Let&apos;s keep
              your health on track by booking an appointment with a doctor.
            </p>
            <Button variant="secondary" className="font-semibold">
              Book Appointment
            </Button>
          </div>
          <div className="relative w-40 h-40">
            <Image
              src="/patient-finish.svg"
              alt="Patient"
              fill
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Health Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthStats.map(
          ({ id, label, value, unit, icon, bgColor, iconBg }) => (
            <Card key={id} className={`${bgColor} shadow-md`}>
              <CardContent className="flex items-center space-x-4 p-5">
                <div className={`p-3 rounded-full ${iconBg} text-white`}>
                  <Image src={icon} alt={label} width={32} height={32} />
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">{label}</p>
                  <p className="text-2xl font-bold">
                    {value}{" "}
                    <span className="text-gray-500 text-base">{unit}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
      {/* Wrapper for equal height layout */}
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Membership Info */}
        <Card className="lg:w-[70%] rounded-lg shadow-sm border p-6 flex flex-col justify-between text-center max-w-lg max-h-[500px]">
          <div className="pt-6">
            {/* Icon */}
            <div className="mb-4 text-red-500 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.657l-8.828-8.829a4 4 0 010-5.656z"
                />
              </svg>
            </div>

            {/* Membership Number */}
            <div className="mt-6">
              <p className="text-gray-500 mb-1">Membership Number</p>
              <p className="text-2xl font-bold">
                {membershipInfo.membershipNumber}
              </p>
            </div>

            {/* Date Subscribed */}
            <div className="mt-6">
              <p className="text-gray-500 mb-1">Date Subscribed</p>
              <p className="text-lg font-semibold">{membershipInfo.dateSubscribed}</p>
            </div>

            {/* Status and Expiry */}
            <div className="flex justify-between w-full text-xs text-gray-500 mt-6">
              <div className="flex-1 text-center">
                <p className="camelcase">Status</p>
                <p className="text-black font-bold">{membershipInfo.status}</p>
              </div>
              <div className="flex-1 text-center ">
                <p className="camelcase">Expiry</p>
                <p className="text-black font-bold">{membershipInfo.expiry}</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm"
          >
            Extend Subscription
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </Card>

        {/* Appointment Schedule */}
        <Card className="lg:w-[34%] rounded-xl shadow-sm border flex flex-col ml-6 max-h-[500px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Appointment Schedule</CardTitle>
            <Button variant="link" className="text-black flex items-center space-x-1">
              <span>View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </CardHeader>

          <CardContent className="space-y-2 flex-1">
            {appointments.map(({ date, title, doctor, color }, index) => (
              <div key={index} className="relative pl-8">
                {/* Vertical connector (skip last) */}
                {index !== appointments.length - 1 && (
                  <div className="absolute top-5 left-[15px] w-[1px] h-full bg-gray-300"></div>
                )}

                {/* Colored circle marker */}
                <div
                  className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 bg-white flex items-center justify-center"
                  style={{ borderColor: color }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
                </div>

                {/* Appointment content */}
                <p className="text-xs text-gray-500 font-medium">{date}</p>
                <div className="border rounded-md p-4">
                  <p className="font-semibold text-gray-800">{title}</p>
                  <p className="text-gray-500 text-sm">{doctor}</p>
                </div>
              </div>
            ))}

            {/* Calendar */}
            <div className="bg-gray-50 rounded-md p-2 -mt-1">
              <div className="flex justify-between items-center text-gray-600 text-xs mb-1">
                <span>01 - 07 June, 2025</span>
                <div className="flex space-x-1">
                  <Button size="icon" variant="outline" className="rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Days row */}
              <div className="grid grid-cols-7 text-center text-xs text-gray-600 mb-1">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>TH</div>
                <div>F</div>
                <div>S</div>
              </div>

              {/* Dates row */}
              <div className="grid grid-cols-7 text-center font-semibold text-gray-700">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div className="bg-white rounded shadow px-2">04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
              </div>
            </div>

            {/* Next Week Card */}
            <div className="bg-blue-500 rounded-xl p-1 ml-0 mr-auto flex items-center justify-between text-white">
              <div>
                <p className="font-bold text-lg ml-4">Next Week</p>
                <p className="text-xs opacity-80 ml-4">Upcoming Schedules</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src="/big-arrow-curvy.svg" alt="Arrow" width={50} height={30} />
                <Button className="bg-white text-blue-600 rounded-lg px-3 py-1 text-sm">
                  Open
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fitness Activity */}
      <Card className="mt-24">
        <CardHeader>
          <CardTitle>Fitness Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={fitnessData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Water1" stackId="a" fill="#4f46e5" />
              <Bar dataKey="Water2" stackId="a" fill="#10b981" />
              <Bar dataKey="Run" stackId="a" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDashboard;
