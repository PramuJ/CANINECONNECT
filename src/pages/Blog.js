import {React,useState} from 'react'
import  BlogList  from '../helpers/BlogList.json'
import BlogItem from '../Components/BlogItem'
import '../styles/Blogs.css'


export default function Blogs() {

  

  return (
    
    
    
      <div className='BlogList'>
        {BlogList.map((blogItem, key ) => {
            return <BlogItem key={key} title={blogItem.title} description = {blogItem.description}  image={blogItem.img} />

        })}
      </div>
          
    
  )
}
