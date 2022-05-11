import React from "react";
import BtnSlider from "./BtnSlider";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

test("Renders BtnSlider Next without crashing", () => {
    const div = document.createElement('div');
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    render(<BtnSlider moveSlide={nextSlide} direction={'next'}></BtnSlider>, div)
});

test("Renders BtnSlider Prev without crashing", () => {
    const div = document.createElement('div');
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    render(<BtnSlider moveSlide={prevSlide} direction={'prev'}></BtnSlider>, div)
});


