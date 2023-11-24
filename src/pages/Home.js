import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import BannerImage from "../Assets/couple5.jpeg";
import ServiceProviderAccount from "../Components/ServiceProviderAccount";
import RegistrationFormSelector from "../Components/FormSelector";
import LandingPage from "./LandingPage";


export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);
//SignIn and Register function
  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  //Homepage 
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

        <button onClick={openPopup}>Register</button>
        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <RegistrationFormSelector />
            </div>
          </div>
        )}
      </div>
      <div className="LandigPage">
        <LandingPage/>
      </div>
    </div>
    
  );
}
