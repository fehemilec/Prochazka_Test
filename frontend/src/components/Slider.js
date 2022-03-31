import React, { useState } from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
/*import { useNavigate, generatePath } from 'react-router-dom';
import { Button } from './Button';*/
function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    /*const myFunction1 = () => {*/
        document.getElementsByClassName("btns2").onClick = "location.href = '/Horizontal'"; 
    

    /*const myFunction2 = () => {*/
        document.getElementsByClassName("btns1").onClick = "location.href = '/Nahradni'"; 
    

    /*document.getElementsByClassName("btns1").addEventListener('click', myFunction1(), false);
    document.getElementsByClassName("btns2").addEventListener('click', myFunction2(), false);

    const myfunc = () => {
        if (slideIndex === 1) {}
        else if (slideIndex === 2) {}
    }*/

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`} 
                        alt=""
                        />
                            <button className={"btns" + slideIndex} buttonStyle='btn--outline' buttonSize='btn--large'>Shop Now</button>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
}    


export default Slider;