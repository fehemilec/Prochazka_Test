import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='aboutcontainer'>
      <div className='aboutPic'> 
        <div className="aboutguy">
          <img className= "guy" src='/images/backg_1.png' alt=""/> 
          <img className= "arrow" src='/images/arrow_3.png' alt=""/> 
        </div>
      </div>
      <div className='aboutText'> 
        <div className='titleOne'>
          <span> O nás </span>
        </div>
        <div className='titleTwo'>
          <h1> Žaluzie Procházka </h1>
        </div>
        <div  className='about_info'>
          <span> 
          Naše firma působí na trhu již od roku 1996. Nabízí širokou škálu stínící techniky v okrese Louny. Jsme autorizovaným prodejcem společností VELUX a KASKO, které jsou na českém trhu jedny z nejsilnějších firem v oboru stínící techniky.
          </span>
        </div>
      </div>
    </div>
  );
}