//FROM JSON FILE
// import {React,useState} from 'react'
// import  HandlerList  from '../helpers/HandlerList.json'
// import HandlerItem from '../Components/HandlerItem'
// import '../styles/Handlers.css'


// export default function Handlers() {

//   const [searchTerm , setSearchTerm] = useState("");

//   return (
    
//     <div>
//        <div className='dog-search-bars'>
//           <div className='searchInput_Container'>
//                 <h3>Location</h3>
            
                
//                       <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
//                   {
//                     setSearchTerm(event.target.value);
//                   }}/>
                 
//           </div>
          
//         </div>

      


//         <div className='HandlerList'>
//           {HandlerList.filter((val) =>{
//             if(searchTerm == "")
//             {
//               return val;
//             }else if(val.Location.toLowerCase().includes(searchTerm.toLowerCase()))
//             {
//               return val; 
//             }
//             }).map((handlerItem, key ) => {
//               return <HandlerItem key={key} name={handlerItem.name} Age = {handlerItem.Age} image={handlerItem.img} location={handlerItem.Location} gender={handlerItem.Gender} />

//           })}
//         </div>
        
//       </div>
//    )
//  }




import { React, useState, useEffect } from "react";
import HandlerList from "../helpers/HandlerList.json";
import HandlerItem from "../Components/HandlerItem";
import "../styles/Handlers.css";
import '../styles/Dogs.css';
import axios from 'axios';

export default function Handlers() {
  const [handlers,setHandlers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch handlers from the backend when the component mounts
    axios.get('http://localhost:5000/handlers') //  backend URL and port
      .then(response => {
        setHandlers(response.data);
      })
      .catch(error => {
        console.error('Error fetching handlers:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount


  return (
    <div>
      <div className="dog-search-bars">
        <div className="searchInput_Container">
          <h3>Location</h3>

          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="HandlerList">
        {handlers.filter((val) => {
          // if (searchTerm == "") {
          //   return val;
          // } else if (
          //   val.address.toLowerCase().includes(searchTerm.toLowerCase())
          // ) {
          //   return val;
          // }
          if (!val.address) {
            return false; // Skip items without a defined breed
          }
          return val.address.toLowerCase().includes(searchTerm.toLowerCase());
        
        }).map((handlerItem, key) => {
          return (
            <HandlerItem
              key={key}
              username={handlerItem.username}
              // Age={handlerItem.age}
              gender={handlerItem.gender}
              image={handlerItem.image}
              address={handlerItem.address}
              // experience={handlerItem.experience}
              telNo={handlerItem.telNo}
            />
          );
        })}
      </div>
    </div>
  );
}


