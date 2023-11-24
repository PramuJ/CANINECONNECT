import React from 'react'

export default function DogHandlerItem({ name,image,Age,location,gender,experince}) {
  return (
    <div className='DogItem'>
        <div className='Dogimage' style={{ backgroundImage: `url(${image})` }}>
            
        </div>
        <h3>{name}</h3>
        <p>Breed : {breed}</p>
        <p>Gender : {gender}</p>
        <p>Age : {Age} </p>
        <p>Location : {location}</p>
        <p>Experience : {experince}</p>
        

    </div>
  )
}
