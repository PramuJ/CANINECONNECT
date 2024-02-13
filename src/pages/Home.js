import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import BannerImage from "../Assets/Banner.webp";

import LandingPage from "./LandingPage";


 

export default function Home() {
  // const [isPopupVisible, setPopupVisible] = useState(false);

  // const openPopup = () => {
  //   setPopupVisible(true);
  // };

  // const closePopup = () => {
  //   setPopupVisible(false);
  // };

  return (
    <div className="home" >
        <div className="headerContainer" style={{
              backgroundImage: `url(${BannerImage})` , 
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              }} >
              <h1>CANINECONNECT </h1>

              <p>
              Connecting Canine Companions Where Dogs Find Love and Families
              Find Joy.
              </p>
              <Link to ="/SignInForm">
              <button>Sign in</button>
              </Link>

        <Link to="/RegistrationSelection">
          <button>Register</button>
        </Link>

        

        
        

        

        
        
      </div>
      <div className="LandigPage">
            <LandingPage/>
        </div>



    </div>
  );
}
