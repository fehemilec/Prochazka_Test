import React from "react";
import "./Cards1.css";
import CardItem1 from "./CardItem1";

function Cards1() {
  return (
    <div className="product_cards">
      <h1>Využijte naší jedinečné nabídky</h1>
      <div className='product_cards__container'>
          <div className='product_cards_wrapper_first_row'>
            <ul className='cards__items_1'>
              <CardItem1
                src='images/first_card.jpg'
                text='Horizontální žaluzie'
                informaci="Vice informaci"
                path='/Horizontal'
              />
              <CardItem1
                src='images/second_card.jpg'
                text='Vertikální žaluzie'
                informaci="Vice informaci"
                path='/vertikalni'
              />
            </ul>
            <ul className='cards__items_2'>
              <CardItem1
                src='images/third_card.jpg'
                text='Okenní sítě proti hmyzu'
                informaci="Vice informaci"
                path='/okenni-site'
              />
              <CardItem1
                src='images/fourth_card.jpg'
                text='Dveřní sítě proti hmyzu'
                informaci="Vice informaci"
                path='/dverni-site'
              />
            </ul>
          </div>
          <div className='product_cards_wrapper_second_row'>
            <ul className='cards__items_3'>
              <CardItem1
                src='images/fifth_card.jpg'
                text='Rolety den a noc'
                informaci="Vice informaci"
                path='/rolety'
              />
              <CardItem1
                src='images/sixth_card.jpg'
                text='Látkové rolety'
                informaci="Vice informaci"
                path='/latkove-rolety'
              />
            </ul>
            <ul className='cards__items_4'>
              <CardItem1
                src='images/seventh_card.jpg'
                text='Servis a opravy oken a dveří'
                informaci="Vice informaci"
                path='/servis-opravy'
              />
              <CardItem1
                src='images/eigth_card.jpg'
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
