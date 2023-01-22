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
            <div className='first_div_icon'><img className='user_icon' src='/images/user.svg' alt=''/></div>
            <div className='first_div_text'><span> Profesionální montáž a poradenství </span></div>
            <div className='first_div_text_2'><span> Při výběru a montáži se můžete spolehnout na naši odbornou pomoc. Stačí se na nás obrátit a vše vyřešíme. </span></div>
          </div>
          <div className='secondCard'>
            <div className='second_div_icon'><img className='tag_icon' src='/images/tag.svg' alt=''/></div>
            <div className='second_div_text'><span> Nejširší nabídka žaluzií, rolet a sítí </span></div>
            <div className='second_div_text_2'><span> Pokrýváme celý sortiment žaluzií, rolet a sítí. Všechny  produkty vyberete na jednom místě, a za nejlepší ceny. </span></div>
          </div>
          <div className='thirdCard'>
            <div className='third_div_icon'><img className='wrench_icon' src='/images/wrench.svg' alt=''/></div>
            <div className='third_div_text'><span> Záruční a pozáruční servis </span></div>
            <div className='third_div_text_2'><span> Nákupem z našeho eshopu to pro nás nekončí. Jsme Vám k dispozici i v rámci záručního i pozáručního servisu. </span></div>
          </div>
        </div>
        <div className='front_cards_2'>
          <div className='fourthCard'>
            <div className='fourth_div_icon'><img className='mark_icon' src='/images/mark.svg' alt=''/></div>
            <div className='fourth_div_text'><span> Jsme firma s dlouholetou tradicí </span></div>
            <div className='fourth_div_text_2'><span> Jsme s vámi již 26 let, což svědčí o naší spolehlivosti a zkušenostech. Pro vás to znamená jistotu a klid při nákupu. </span></div>
          </div>
          <div className='fifthCard'>
            <div className='fifth_div_icon'><img className='target_icon' src='/images/target.svg' alt=''/></div>
            <div className='fifth_div_text'><span> Našim cílem je spokojený zákazník </span></div>
            <div className='fifth_div_text_2'><span> Snažíme se pro Vás celý proces ulehčit a zajistit Vám ty nejvýhodnější ceny. Ručíme za Vaši spokojenost.  </span></div>
          </div>
          <div className='sixthCard'>
            <div className='sixth_div_icon'><img className='delivery_icon' src='/images/delivery.svg' alt=''/></div>
            <div className='sixth_div_text'><span> Krátké dodací lhůty </span></div>
            <div className='sixth_div_text_2'><span> Chápeme, že naše žaluzie potřebujete co nejrychleji. Proto Vám je dodáme ve velmi krátkém čase.  </span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;