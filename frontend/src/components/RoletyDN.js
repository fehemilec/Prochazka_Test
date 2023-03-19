import {React} from 'react';
import './RoletyDN.css';

export default function RoletyDN() {
  return (
    <div className='rolety_main_container'>
        <div className='rolety_headlines'> 
            <h1> 
                <span> Rolety den a noc </span>
            </h1>
        </div>
        <div className='rolety_text_and_image'>
            <div className='rolety_image_container'>
                <img src='/images/rolety_inner_image.jpg' alt="" />
            </div>
            <div className='rolety_text_container'> 
                <span className='text'>
                Úžasně elegantní a jednoduchý způsob jak kontrolovat světlo a soukromí kdykoliv během dne nebo v noci. Rolety den a noc umožňují posouvat dvě stylové látky s transparentními a stínícími pruh přes sebe navzájem v otevřené, nebo zcela zavřené poloze. Sami si zvolíte ideální rovnováhu mezi stíněním a dekorací.
                </span>
            </div>
        </div>
    </div>
  )
}