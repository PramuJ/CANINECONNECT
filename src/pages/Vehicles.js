import {React,useState} from 'react'
import  VehicleList  from '../helpers/VehicleList.json'
import VehicleItem from '../Components/VehicleItem'
// import '../styles/Vehicles.css'


export default function Vehicles() {

  const [searchTerm , setSearchTerm] = useState("");

  return (
    <div>
      <div className="vehicles-search-container">
     
      <h3>Model</h3>
      <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
    {
      setSearchTerm(event.target.value);
    }}/>

      </div>

      
      <div className='VehicleList'>
      
      </div>
        
      </div>
  )
}
