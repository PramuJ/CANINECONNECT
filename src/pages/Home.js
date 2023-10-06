import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'


export default function Home() {
  return (
    <div>
        <NavBar/>

        <h1>CANINECONNECT Home page</h1>
        {/* <Link to='/About'>Go to the about page</Link> */}
    </div>
  )
}
