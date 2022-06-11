import React from 'react'
import './ThreePic.css';
export default function ThreePic() {
  return (
    <div className='threepiccontainer'>
        <div className='firstPic'> <img src='/images/w1.jpg' alt=""/> </div>
        <div className='secondPic'> <img src='/images/w2.jpg' alt=""/> </div>
        <div className='thirdPic'> <img src='/images/w3.jpg' alt=""/> </div>
    </div>
  )
}