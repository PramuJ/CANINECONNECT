import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'; // Import the NavBar component
import NavBar from './Components/NavBar'; 
import Footer from './Components/Footer';


import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import Dogs from './pages/Dogs';
import './App.css';
import ServiceProviderAccount from './Components/ServiceProviderAccount';
import Blog from './pages/Blog';
import DogItem from './Components/DogItem';
import RegistrationFormSelector from './Components/FormSelector';


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
          <Route path='/Blog' element = {<Blog/>}/>
          <Route path='/FormSelector' element = {<RegistrationFormSelector/>}/>
        </Routes>
      <Footer/>  

      <Footer/> 

      </Router>
    </div>
  );
  }