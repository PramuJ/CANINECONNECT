import React from 'react'
import NavBar from '../Components/NavBar'
import { DogList } from '../helpers/DogList'
import DogItem from '../Components/DogItem'
import '../styles/Dogs.css'

export default function Dogs() {
  return (
    <div>
      <div className='DogList'>
      {DogList.map((dogItem, key ) => {
          return <DogItem key={key} name={dogItem.name} image={dogItem.image} location={dogItem.Location} gender={dogItem.Gender} />

      })}
      </div>
        
      </div>
  )
}
