// import React from 'react'

// export default function DogItem({ name,image,breed,Age,location,gender}) {
//   return (
//     <div className='DogItem'>
//         <div className='Dogimage' style={{ backgroundImage: `url(http:/localhost:5000/${image})` }}>

            
//         </div>
//         <h3>{name}</h3>
//         <p>Breed : {breed}</p>
//         <p>Gender : {gender}</p>
//         <p>Age : {Age} </p>
//         <p>Location : {location}</p>
        

//     </div>
//   )
// }

import React from 'react';

export default function DogItem({ name, image, breed, Age, location, gender }) {
  // Check if the image prop is defined before manipulating it
  const imageUrl = image ? `http://localhost:5000/${image.replace(/\\/g, '/')}` : '';
  

  return (
    <div className='DogItem'>
      {/* Use the imageUrl variable in the style attribute */}
      <div className='Dogimage' style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      <h3>{name}</h3>
      <p>Breed: {breed}</p>
      <p>Gender: {gender}</p>
      <p>Age: {Age}</p>
      <p>Location: {location}</p>
    </div>
  );
}


