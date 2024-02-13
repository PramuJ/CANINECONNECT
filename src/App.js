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

import Blog from './pages/Blog';


import RegistrationFormSelector from './Components/FormSelector';

// import DogItem from './Components/DogItem';
// import RegistrationFormSelector from './Components/FormSelector';
// import DogRegisterForm from './Forms/DogRegistrationForm'
import RegistrationSelection from './pages/RegistrationSelection';
import DogHandlerForm from './Forms/DogHandlerForm';
import DogOwnerForm  from './Forms/DogOwnerForm';
import VehicleOwnerForm from './Forms/VehicleOwnerForm';
import VeterinarianForm from './Forms/VeterinarianForm';
import SignInForm from './Forms/SignInForm';

import Admin from './pages/Admin';
import DogOwnerAdminDB from './Admin/DogOwnerAdminDB';
import DogHandlerAdminDB from './Admin/DogHandlerAdminDB';




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

          

          <Route path='/Veterinarians' element={<Veterinarians/>}/>
          <Route path='/Handlers' element={<Handlers/>}/>
          <Route path='/RegistrationSelection' element = {<RegistrationSelection/>}/>

          <Route path='/Blog' element = {<Blog/>}/>
          <Route path='/FormSelector' element = {<RegistrationFormSelector/>}/>

          <Route path='/DogOwnerForm' element = {< DogOwnerForm/>}/>
          <Route path='/DogHandlerForm' element={< DogHandlerForm/>}/>
          <Route path='/VehicleOwnerForm' element={< VehicleOwnerForm/>}/>
          <Route path='/VeterinarianForm' element={< VeterinarianForm/>}/>

          <Route path='/SignInForm' element={< SignInForm/>}/>

          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/DogOwnerAdminDB' element={<DogOwnerAdminDB/>}/>
          <Route path='/DogHandlerAdminDB' element={<DogHandlerAdminDB/>}/>
         
          



        </Routes>
      <Footer/>  

      

      </Router>
    </div>
  );
  }
  export default App;