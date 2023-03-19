import {React} from 'react';
import './Okenni.css';

export default function Okenni() {
  return (
     <div className='Okenni_container'>
        <div className='Okenni_headlines'> 
            <h1> 
                <span> NEJJEDNODUŠŠÍ OCHRANA PŘED DOTĚRNÝM HMYZEM </span>
            </h1>
        </div>
        <div className='Okenni_text_and_image__container'>
            <div className='Okenni_image_container'>
                <img src='/images/okeny_site.jpg' alt="" />
            </div>
            <div className='Okenni_text_container'> 
                <span className='Okenni_text'>
                Sítě proti hmyzu nabízíme ve všech možných konstrukčních variantách na všechny typy oken. Spojují v sobě jednoduchost řešení montáže s vysokou užitnou hodnotou. Sítě jsou vyráběny z různých profilů v několika barevných variantách s možností lakování do odstínů dle vzorníku RAL. Nabídka barevného sladění umožňuje dokonalý estetický soulad s rámem okna. <br></br><br></br>
                Rám sítě je vyroben z válcovaných nebo extrudovaných hliníkových profilů, síťovina je zajištěna v profilu gumou. Systémy uchycení se volí podle typu profilu a typu okenního rámu. Všechny umožňují sejmutí sítí z okna.


                </span>
            </div>
        </div>
    </div>
  )
}