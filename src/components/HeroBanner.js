import React, { useEffect } from 'react';
import Swiper from 'swiper';
import imageOne from '../assets/images/banner1.jpg';
import imageTwo from '../assets/images/banner2.jpg';
import imageThree from '../assets/images/banner3.jpg';
import imageFour from '../assets/images/banner4.jpg';
import imageFive from '../assets/images/banner5.jpg';
import "swiper/css"

export function HeroBanner() {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={imageOne} alt="Slide 1" />
                </div>
                <div className="swiper-slide">
                    <img src={imageTwo} alt="Slide 2" />
                </div>
                <div className="swiper-slide">
                    <img src={imageThree} alt="Slide 3" />
                </div>
                <div className="swiper-slide">
                    <img src={imageFour} alt="Slide 3" />
                </div>
                <div className="swiper-slide">
                    <img src={imageFive} alt="Slide 3" />
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
};
