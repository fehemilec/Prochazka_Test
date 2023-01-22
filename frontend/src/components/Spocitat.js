import React from 'react';
import './Spocitat.css';
import { Link } from 'react-router-dom';

export default function Spocitat() {
  return (
    <div className='spocitat_container'>
      <div className='spocitat_text'> 
        <div className='spocitat_inner_text'>
          <div className='spocitat_text_1'><span> Oblíbený produkt </span></div>
          <div className='spocitat_text_2'><h1> Horizontální žaluzie </h1></div>
          <div  className='spocitat_info'>
            <span> 
            Horizontální žaluzie stále představují nejrozšířenější způsob protisluneční ochrany a staly se nedílnou součástí interiéru, ochraňují nejen proti slunečním paprskům, regulují světlo v místnosti, ale chrání i vaše soukromí. Využití horizontálních žaluzií je mnohostranné a jejich barevná škála dovoluje harmonicky sladit barvy v místnosti s barevnými doplňky a vytvořit tak příjemnou atmosféru dle vašeho vkusu. Výhodou je jejich jednoduchost, rychlost montáže, minimální údržba a cenová dostupnost.
            </span>
          </div>
          <div className="spocitat_button">
          <Link to='/Horizontal' className='spocitat_button_text'>Spočítat si cenu </Link><i className="fa-solid fa-angle-right"></i>
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