import React from 'react';
import './Spocitat.css';

export default function Spocitat() {
  return (
    <div className='spocitat_container'>
      <div className='spocitat_text'> 
        <div className='spocitat_inner_text'>
          <div className='spocitat_text_1'><span> Oblíbený produkt </span></div>
          <div className='spocitat_text_2'><h1> Horizontální žaluzie </h1></div>
          <div  className='spocitat_info'>
            <span> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus blandit magna tristique varius pulvinar nibh. Rutrum auctor diam elementum cursus interdum. Felis volutpat pharetra at ut. Felis convallis morbi tortor nulla cursus imperdiet vitae urna.
            </span>
          </div>
          <div className="spocitat_button" onClick={"google.com"}>
            Spočítat si cenu <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>

      <div className='spocitat_pic'> 
        <div className="spocitat_sub">
          <img className= "circle" src='/images/spocitat_circle.png' alt=""/> 
          <img className= "spc_img" src='/images/spocitat_image.png' alt=""/> 
        </div>
      </div>
    </div>
  );
}