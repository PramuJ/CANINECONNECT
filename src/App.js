import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'; 
import Footer from './Components/Footer';


import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import Dogs from './pages/Dogs';
import './App.css';
import DogHandlers from './pages/DogHandlers';

import Blog from './pages/Blog';
import DogItem from './Components/DogItem';
import RegistrationFormSelector from './Components/FormSelector';
import LandingPage from './pages/LandingPage';
import DogOwnerForm from './helpers/DogOwnerForm';


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path='/Dogs' element={<Dogs/>}/>
         <Route path='/DogOwnersForm' element={<DogOwnerForm/>}/>
          <Route path='/Blog' element = {<Blog/>}/>
          <Route path='/DogHandlers' element = {<DogHandlers/>}/>
          
        </Routes>

      <Footer/> 

      </Router>
    </div>
  );
}

export default App;
