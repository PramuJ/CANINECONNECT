import {React,useState} from 'react'
import  VetList  from '../helpers/VetList.json'
import VetItem from '../Components/VetItem'
import '../styles/Vets.css'


export default function Vets() {

  const [searchTerm , setSearchTerm] = useState("");

  return (
    
    <div>
        <div className='dog-search-bars'>
          <div className='searchInput_Container'>
                <h3>Location</h3>
            
                
                      <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
                  {
                    setSearchTerm(event.target.value);
                  }}/>
                 
          </div>
          
        </div>

      


        <div className='VetList'>
          {VetList.filter((val) =>{
            if(searchTerm == "")
            {
              return val;
            }else if(val.Location.toLowerCase().includes(searchTerm.toLowerCase()))
            {
              return val; 
            }
            }).map((vetItem, key ) => {
              return <VetItem key={key} name={vetItem.name} Age = {vetItem.Age}  image={vetItem.img} location={vetItem.Location} gender={vetItem.Gender} />

          })}
        </div>
        
      </div>
  )
}
