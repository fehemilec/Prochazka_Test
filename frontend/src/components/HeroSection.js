import React from 'react';
import '../App.css';
/*import { Button } from './Button';*/
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>      
      <h1>Proč si vybrat <a> <span>právě nás</span> <img className='line' src='/images/line.png' alt=""/> </a>?</h1>
      <div className='front_cards'>
        <div className='front_cards_1'>
          <div className='firstCard'>
            <div className='first_div_icon'><i className='fas fa-user-tie'></i></div>
            <div className='first_div_text'><span> Profesionální montáž a poradenství </span></div>
            <div className='first_div_text_2'><span> Lectus pharetra ante ut arcu nibh purus, phasellus sit gravida. Eros, lorem ipsum laoreet ullamcorper ornar. </span></div>
          </div>
          <div className='secondCard'>
            <div className='second_div_icon'><i className='fas fa-sort-amount-up'></i></div>
            <div className='second_div_text'><span> Nejširší nabídka žaluzií, rolet, markýz a sítí </span></div>
            <div className='second_div_text_2'><span> Lectus pharetra ante ut arcu nibh purus, phasellus sit gravida. Eros, lorem ipsum laoreet ullamcorper ornar. </span></div>
          </div>
          <div className='thirdCard'>
            <div className='third_div_icon'><i className='fas fa-user-cog'></i></div>
            <div className='third_div_text'><span> Záruční a pozáruční servis </span></div>
            <div className='third_div_text_2'><span> Lectus pharetra ante ut arcu nibh purus, phasellus sit gravida. Eros, lorem ipsum laoreet ullamcorper ornar. </span></div>
          </div>
        </div>
        <div className='front_cards_2'>
          <div className='fourthCard'>
            <div className='fourth_div_icon'><i className='fas fa-building'></i></div>
            <div className='fourth_div_text'><span> Jsme firma s dlouholetou tradicí </span></div>
            <div className='fourth_div_text_2'><span> Lectus pharetra ante ut arcu nibh purus, phasellus sit gravida. Eros, lorem ipsum laoreet ullamcorper ornar. </span></div>
          </div>
          <div className='fifthCard'>
            <div className='fifth_div_icon'><i className='fas fa-bullseye'></i></div>
            <div className='fifth_div_text'><span> Našim cílem je spokojený zákazník </span></div>
            <div className='fifth_div_text_2'><span> Lectus pharetra ante ut arcu nibh purus, phasellus sit gravida. Eros, lorem ipsum laoreet ullamcorper ornar. </span></div>
          </div>
          <div className='sixthCard'>
            <div className='sixth_div_icon'><i className='fas fa-shipping-fast'></i></div>
            <div className='sixth_div_text'><span> Krátké dodací lhůty </span></div>
            <div className='sixth_div_text_2'><span> Lectus pharetra ante ut arcu nibh purus, phasellus sit gravida. Eros, lorem ipsum laoreet ullamcorper ornar. </span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;