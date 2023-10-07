import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import '../styles/home.css'
import BannerImage from '../Assets/pexels-rk-jajoria-1189673.jpg';


export default function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
       <div className='headerContainer'>
        
       <h1>CANINECONNECT </h1>
        {/* <Link to='/About'>Go to the about page</Link> */}
        <p>Connecting Canine Companions: Where Dogs Find Love and Families Find Joy.</p>
        <Link>
          <button>
              Sign in
          </button>
          
        </Link>
        <Link>
        <button>
              Register
          </button>
          </Link>
        
        
        </div> 
        
    </div>
  )
}
