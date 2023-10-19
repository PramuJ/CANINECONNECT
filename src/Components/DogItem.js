import React from 'react'

export default function DogItem({ name,image,breed,Age,location,gender}) {
  return (
    <div className='DogItem'>
        <div className='Dogimage' style={{ backgroundImage: `url(${image})` }}>
            
        </div>
        <h3>{name}</h3>
        <p>Breed : {breed}</p>
        <p>Gender : {gender}</p>
        <p>Age : {Age} </p>
        <p>Location : {location}</p>
        

    </div>
  )
}
