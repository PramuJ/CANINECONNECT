import React from 'react'

export default function HandlerItem({username,gender,address,telNo,image}) {

  // Check if the image prop is defined before manipulating it
  const imageUrl = image ? `http://localhost:5000/${image.replace(/\\/g, '/')}` : '';

  return (

    
    <div className='HandlerItem'>
    <div className='Handlerimage' style={{ backgroundImage: `url(${imageUrl})` }}>
        
    </div>
    
    <p>Name : {username}</p>
    <p>Address : {address} </p>
    <p>Gender : {gender}</p>
    <p>telNo : {telNo}</p>
    
    
    
    

</div>
  )
  
}

