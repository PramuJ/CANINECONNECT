import {React,useState} from 'react'
import  VehicleList  from '../helpers/VehicleList.json'
import VehicleItem from '../Components/VehicleItem'
import '../styles/Vehicles.css'


export default function Vehicles() {

  const [searchTerm , setSearchTerm] = useState("");

  return (
    <div>
      <div className='vehicle-search-bars'>
          <div className='searchInput_Container'>
                <h3>Model</h3>
            
                
                      <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
                  {
                    setSearchTerm(event.target.value);
                  }}/>     
          </div>
           <div className='searchInput_Container'>
          <h3>Location</h3>
            
                
                    <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
                  {
                    setSearchTerm(event.target.value);
                  }}/>
          </div>
          
        </div>

      <div className='VehicleList'>
        {VehicleList.filter((val) =>{
          if(searchTerm == "")
          {
            return val;
          }else if(val.Model.toLowerCase().includes(searchTerm.toLowerCase()))
          {
            return val; 
          }
          else if(val.Location.toLowerCase().includes(searchTerm.toLowerCase()))
          {
            return val; 
          }
          }).map((vehicleItem, key ) => {
            return <VehicleItem key={key} Model={vehicleItem.Model} Owners_name = {vehicleItem.Owners_name} Location={vehicleItem.Location} Image={vehicleItem.img}  />

          })}
      </div>
    </div>
       
      
        
      
  )
}


// import {React,useState} from 'react'
// import  VehicleList  from '../helpers/VehicleList.json'
// import VehicleItem from '../Components/VehicleItem'
// import '../styles/Vehicles.css'


// export default function Vehicles() {

//   const [searchTerm , setSearchTerm] = useState("");

//   return (
//     <div>
//       <div className='dog-search-bars'>
//           <div className='searchInput_Container'>
//                 <h3>Model</h3>
            
                
//                       <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
//                   {
//                     setSearchTerm(event.target.value);
//                   }}/>
                 
//           </div>
          
//         </div>

//       <div className='VehicleList'>
//         {VehicleList.filter((val) =>{
//           if(searchTerm == "")
//           {
//             return val;
//           }else if(val.Model.toLowerCase().includes(searchTerm.toLowerCase()))
//           {
//             return val; 
//           }
//           }).map((vehicleItem, key ) => {
//             return <VehicleItem key={key} Model={vehicleItem.Model} Owners_name = {vehicleItem.Owners_name} Location={vehicleItem.Location} Image={vehicleItem.img}  />

//           })}
//       </div>
//     </div>
       
      
        
      
//   )
// }
