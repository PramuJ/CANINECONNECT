import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Forms.css";

function DogRegistrationForm() {
  const [dogDetails, setDogDetails] = useState({
    name: '',
    age: '',
    breed: '',
    location: '',
    gender: '',
    image: null, // Store the selected image file
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDogDetails({ ...dogDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    setDogDetails({ ...dogDetails, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', dogDetails.name);
    formData.append('age', dogDetails.age);
    formData.append('breed', dogDetails.breed);
    formData.append('location', dogDetails.location);
    formData.append('gender', dogDetails.gender);
    formData.append('image', dogDetails.image);

    try {
      // Send form data (including image) to backend server
      const response = await axios.post('http://localhost:5000/dogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Dog registered successfully:', response.data);
      alert("Dog registered successfully!");
      
      // Reset form fields after successful submission
      setDogDetails({
        name: '',
        age: '',
        breed: '',
        location: '',
        gender: '',
        image: null,
      });
    } catch (error) {
      console.error('Error registering dog:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Dog Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={dogDetails.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={dogDetails.age} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Breed:</label>
          <select name="breed" value={dogDetails.breed} onChange={handleInputChange} required>
            <option value="">Select Breed</option>
            <option value="Labrador Retriever">Labrador Retriever</option>
            <option value="German Shepherd">German Shepherd</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Bulldog">Bulldog</option>
            <option value="Beagle">Beagle</option>
            <option value="Poodle">Poodle</option>
            <option value="Rottweiler">Rottweiler</option>
            <option value="Yorkshire Terrier">Yorkshire Terrier</option>
            <option value="Boxer">Boxer</option>
            <option value="Dachshund">Dachshund</option>
            <option value="Siberian Husky">Siberian Husky</option>
            <option value="Doberman Pinscher">Doberman Pinscher</option>
            <option value="Great Dane">Great Dane</option>
            <option value="Australian Shepherd">Australian Shepherd</option>
            <option value="Shih Tzu">Shih Tzu</option>
          </select>
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={dogDetails.location} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={dogDetails.gender} onChange={handleInputChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Upload Image of the dog:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default DogRegistrationForm;


//WITH IMAGE
// import React, { useState } from 'react';
// import axios from 'axios';

// function DogRegistrationForm() {
//   const [dogDetails, setDogDetails] = useState({
//     name: '',
//     age: '',
//     breed: '',
//     location: '',
//     gender: '',
//     image: null, // Store the selected image file
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDogDetails({ ...dogDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setDogDetails({ ...dogDetails, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('name', dogDetails.name);
//     formData.append('age', dogDetails.age);
//     formData.append('breed', dogDetails.breed);
//     formData.append('location', dogDetails.location);
//     formData.append('gender', dogDetails.gender);
//     formData.append('image', dogDetails.image);

//     try {
//       // Send form data (including image) to backend server
//       const response = await axios.post('http://localhost:5000/dogs', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Dog registered successfully:', response.data);
      
//       // Reset form fields after successful submission
//       setDogDetails({
//         name: '',
//         age: '',
//         breed: '',
//         location: '',
//         gender: '',
//         image: null,
//       });
//     } catch (error) {
//       console.error('Error registering dog:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Dog Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={dogDetails.name} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input type="number" name="age" value={dogDetails.age} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Breed:</label>
//           <input type="text" name="breed" value={dogDetails.breed} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input type="text" name="location" value={dogDetails.location} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <select name="gender" value={dogDetails.gender} onChange={handleInputChange} required>
//             <option value="">Select</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>
//         <div>
//           <label>Upload Image of the dog:</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} required />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default DogRegistrationForm;



// BASIC CODE 
// import React, { useState } from 'react';
// import "../styles/Forms.css"


// function DogRegistrationForm() {
    
//   const [userDetails, setUserDetails] = useState({
//     username: '',
//     email: '',
//   });

//   const [dogDetails, setDogDetails] = useState({
//     dogName: '',
//     breed: '',
//   });

//   const [userImage, setUserImage] = useState(null);
//   const [dogImage, setDogImage] = useState(null);

//   const handleUserImageChange = (e) => {
//     const file = e.target.files[0];
//     setUserImage(file);
//   };

//   const handleDogImageChange = (e) => {
//     const file = e.target.files[0];
//     setDogImage(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here, you can implement code to send data (including images) to a server.
    


//   };

//   return (
//     <div>
//       <h2>Dog Owner Registration   Form</h2>
//       <form onSubmit={handleSubmit}>
//         <h3>User Details</h3>
//         <input
//           type="text"
//           placeholder="Username"
//           value={userDetails.username}
//           onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={userDetails.email}
//           onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
//         />
//         <input type="file" accept="image/*" onChange={handleUserImageChange} />

//         <h3>Dog Details</h3>
//         <input
//           type="text"
//           placeholder="Dog's Name"
//           value={dogDetails.dogName}
//           onChange={(e) => setDogDetails({ ...dogDetails, dogName: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Breed"
//           value={dogDetails.breed}
//           onChange={(e) => setDogDetails({ ...dogDetails, breed: e.target.value })}
//         />
//         <input type="file" accept="image/*" onChange={handleDogImageChange} />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default DogRegistrationForm;


//WORKING WITHOUT IMAGE
// import React, { useState } from 'react';
// import axios from 'axios';
// import "../styles/Forms.css";

// function DogRegistrationForm() {
//   const [dogDetails, setDogDetails] = useState({
//     name: '',
//     age: '',
//     breed: '',
//     location: '',
//     gender: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:5000/dogs', dogDetails);
//       setDogDetails({ name: '', age: '', breed: '', location: '', gender: '' });

//       alert('Dog registration successful!');
//     } catch (error) {
//       console.error('Error:', error.message);
//       alert('Failed to register dog. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Dog Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={dogDetails.name}
//           onChange={(e) => setDogDetails({ ...dogDetails, name: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           value={dogDetails.age}
//           onChange={(e) => setDogDetails({ ...dogDetails, age: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Breed"
//           value={dogDetails.breed}
//           onChange={(e) => setDogDetails({ ...dogDetails, breed: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={dogDetails.location}
//           onChange={(e) => setDogDetails({ ...dogDetails, location: e.target.value })}
//         />
//         <select
//           value={dogDetails.gender}
//           onChange={(e) => setDogDetails({ ...dogDetails, gender: e.target.value })}
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <button type="submit">Register Dog</button>
//       </form>
//     </div>
//   );
// }

// export default DogRegistrationForm;







