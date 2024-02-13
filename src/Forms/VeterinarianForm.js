import React, { useState } from 'react';
import "../styles/Forms.css"

function VetRegistrationForm() {
    
  const [vetDetails, setVetDetails] = useState({
    name: '',
    email: '',
    gender: '',
    telNo: '',
    address: '',
    experiences: ''
  });

  const [certImage, setCertImage] = useState(null);
  const [workImage, setWorkImage] = useState(null);

  const handleCertImageChange = (e) => {
    const file = e.target.files[0];
    setCertImage(file);
  };

  const handleWorkImageChange = (e) => {
    const file = e.target.files[0];
    setWorkImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can implement code to send data (including images) to a server.
  };

  return (
    <div>
      <h2>Veterinarian Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Name"
          value={vetDetails.name}
          onChange={(e) => setVetDetails({ ...vetDetails, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={vetDetails.email}
          onChange={(e) => setVetDetails({ ...vetDetails, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Gender"
          value={vetDetails.gender}
          onChange={(e) => setVetDetails({ ...vetDetails, gender: e.target.value })}
        />  
        <input
          type="text"
          placeholder="Tel No"
          value={vetDetails.telNo}
          onChange={(e) => setVetDetails({ ...vetDetails, telNo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={vetDetails.address}
          onChange={(e) => setVetDetails({ ...vetDetails, address: e.target.value })}
        />
        <div className="form-group">
            <h6>Experiences</h6>
            <textarea className="form-control" id="experiences" rows="3"
              value={vetDetails.experiences}
              onChange={(e) => setVetDetails({ ...vetDetails, experiences: e.target.value })}
            ></textarea>
        </div>

        <h6>Upload Certificates</h6>
        <input type="file" accept="image/*" onChange={handleCertImageChange} />

        <h6>Upload Work Experiences</h6>
        <input type="file" accept="image/*" onChange={handleWorkImageChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default VetRegistrationForm;

