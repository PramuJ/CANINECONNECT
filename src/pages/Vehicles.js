import {React,useState} from 'react'
import  VehicleList  from '../helpers/VehicleList.json'
import VehicleItem from '../Components/VehicleItem'
// import '../styles/Vehicles.css'


export default function Vehicles() {

  const [searchTerm2 , setSearchTerm2] = useState("");

  return (
    <div>
      <p>Vehicles</p>
      {/* <div className="Vehicles-search-container">
     
    <h3>Model</h3>
    <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
    {
      setSearchTerm2(event.target.value);
    }}/>

      </div>

      


      <div className='VehicleList'>
      {VehicleList.filter((val) =>{
        if(searchTerm2 == "")
        {
          return val;
        }else if(val.Model.toLowerCase().includes(searchTerm2.toLowerCase()))
        {
          return val; 
        }
        }).map((vehicleItem, key ) => {
          return <VehicleItem key={key} Owners_name={vehicleItem.Owners_name} Model = {vehicleItem.Model}  image={vehicleItem.img} location={vehicleItem.Location} />

      })}
      </div> */}
        
      </div>
  )
}
