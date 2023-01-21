import React from 'react'
import CardItem1 from './CardItem1';
import './HomeCards.css';
export default function HomeCards() {
  return (
    <div className='home_cards_container'>
      <div className='home_cards_sub_container' id='ext'>
        <div className='home_cards_main_wrapper'>
          <div className='home_cards_wrapper_first_row'>
            <ul className='first_row_first_two'>
              <CardItem1
                src='images/img_hor.jpg'
                text='Horizontální žaluzie'
                informaci="Vice informaci"
                path='/Horizontal'
              />
              <CardItem1
                src='images/vertikalni_zaluzie.jpg'
                text='Vertikální žaluzie'
                informaci="Vice informaci"
                path='/products'
              />
            </ul>
            <ul className='first_row_last_two'>
              <CardItem1
                src='images/latkove_rolety.jpg'
                text='Látkové rolety'
                informaci="Vice informaci"
                path='/Horizontal'
              />
              <CardItem1
                src='images/rimske_rolety.jpg'
                text='Římské rolety'
                informaci="Vice informaci"
                path='/Horizontal'
              />
            </ul>
          </div>
          <div className='home_cards_wrapper_second_row'>
            <ul className='second_row_first_two'>
              <CardItem1
                src='images/rolety_noc_a_den.jpg'
                text='Rolety NOC a DEN'
                informaci="Vice informaci"
                path='/products'
              />
              <CardItem1
                src='images/plisse_zaluzie.jpg'
                text='Plissé žaluzie'
                informaci="Vice informaci"
                path='/products'
              />
            </ul>
            <ul className='second_row_last_two'>
              <CardItem1
                src='images/venkovni_rolety.jpg'
                text='Venkovní rolety SUNROL'
                informaci="Vice informaci"
                path='/Horizontal'
              />
              <CardItem1
                src='images/img_nah.jpg'
                text='Náhradní díly'
                informaci="Vice informaci"
                path='/products'
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}