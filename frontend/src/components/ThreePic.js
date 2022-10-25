import React from 'react'
import './ThreePic.css';
export default function ThreePic() {
  return (
    <div>
    <div className='threepiccontainer'>
        <div className='firstPic'> <img src='/images/Rectangle_3.png' alt=""/> </div>
        <div className='secondPic'> <img src='/images/Rectangle_3-1.png' alt=""/> </div>
        <div className='thirdPic'> <img src='/images/Rectangle_3-2.png' alt=""/> </div>
        <div className='thirdPic'> <img src='/images/Rectangle_3-3.png' alt=""/> </div>
    </div>
    <div className='threepiccontainer'>
    <div className='firstPic'> <img src='/images/Rectangle_3-4.png' alt=""/> </div>
    <div className='secondPic'> <img src='/images/Rectangle_3-5.png' alt=""/> </div>
    <div className='thirdPic'> <img src='/images/Rectangle_3-6.png' alt=""/> </div>
    <div className='thirdPic'> <img src='/images/Rectangle_3-7.png' alt=""/> </div>
    </div>

    </div>
  )
}