import React from 'react'

export default function DogItem({ name,image,location,gender}) {
  return (
    <div className='DogItem'>
        <div className='Dogimage' style={{ backgroundImage: `url(${image})` }}>
            
        </div>
        <h3>{name}</h3>
        <p>Location : {location}</p>
        <p>Gender : {gender}</p>

    </div>
  )
}
