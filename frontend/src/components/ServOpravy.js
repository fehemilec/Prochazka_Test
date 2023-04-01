import {React} from 'react';
import './ServOpravy.css';

export default function ServOpravy() {
  return (
     <div className='SO_container'>
        <div className='SO_headlines'> 
            <h1> 
                <span> SERVIS A OPRAVY OKEN A DVERI </span>
            </h1>
        </div>
        <div className='SO_text_container'> 
          <div className='SO_text_and_image'>
            <span className='SO_text'>
                <h4> zabezpečujeme servis a opravy oken a dveří z plastu, dřeva a hliníku </h4>
                <ol>
                    <li>opravy po mechanickém poškození</li>
                    <li>pozáruční opravy oken a dveří různých výrobců</li>
                    <li>výměnu prasklých a rozbitých skel (přesklení)</li>
                    <li>opravy kování</li>
                    <li>opravy poškozených těsnění</li>
                    <li>výměna ovládacích oliv (klik)</li>
                    <li>
                        <a href="https://www.servisaopravyoken.cz/nahradni-dily">
                            prodej náhradních dílů pro okna a dveře
                        </a>
                    </li>
                </ol> 
                <br></br>
                <h4> zajišťujeme pravidelné <a href="https://www.servisaopravyoken.cz/nase-sluzby">servisní prohlídky</a> výrobků různých firem (plast, dřevo,Okno hliník) </h4>
                <ol>
                    <li>promazání kování a seřízení chodu výrobků</li>
                    <li>případná výměna okna / dveří při neopravitelných závadách</li>
                </ol> 
            </span>
            <div className='SO_first_image_container'>
                <img src='/images/servis_opravy_1.jpg' alt="" />
            </div>
          </div>
          <br></br>          
          <div className='SO_bottom_text_and_image'>
            <div className='SO_bottom_text'>
                <div className='bottom_inner_text'>
                    Nejčastěji se na naší firmu <a href="http://www.servisokenadveri.cz/74/kontakt/">obracejí</a> zákazníci s problémem. " Máme plastová okna od jiné firmy a ta nejdou dovírat. Firma už není na trhu a přitom slibovala <a href="http://www.servisokenadveri.cz/75/co-umime/">záruční</a> i <a href="http://www.servisokenadveri.cz/75/co-umime/">pozáruční servis</a>. Rozbilo se mi kování, protáčí se mi klika. Praslo mi sklo a nevím jak si poradit. Co s tím máme teď dělat?" Díky našim zkušenostem  nabídneme zákazníkovi to nejlepší řešení v servisování a opravě oken, dveří, výloh, balkonových sestav.
                    <br></br>
                    <br></br>
                    Dalším požadavkem zákazníků je seřízení oken nebo vchodových dveří. Okna se chovají jinak v zimních nebo letních podmínkách. Ideálního stavu docílíme pravidelným <a href="http://www.servisokenadveri.cz/75/co-umime/">seřízením</a> na jaře a na podzim.
                    <br></br>
                    <br></br>
                    Jednou v roce doporučuje každý výrobce promazat pohyblivé části a těsnění.
                    <br></br>
                    <br></br>
                    Pokud potřebujete pomoci popřípadě poradit, <a href="http://www.servisokenadveri.cz/74/kontakt/">kontaktujte</a> nás
                </div>
            </div>
            <div className='SO_second_image_container'>
                <img src='/images/servis_opravy_2.jpg' alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}