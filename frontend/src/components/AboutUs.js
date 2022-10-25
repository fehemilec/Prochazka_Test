import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='aboutcontainer'>
      <div className='aboutPic'> <img src='/images/backg_1.png' alt=""/> </div>
        <div className='aboutText'> 
          <div className='titleOne'><h1> O Nás </h1></div>
          <div className='titleTwo'><h1> Žaluzie Procházka </h1></div>
          <div  className='about_info'>
            <span> Naše firma působí na trhu již od roku 1996. Nabízí širokou škálu stínící techniky v okrese Louny. Jsme autorizovaným prodejcem společností VELUX a KASKO, které jsou na českém trhu jedny z nejsilnějších firem v oboru stínící techniky.
            </span>
          </div>
          </div>
    </div>
  );
}