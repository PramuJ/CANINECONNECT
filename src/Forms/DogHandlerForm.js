import React, { useState } from 'react';
import axios from 'axios';

function HandlerRegistrationForm() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    gender:'',
    telNo:'',
    address:'',
    experiences:'',
    image: null, // Store the selected image file
    // certificateImage: null, // Store the selected certificate image file
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    setUserDetails({ ...userDetails, image: e.target.files[0] });
  };

  // const handleCertificateImageChange = (e) => {
  //   setUserDetails({ ...userDetails, certificateImage: e.target.files[0] });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('username', userDetails.username);
    formData.append('email', userDetails.email);
    formData.append('gender', userDetails.gender);
    formData.append('telNo', userDetails.telNo);
    formData.append('address', userDetails.address);
    formData.append('experiences', userDetails.experiences);
    formData.append('image', userDetails.image);
    formData.append('certificateImage', userDetails.certificateImage);

    try {
      // Send form data (including images) to backend server
      const response = await axios.post('http://localhost:5000/handlers', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Handler registered successfully:', response.data);
      
      // Reset form fields after successful submission
      setUserDetails({
        username: '',
        email: '',
        gender:'',
        telNo:'',
        address:'',
        experiences:'',
        image: null,
        // certificateImage: null,
      });
    } catch (error) {
      console.error('Error registering handler:', error);
    }
  };

  return (
    <div>
      <h2>Dog Handler Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Handler Name:</label>
          <input type="text" name="username" value={userDetails.username} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userDetails.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={userDetails.gender} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Tel No:</label>
          <input type="text" name="telNo" value={userDetails.telNo} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={userDetails.address} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Experiences:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="experiences" value={userDetails.experiences} onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label>Upload Your Photo:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </div>
        {/* <div>
          <label>Upload Your Certificates:</label>
          <input type="file" accept="image/*" onChange={handleCertificateImageChange} required />
        </div> */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default HandlerRegistrationForm;



//FORM WITHOUT IMAGE
// import React, { useState } from 'react';
// import "../styles/Forms.css"


// function HandlerRegistrationForm() {
    
//   const [userDetails, setUserDetails] = useState({
//     username: '',
//     email: '',
//     gender:'',
//     telNo:'',
//     address:'',
//     experiences:'',
//   });



//   const [userImage, setUserImage] = useState(null);
//   const [certiImage, setcertiImage] = useState(null);

//   const handleUserImageChange = (e) => {
//     const file = e.target.files[0];
//     setUserImage(file);
//   };

//   const handlecertiImageChange = (e) => {
//     const file = e.target.files[0];
//     setcertiImage(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here, you can implement code to send data (including images) to a server.
//   };

//   return (
//     <div>
//       <h2>Dog Handler Registration Form </h2>
//       <form onSubmit={handleSubmit}>
        
//         <input
//           type="text"
//           placeholder="Handler Name"
//           value={userDetails.username}
//           onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={userDetails.email}
//           onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
//         />

//         <input
//           type="text"
//           placeholder="Gender"
//           value={userDetails.gender}
//           onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })}
//         />  
//         <input
//           type="text"
//           placeholder="Tel No"
//           value={userDetails.telNo}
//           onChange={(e) => setUserDetails({ ...userDetails, telNo: e.target.value })}
//         />

//         <input
//           type="text"
//           placeholder="Address"
//           value={userDetails.address}
//           onChange={(e) => setUserDetails({ ...userDetails, daddress: e.target.value })}
//         />

//         <div class="form-group">
//             <h6>Experiences</h6>
//             <textarea class="form-control"   id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>

//         <h6>Upload Your Certificates</h6>
//         <input type="file" accept="image/*" onChange={handleUserImageChange} />

//         <h6>Upload Your Photo</h6>
//         <input type="file" 
//         accept="image/*" onChange={handlecertiImageChange} />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }




// export default HandlerRegistrationForm;


