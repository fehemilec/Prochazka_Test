import React from 'react';
import './Spocitat.css';

export default function Spocitat() {
  return (
    <div className='spocitat_container'>
        <div className='spocitat_text'> 
          <div className='spocitat_text_1'><span> Oblíbený produkt </span></div>
          <div className='spocitat_text_2'><h1> Horizontální žaluzie </h1></div>
          <div  className='spocitat_info'>
            <span> Naše firma působí na trhu již od roku 1996. Nabízí širokou škálu stínící techniky v okrese Louny. Jsme autorizovaným prodejcem společností VELUX a KASKO, které jsou na českém trhu jedny z nejsilnějších firem v oboru stínící techniky.
            </span>
          </div>
          <div className="spocitat_button" onClick={"google.com"}>
          Spočítat si cenu <i class="fa-solid fa-angle-right"></i>
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