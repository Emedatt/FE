import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import "./App.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  )
}

export default App