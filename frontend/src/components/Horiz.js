import {React, useState, useEffect} from 'react';
import '../App.css';
import './Horiz.css';

function Horiz() {
    const [age1, setAge1] = useState(0);
    const [hor, setHor] = useState(0);
    const [ver, setVer] = useState(1);
    const [age4, setAge4] = useState(1);

const handleChange1 = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setAge1(value);
};

const handleChange2 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setHor(value);
  };

const handleChange3 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setVer(value);
  };

const handleChange4 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge4(value);
  };

  const getPriceCount = () => {
    
    if( ((240 < Number(hor)) && (Number(hor) < 340)) && ((24 < Number(ver)) && (Number(ver) < 350))){
        return (293);
    }else if( ((340 < Number(hor)) && (Number(hor) < 440)) && ((240 < Number(ver)) && (Number(ver) < 350))){
        return(303);
    }else if( ((440 < Number(hor)) && (Number(hor) < 550)) && ((240 < Number(ver)) && (Number(ver) < 350))){
        return(314);
    }
    
  };

  return (
            <div className='horiz-container'>                          
                <div className='blokVnitrek'>
                    <div className="levy">
                        <h3>ISOLINE PRIM</h3>
                    <div className="pocet">
                        <span className="popis">Zadejte počet</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="1" value={age1} id="pocet"
                                   name="pocet" maxLength="4" onChange={handleChange1} 
                                    autoComplete="off"/>
                        </span>
                    </div>
                    <div className="sirka">
                        <span className="popis">Zadejte šířku</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" value={hor} id="sirka" 
                                   name="sirka" maxLength="4" onChange={handleChange2} 
                                    autoComplete="off"/>
                                <span className="jednotka">mm</span>
                        </span>
                    </div>
                    <div className="vyska">
                        <span className="popis">Zadejte výšku</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota"  value={ver} id="vyska" 
                                   name="vyska" maxLength="4" onChange={handleChange3}
                                   autoComplete="off" />
                            <span className="jednotka">mm</span>
                        </span>
                    </div>
                    <div className="cenaRozmery">
                        <span className="popis">Cena základní</span>
                        <span className="hodnota">
                            <span id="cenaRozmery"> {getPriceCount()} </span> 
                            CZK 
                        </span>
                    </div>
                    
                    <div className="stahovaniPopis">Ovládání</div>
                    
                    <div className="stahovaniHodnoty">
                        <input type="radio" name={'ovladani'} id={'vlevo'} value={'vlevo'}
                               defaultChecked ={'true'} onChange="LUKY.prepocitejCenu()"/>
                            <label htmlFor="vlevo" className="hodnota">vlevo</label>
                        <input type="radio" name={'ovladani'} id={'vpravo'} value={'vpravo'}
                               onChange=""/>
                            <label htmlFor="vpravo" className="hodnota">vpravo</label>
                        </div>
                        
                        <div className="delkaOvladani">
                            <span className="popis">Délka ovládání</span>
                            <span className="hodnota">
                                <textarea type="text" className="hodnota" defaultValue="700" value={age4} name="delkaOvladani"
                                    maxLength="4" onChange={handleChange4} />
                                <span className="jednotka">mm</span>
                            </span>
                        </div>

                        <div className="brzda">
                            <input type="checkbox" name="brzda" id="brzda" />
                                <label htmlFor="brzda" className="hodnota">
                                    <span className="nazev">
                                    Brzda (zastaví žaluzii v požadované poloze/zabrání samovolnému sjíždění)
                                        <span className="cena"><br /> +25 CZK </span>
                                    </span>
                                </label>
                        </div>
                    </div>

                    <div className='lastTwoCol'>
                    <div className="stredCol">
                        <div className="stred"> </div>
                    </div>
                    
                    <div className="infoCol">
                    <div className="info">
                        <div>
                            Maximální rozměry naleznete v sekci TECHNICKÝ POPIS <br />Dodací lhůta je 7-9 dnů. <br /> <br />
                        </div>
                        <ul className="a">
                            <li className='one'>v rozmezí od 250 do 2200 mm</li>
                            <li className='two'>v rozmezí od 250 do 2200 mm</li>
                            <li className='three'>standardně z výroby 2/3 výšky</li>
                        </ul>
                        <div>&nbsp;</div>
                        <div>
                            <a href="https://www.zaluzienejlevneji.shop/Instance/lukyshop/Sablona/Sablona/Komponenta/Luky/Detail/Slozka23/Cenik/CZ_Navod_na_vymereni_a_montaz.pdf">
                                NÁVOD NA ZAMĚŘENÍ A MONTÁŽ
                            </a>
                        </div>
                        <div>
                            <a href="https://www.zaluzienejlevneji.shop/technicky-popis-s33CZ">
                                TECHNICKÝ POPIS
                            </a>
                        </div>
                        <div>
                            <a href="https://www.zaluzienejlevneji.shop/fotogalerie-s65CZ">
                                FOTOGALERIE
                            </a>
                        </div>
                    </div>
                    </div> </div>

                </div>

            </div>
        );
}

export default Horiz;
