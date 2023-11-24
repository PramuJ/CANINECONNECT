import React from 'react'

export default function VehicleItem(Owners_name,Model,image, Location) {
  return (
    <div className='VehicleItem'>
    <div className='Vehicleimage' style={{ backgroundImage: `url(${image})` }}>
        
    </div>
    
   
    <p>Owners_name : {Owners_name}</p>
    <p>Model : {Model}</p>
    <p>Location : {Location} </p>
    
    

</div>
  )
  
}

