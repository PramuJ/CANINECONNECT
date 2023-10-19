import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'; // Import the NavBar component
import Footer from './Components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import Dogs from './pages/Dogs';
import './App.css';
import ServiceProviderAccount from './Components/ServiceProviderAccount';


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path='/Dogs' element={<Dogs/>}/>
          <Route path='/Register' element = {<ServiceProviderAccount/>}/>
        </Routes>
      <Footer/>  
      </Router>
    </div>
  );
}

export default App;
