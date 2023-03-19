import {React} from 'react';
import './RoletyLatkove.css';

export default function RoletyLatkove() {
  return (
     <div className='LR_container'>
        <div className='LR_headlines'> 
            <h1> 
                <span> Vylaďte si interiér </span>
            </h1>
            <h2>
                <span> VOLBA INTENZITY ZASTÍNĚNÍ A KOMPLEXNÍHO BAREVNÉHO SLADĚNÍ </span>  
            </h2>
        </div>
        <div className='LR_text_and_image__container'>
            <div className='LR_image_container'>
                <img src='/images/VNITRNI-ROLETY-Cab.jpg' alt="" />
            </div>
            <div className='LR_text_container'> 
                <span className='LR_text'>
                Látkové roletky dávají možnost dokonalého celkového stínicího efektu v návaznosti na architektonické řešení interiérů a jsou ideálním dekoračním i praktickým doplňkem. Široká nabídka látek a typů textilních roletek umožňuje volbu intenzity zastínění a komplexního barevného sladění. Textilní roletky mají několik variant provedení montáže, a to montáž na zeď, do stropu nebo do rámu plastového okna, eurookna nebo střešního okna. Jsou vyráběny jako volně visící nebo pevné s vodicími krycími lištami a krytem návinu.
                </span>
            </div>
        </div>
    </div>
  )
}