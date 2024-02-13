import React from 'react'

export default function VetItem({name,Age,gender,location,image,experience,services}) {
  return (
    <div className='VetItem'>
    <div className='Vetimage' style={{ backgroundImage: `url(${image})` }}>
        
    </div>
    
    <p>Name : {name}</p>
    <p>Location : {location} </p>
    <p>Gender : {gender}</p>
    <p>Age : {Age}</p>
    <p>experience :{experience}</p>
    <p>services : {services}</p>
    
    
    
    

</div>
  )
  
}

