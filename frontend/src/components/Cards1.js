import React from 'react';
import './Cards1.css';
import CardItem1 from './CardItem1';

function Cards1() {
  return (
    <div className='product_cards'>
      <h1>Využijte naší jedinečné nabídky</h1>
      <div className='product_cards__container'>
          <div className='product_cards_wrapper_first_row'>
            <ul className='cards__items_1'>
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
            <ul className='cards__items_2'>
              <CardItem1
                src='images/latkove_rolety.jpg'
                text='Okenní sítě proti hmyzu'
                informaci="Vice informaci"
                path='/Horizontal'
              />
              <CardItem1
                src='images/rimske_rolety.jpg'
                text='Dveřní sítě proti hmyzu'
                informaci="Vice informaci"
                path='/Horizontal'
              />
            </ul>
          </div>
          <div className='product_cards_wrapper_second_row'>
            <ul className='cards__items_3'>
              <CardItem1
                src='images/rolety_noc_a_den.jpg'
                text='Rolety NOC a DEN'
                informaci="Vice informaci"
                path='/products'
              />
              <CardItem1
                src='images/plisse_zaluzie.jpg'
                text='Látkové rolety'
                informaci="Vice informaci"
                path='/products'
              />
            </ul>
            <ul className='cards__items_4'>
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
  );
}

export default Cards1;
