import React, { useState } from 'react';

function RegistrationForm() {
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
      <h2>Dog Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <h3>Vehicle Owner Details</h3>
        <input
          type="text"
          placeholder="Dog Owner name"
          value={userDetails.username}
          onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={userDetails.location}
          onChange={(e) => setUserDetails({ ...userDetails, location: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        />
        <input
          type="contact_number"
          placeholder="Contact Number"
          value={userDetails.contact_number}
          onChange={(e) => setUserDetails({ ...userDetails, contact_number: e.target.value })}
        />

        

        {/* User Profile Photo Section */}
        <div className="profile-photo-section">
          <label htmlFor="userImage">Profile Photo:</label>
          <input
            type="file"
            accept="image/*"
            id="userImage"
            onChange={handleUserImageChange}
          />
        </div>

        <div className="profile-photo-section">
          <label htmlFor="userImage">Upload Your Certificates:</label>
          <input
            type="file"
            accept="image/*"
            id="userImage"
            onChange={handleUserImageChange}
          />
        </div>

         <h3>Dog Details</h3>
        <input
          type="text"
          placeholder="Dog Name"
          value={dogDetails.dogName}
          onChange={(e) => setDogDetails({ ...dogDetails, dogName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Breed"
          value={dogDetails.breed}
          onChange={(e) => setDogDetails({ ...dogDetails, breed: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={dogDetails.breed}
          onChange={(e) => setDogDetails({ ...dogDetails, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={dogDetails.breed}
          onChange={(e) => setDogDetails({ ...dogDetails, description: e.target.value })}
        />
        <div className="dog-photo-section">
          <label htmlFor="userImage">Vehicle photo:</label>
          <input
            type="file"
            accept="image/*"
            id="userImage"
            onChange={handleUserImageChange}
          />
        </div> 

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
