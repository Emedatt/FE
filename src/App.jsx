import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import {Login} from "./components/Login/Login"; // Import the Login page
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SignUp from "./components/SignUp/SignUp";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import CheckEmail from "./components/CheckEmail/CheckEmail";
import ResetSuccessful from "./components/ResetSuccessful/ResetSuccessful";
import CheckEmailSignUp from "./components/CheckEmailSignUp/CheckEmailSignUp";
const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/forgot-password", "/reset-password", "/check-email", "/reset-successful", "/signup", "/check-email-signup"]; // Add any other routes where navbar shouldn't appear

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset-successful" element={<ResetSuccessful />} />
        <Route path="/check-email-signup" element={<CheckEmailSignUp />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
