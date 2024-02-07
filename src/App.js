import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar'; 
import Footer from './Components/Footer';


import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import Dogs from './pages/Dogs';
import Veterinarians from './pages/Veterinarians';
import Handlers from './pages/Handlers';
import './App.css';
import ServiceProviderAccount from './Components/ServiceProviderAccount';
import Blog from './pages/Blog';

import DogItem from './Components/DogItem';
import RegistrationFormSelector from './Components/FormSelector';

// import DogItem from './Components/DogItem';
// import RegistrationFormSelector from './Components/FormSelector';
// import DogRegisterForm from './Forms/DogRegistrationForm'
import RegistrationSelection from './pages/RegistrationSelection';
import DogHandlerForm from './Forms/DogHandlerForm';
import DogOwnerForm  from './Forms/DogOwnerForm';
import VehicleOwnerForm from './Forms/VehicleOwnerForm';
import VeterinarianForm from './Forms/VeterinarianForm';


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

          <Route path='/Veterinarians' element={<Veterinarians/>}/>
          <Route path='/Handlers' element={<Handlers/>}/>
          <Route path='/RegistrationSelection' element = {<RegistrationSelection/>}/>

          <Route path='/Blog' element = {<Blog/>}/>
          <Route path='/FormSelector' element = {<RegistrationFormSelector/>}/>
        </Routes>
      <Footer/>  

      

      </Router>
    </div>
  );
  }
  export default App;