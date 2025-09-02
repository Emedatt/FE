import React from "react";
import DoctorDashboard from "./doctorDashboard/page";
import PatientDashboard from "./patientDashboard/page";
const Dashboard = () => {
  return <main>
    <DoctorDashboard />
    <PatientDashboard/>
  </main>;
  
};

export default Dashboard;
