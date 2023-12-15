import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import BannerImage from "../Assets/pexels-rk-jajoria-1189673.jpg";
// import ServiceProviderAccount from "../Components/ServiceProviderAccount";
// import RegistrationFormSelector from "../Components/FormSelector";
// import DogRegistrationForm from "./Forms/DogRegistrationForm";


 

export default function Home() {
  // const [isPopupVisible, setPopupVisible] = useState(false);

  // const openPopup = () => {
  //   setPopupVisible(true);
  // };

  // const closePopup = () => {
  //   setPopupVisible(false);
  // };

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>CANINECONNECT </h1>

        <p>
          Connecting Canine Companions <br /> Where Dogs Find Love and Families
          Find Joy.
        </p>
        <Link>
          <button>Sign in</button>
        </Link>

        <Link to="/RegistrationSelection">
          <button>Register</button>
        </Link>

        
        {/* <nav>
          <ul>
            
            <li>
              <Link to="/DogRegistrationForm">Registration</Link>
            </li>
          </ul>
        </nav> */}

        

        {/* <button onClick={openPopup}>Register</button>
          isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <RegistrationFormSelector />
            </div>
          </div> */}
        )
      </div>
    </div>
  );
}
