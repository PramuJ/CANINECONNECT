//WOKRING WITH JSON FILE
// import {React,useState} from 'react'
// import  DogList  from '../helpers/DogList.json'
// import DogItem from '../Components/DogItem'
// import '../styles/Dogs.css'


// export default function Dogs() {

//   const [searchTerm , setSearchTerm] = useState("");

//   return (
//     <div>
    
//         <div className='dog-search-bars'>
//           <div className='searchInput_Container'>
//                 <h3>Breed</h3>
            
                
//                       <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
//                   {
//                     setSearchTerm(event.target.value);
//                   }}/>
                 
//           </div>
          
//         </div>
//         <div className='DogList'>
//         {DogList.filter((val) =>{
//           if(searchTerm == "")
//           {
//             return val;
//           }else if(val.Breed.toLowerCase().includes(searchTerm.toLowerCase()))
//           {
//             return val; 
//           }
//           }).map((dogItem, key ) => {
//             return <DogItem key={key} name={dogItem.name} Age = {dogItem.Age} breed={dogItem.Breed} image={dogItem.img} location={dogItem.Location} gender={dogItem.Gender} />

//         })}
//       </div>
        

      

  
      
        
//       </div>
//   )
// }

//WORKING DATA FROM BACKEND WITHOUT IMAGE
// 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogItem from '../Components/DogItem';
import '../styles/Dogs.css';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    // Fetch dogs from the backend when the component mounts
    axios.get('http://localhost:5000/dogs') // Replace with your backend URL and port
      .then(response => {
        setDogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching dogs:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <div className="dogs-search-container">
        <h3>Breed: </h3>
        <input
          id="searchInput"
          type="text"
          placeholder="Search here..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      

      <div className="DogList">
        {dogs
          .filter((val) => {
            if (!val.breed) {
              return false; // Skip items without a defined breed
            }
            return val.breed.toLowerCase().includes(searchTerm.toLowerCase());
            //return val.age.toString().includes(searchTerm);

          })
          .map((dogItem, key) => (
            <DogItem
              key={key}
              name={dogItem.name}
              Age={dogItem.age}
              breed={dogItem.breed}
              image={dogItem.image} // Pass the image URL as a prop
              location={dogItem.location}
              gender={dogItem.gender}
            />
          ))}
      </div>
    </div>
  );
}
