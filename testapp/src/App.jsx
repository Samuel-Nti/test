import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Partners from './pages/Partners/Partners';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Board from './pages/Board/Board';
import Solutions from './pages/Solutions/Solutions';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './components/footer/footer';
import News from './pages/News/News';

function App() {
  return (
    
   
    <Router>
     
    <Navbar/>
      <Routes>
       
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home/>} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/board" element={<Board/>} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/news" element={<News />} /> 
      </Routes>
  
      <Footer />
    </Router>
    
  );
}

export default App;
