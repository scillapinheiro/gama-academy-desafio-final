import React, { useState } from 'react';
import { SliderData } from '../components/SliderData';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import '../styles/Slider.scss';


export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className='slider'>
            <MdOutlineArrowBackIos className="left-arrow" onClick={prevSlide} />
            <MdOutlineArrowForwardIos className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (<img src={slide.image} alt='fotos dos residentes' className='image' />
                        )}

                    </div>
                )
            })}
        </section>
    );
};