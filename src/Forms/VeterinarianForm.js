import React, { useState } from 'react';
import "../styles/Forms.css"


function VetRegistrationForm() {
    
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
  });

  const [dogDetails, setDogDetails] = useState({
    dogName: '',
    breed: '',
  });

  const [userImage, setUserImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);

  const handleUserImageChange = (e) => {
    const file = e.target.files[0];
    setUserImage(file);
  };

  const handleDogImageChange = (e) => {
    const file = e.target.files[0];
    setDogImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can implement code to send data (including images) to a server.
  };

  return (
    <div>
      <h2>Veterinarian Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <h3>User Details</h3>
        <input
          type="text"
          placeholder="Username"
          value={userDetails.username}
          onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        />
        <input type="file" accept="image/*" onChange={handleUserImageChange} />

        <h3>Dog Details</h3>
        <input
          type="text"
          placeholder="Dog's Name"
          value={dogDetails.dogName}
          onChange={(e) => setDogDetails({ ...dogDetails, dogName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Breed"
          value={dogDetails.breed}
          onChange={(e) => setDogDetails({ ...dogDetails, breed: e.target.value })}
        />
        <input type="file" accept="image/*" onChange={handleDogImageChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default VetRegistrationForm;
