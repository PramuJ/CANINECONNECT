import React from 'react'

export default function BlogItem({ title,description,image}) {
  return (
    <div className='BlogItem'>
      {/* <div className='blog-image-section'> */}
        <div  style={{ backgroundImage: `url(${image})` }}>
              
        </div>
      
        
        <h4>{title}</h4>
        <p>{description}</p>
        

    </div>
  )
}

