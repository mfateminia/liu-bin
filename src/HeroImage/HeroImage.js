import React from 'react';
import './HeroImage.css';
import heroImage from '../img/hero_image.jpg';

const HeroImage = () =>{
    return (
        <div id = '-hero-image-top' className = '-hero-image-outer-wrapper'>
            <div className = '-hero-image-inner-wrapper'>
                <div className = '-hero-image-image-wrapper bg-primary'>
                        <img className = '-hero-image-image' src = {heroImage} />
                        <div className = '-hero-image-overlay'></div>
                </div>

                <div className ="-hero-image-text-wrapper text-white text-center container-fluid">
                    <h1>Liu's Research Group</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className = '-hero-image-button'>
                        Read more
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroImage;