
import React from "react";
import FullName from "./profile/FullName";
import Photo from "./profile/ProfilPhoto"
import Adress from "./profile/Adress"
import './style.css'

const main = () => {
  return ( 
      <div className='main'>
      <div className="card">
        <FullName />
        <Photo />
        <Adress />
      </div>
      </div> 
  )
}

export default main