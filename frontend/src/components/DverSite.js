import {React} from 'react';
import './DverSite.css';

export default function DverSite() {
  return (
     <div className='dverni_container'>
        <div className='dverni_headlines'> 
            <h1> 
                <span> ZÁKAZ VSTUPU OTRAVNÉMU HMYZU </span>
            </h1>
        </div>
        <div className='dverni_text_and_image__container'>
            <div className='dverni_image_container'>
                <img src='/images/dverny_inner.jpg' alt="" />
            </div>
            <div className='dverni_text_container'> 
                <span className='dverni_text'>
                Pevné dveřní sítě jsou nezbytným a praktickým doplňkem moderního bydlení. Díky široké škále síťových profilů není problém osadit síť na jakékoliv okno nebo dveře. Jednoduchá konstrukce a síťovina ze skelného vlákna zaručují velmi dlouhou životnost.
                <br></br>
                <br></br>
                Rám dveřní sítě je vyroben z válcovaných nebo extrudovaných hliníkových profilů, síťovina je zajištěna v profilu gumou. Celá síť se montuje na dveřní rám pomocí pantů.
                </span>
            </div>
        </div>
    </div>
  )
}