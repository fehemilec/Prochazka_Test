import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='aboutcontainer'>
      <div className='aboutPic'> 
        <div className="aboutguy">
          <img className= "arrow" src='/images/arrow_3.png' alt=""/> 
          <img className= "guy" src='/images/backg_1.png' alt=""/> 
        </div>
      </div>
        <div className='aboutText'> 
          <div className='titleOne'><h1> O Nás </h1></div>
          <div className='titleTwo'><h1> Žaluzie Procházka </h1></div>
          <div  className='about_info'>
            <span> 
            Horizontální žaluzie stále představují nejrozšířenější způsob protisluneční ochrany a staly se 
            nedílnou součástí interiéru, ochraňují nejen proti slunečním paprskům, regulují světlo v místnosti, ale chrání i vaše soukromí. Využití horizontálních žaluzií je mnohostranné a jejich barevná škála dovoluje harmonicky sladit barvy v místnosti s barevnými doplňky a vytvořit tak příjemnou atmosféru dle vašeho vkusu. Výhodou je jejich jednoduchost, rychlost montáže, minimální údržba a cenová dostupnost.
            </span>
          </div>
          </div>
    </div>
  );
}