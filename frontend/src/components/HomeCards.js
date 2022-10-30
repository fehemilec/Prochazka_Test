import React from 'react'
import CardItem1 from './CardItem1';
import './HomeCards.css';
export default function HomeCards() {
  return (
    <div className='ganz'>
      <div className='cards_main_container' id='ext'>
        <div className='cards_main_wrapper'>
        <div className='cards__wrapper_first_row'>
            <ul className='cards__items_1'>
              <CardItem1
              src='images/img_hor.jpg'
              text='Horizontální žaluzie'
              informaci="Vice informaci"
              label='Více o produktu'
              path='/Horizontal'
              />              
              <CardItem1
              src='images/vertikalni_zaluzie.jpg'
              text='Vertikální žaluzie'
              informaci="Vice informaci"
              label='Více o produktu'
              path='/products'
              />
            </ul>   
            <ul className='cards__items_2'>
              <CardItem1
              src='images/latkove_rolety.jpg'
              text='Látkové rolety'
              informaci="Vice informaci"
              label='Více o produktu'
              path='/Horizontal'
              />
              <CardItem1
              src='images/rimske_rolety.jpg'
              text='Římské rolety'
              informaci="Vice informaci"
              label='Více o produktu'
              path='/Horizontal'
              />
            </ul>   
          </div>
          <div className='cards__wrapper_second_row'>
            <ul className='cards__items_3'>
              <CardItem1
              src='images/rolety_noc_a_den.jpg'
              text='Rolety NOC a DEN'
              informaci="Vice informaci"
              label='Více o produktu'
              path='/products'
              />
              <CardItem1
              src='images/plisse_zaluzie.jpg'
              text='Plissé žaluzie'
              informaci="Vice informaci"
              label='Více o produktu'
              path='/products'
              />
            </ul> 
            <ul className='cards__items_4'>
              <CardItem1
              src='images/venkovni_rolety.jpg'
              text='Venkovní rolety SUNROL'
              informaci="Vice informaci"
              label='Více o produktu'
              path='/Horizontal'
              />
              <CardItem1
              src='images/img_nah.jpg'
              text='Náhradní díly'
              informaci="Vice informaci"
              label='Více o produktu'
              path='/products'
              />
            </ul>   
          </div>
        </div>
      </div>
    </div>
  )
}