import React from 'react'

export default function VehicleItem({Model,Image,Owners_name, Location}) {
  return (
    <div className='VehicleItem'>
      <div className='Vehicleimage' style={{ backgroundImage: `url(${Image})` }}>
          
      </div>
    
        <p>{Model}</p>
        <p>Owners_name : {Owners_name}</p>
        <p>Location : {Location} </p>
    
    

    </div>
  )
  
}

