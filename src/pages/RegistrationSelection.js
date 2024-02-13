import React from 'react';
// import { Link } from 'react-router-dom';
import  '../styles/RegistrationSelection.css'
import DogHandlerImage from '../Assets/cartoon-man-training-and-teaching-his-pet-to-commands-a-dog-giving-a-paw-to-his-owner-flat-vector-cartoon-illustration-with-friends-domestic-animal-2R2KFEY.jpg'
import  VeterinarianImage from'../Assets/friendly-cartoon-veterinarian-character-happy-vet-doctor-with-a-folder-KHT5AX.jpg'
import VehicleOwnerImage from'../Assets/travel-with-pets-young-man-on-moto-with-dog-and-city-landscape-boy-with-dog-on-moped-ride-vector-illustration-2BE9P8G.jpg'
import  DogOwnerImage from'../Assets/young-man-walking-a-dog-cute-cartoon-characters-vector-illustration-on-white-background-2B91KFC.jpg'

function RollRegistrationPage() {
  return (     
    <div className='bodyOfRegistrationSelector'>
      <h2>What is the role you wish to register? </h2>
      <div class='card-margin'>
        <div class="card" >
        {/* <img src={dogImage} alt="Dogs" className="catalog-image" /> */}
          <img class="card-img-top" src={DogOwnerImage} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Dog Owner</h5>
            <p class="card-text">Register here if you're a proud dog parent looking to connect with other enthusiasts and find suitable mates for your beloved companions.</p>
            <a href="/DogOwnerForm" class="btn btn-primary">Dog Owner</a>
          </div>
        </div>  
        <div class="card" >
        <img class="card-img-top" src={VehicleOwnerImage} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Vehicle Owner</h5>
            <p class="card-text">Are you a vehicle owner involved in the canine community? Register here to offer reliable transportation services for dogs across Sri Lanka.</p>
            <a href="/VehicleOwnerForm" class="btn btn-primary">Vehicle Owner</a>
          </div>
        </div> 
        <div class="card" >
        <img class="card-img-top" src={DogHandlerImage} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Dog Handler</h5>
            <p class="card-text">Calling all experienced dog handlers! Register here to showcase your expertise and connect with dog owners seeking your services for shows and competitions.</p>
            <a href="/DogHandlerForm" class="btn btn-primary">Dog Handler</a>
          </div>
        </div> 
        <div class="card" >
        <img class="card-img-top" src={VeterinarianImage} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Veterinarian</h5>
            <p class="card-text">Are you a qualified veterinarian passionate about canine health? Register here to offer your specialized services and expertise to dog owners on CannieConnect.</p>
            <a href="/VeterinarianForm" class="btn btn-primary">Veterinarian</a>
          </div>
           
        </div>
      </div>  
    </div>
         
   

  );
}

export default RollRegistrationPage;



// {/* <Link to="/DogOwnerForm">
      //   <button type="button" class="btn btn-secondary btn-lg">Dog Owner</button>
      // </Link>
      // <Link to="/VehicleOwnerForm">
      //   <button type="button" class="btn btn-secondary btn-lg">Vehicle Owner</button>
      // </Link>
      // <Link to="/DogHandlerForm">
      //   <button type="button" class="btn btn-secondary btn-lg">Dog Handler</button>
      // </Link>
      // <Link to="/VeterinarianForm">
      //   <button type="button" class="btn btn-secondary btn-lg">Veterinarian</button>
      // </Link> */}
