import {React} from 'react';
import './Vertical.css';

export default function Vertical() {
  return (
    <div className='vertical_container'>
        <div className='headlines'> 
            <h1 className='vertical_container'> 
                <span> Vertikální žaluzie elegantně doplní Váš interiér </span>
            </h1>
            <h2 className='vertical_container'>
                <span> NAHRADÍ ZÁCLONY NEBO ZÁVĚSY </span>  
            </h2>
        </div>
        <div className='text_and_image__container'>
            <div className='image_container'>
                <img src='/images/vertikalny_inner_pic.jpg' alt="" />
            </div>
            <div className='text_container'> 
                <span className='text'>
                    Vertikální žaluzie elegantně doplní Váš interiér a zcela nahradí záclony nebo závěsy. 
                    Díky široké nabídce materiálů a barevných odstínů vkusně a moderně sladíte Vaši kancelář i domov. 
                    Jejich antistatická úprava, barevná a tvarová stálost vyžadují minimální nároky na údržbu. 
                    Mezi její další přednosti patří schopnost zaclonit velké plochy. 
                    Montáž je velmi jednoduchá a rychlá, přičemž celkový dojem vede k provzdušnění celého prostoru. 
                    Překvapí Vás řadou neočekávaných světelných a prostorových efektů.
                </span>
            </div>
        </div>
    </div>
  )
}