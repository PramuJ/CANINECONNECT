import {React,useState} from 'react'
import  DogList  from '../helpers/DogList.json'
import DogItem from '../Components/DogItem'
import '../styles/Dogs.css'


export default function Dogs() {

  const [searchTerm , setSearchTerm] = useState("");

  return (
    <div>
      <div className="dogs-search-container">
     
    <h3>Breed : </h3>
    <input  id="searchInput" type="text" placeholder='Search here...' onChange={(event) =>
    {
      setSearchTerm(event.target.value);
    }}/>

      </div>

      


      <div className='DogList'>
      {DogList.filter((val) =>{
        if(searchTerm == "")
        {
          return val;
        }else if(val.Breed.toLowerCase().includes(searchTerm.toLowerCase()))
        {
          return val; 
        }
        }).map((dogItem, key ) => {
          return <DogItem key={key} name={dogItem.name} Age = {dogItem.Age} breed={dogItem.Breed} image={dogItem.img} location={dogItem.Location} gender={dogItem.Gender} />

      })}
      </div>
        
      </div>
  )
}
