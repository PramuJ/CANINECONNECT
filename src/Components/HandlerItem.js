import React from 'react'

export default function HandlerItem({name,Age,gender,location,image}) {
  return (
    <div className='HandlerItem'>
    <div className='Handlerimage' style={{ backgroundImage: `url(${image})` }}>
        
    </div>
    
    <p>Name : {name}</p>
    <p>Location : {location} </p>
    <p>Gender : {gender}</p>
    <p>Age : {Age}</p>
    
    
    
    

</div>
  )
  
}

