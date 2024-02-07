import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import BannerImage from "../Assets/pexels-rk-jajoria-1189673.jpg";
// import ServiceProviderAccount from "../Components/ServiceProviderAccount";
// import RegistrationFormSelector from "../Components/FormSelector";
// import DogRegistrationForm from "./Forms/DogRegistrationForm";
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
              <Link>
              <button>Sign in</button>
              </Link>

        <Link to="/RegistrationSelection">
          <button>Register</button>
        </Link>

        <div className="LandigPage">
            <LandingPage/>
        </div>

        
        

        

        
        
      </div>
    </div>
  );
}
