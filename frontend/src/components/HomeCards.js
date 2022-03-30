import React from 'react'
import CardItem1 from './CardItem1';
import './HomeCards.css';
export default function HomeCards() {
  return (
    <div className='ganz'>
      
        <div className='cards__container' id='ext'>
    <div className='cards__wrapper'>
      <ul className='cards__items'>
        <CardItem1
          src='images/img_hor.jpg'
          text='Horizontální žaluzie'
          label='Více o produktu'
          path='/Horizontal'
        />
        <CardItem1
          src='images/img_nah.jpg'
          text='Náhradní díly'
          label='Více o produktu'
          path='/products'
        />
      </ul>          
    </div>
  </div>
  </div>
  )
}