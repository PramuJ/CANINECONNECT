import React, { useState } from 'react';
import "../styles/Forms.css"


function HandlerRegistrationForm() {
    
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
      <h2>Dog Handler Registration Form </h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Handler Name"
          value={userDetails.username}
          onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Gender"
          value={dogDetails.dogName}
          onChange={(e) => setDogDetails({ ...dogDetails, dogName: e.target.value })}
        />  
        <input
          type="text"
          placeholder="Tel No"
          value={dogDetails.dogName}
          onChange={(e) => setDogDetails({ ...dogDetails, dogName: e.target.value })}
        />

        <input
          type="text"
          placeholder="Address"
          value={dogDetails.dogName}
          onChange={(e) => setDogDetails({ ...dogDetails, dogName: e.target.value })}
        />

        <div class="form-group">
            <h6>Experiences</h6>
            <textarea class="form-control"   id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <h6>Upload Your Certificates</h6>
        <input type="file" accept="image/*" onChange={handleUserImageChange} />

        <h6>Upload Your Work Experiences</h6>
        <input type="file" 
        accept="image/*" onChange={handleDogImageChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}


// const collectData = async (e) =>{
//   e.preventDefault();
//   let result = await fetch("http://localhost:8000/",{
//     method : 'post',
//     body: JSON.stringify({,,,}),
//     headers:{
//       'Content-Type':'application/json'
//     },
//   });
//   result = await result.json;
//   localStorage.setItem("user",JSON,stringyfy(result));
// }

export default HandlerRegistrationForm;
