import {React, useState} from 'react'
import Popup from 'reactjs-popup';

const Popup = () => {

  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  )
}

export default Popup