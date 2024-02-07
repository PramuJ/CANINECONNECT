import {React,useState} from 'react'
import  HandlerList  from '../helpers/HandlerList.json'
import HandlerItem from '../Components/HandlerItem'
import '../styles/Handlers.css'


export default function Handlers() {

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

      


        <div className='HandlerList'>
          {HandlerList.filter((val) =>{
            if(searchTerm == "")
            {
              return val;
            }else if(val.Location.toLowerCase().includes(searchTerm.toLowerCase()))
            {
              return val; 
            }
            }).map((handlerItem, key ) => {
              return <HandlerItem key={key} name={handlerItem.name} Age = {handlerItem.Age} image={handlerItem.img} location={handlerItem.Location} gender={handlerItem.Gender} />

          })}
        </div>
        
      </div>
  )
}
