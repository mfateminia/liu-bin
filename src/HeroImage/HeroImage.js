import React from 'react';
import './HeroImage.css';
import heroImage from '../img/hero_image.jpg';

const HeroImage = () =>{
    return (
        <div id = '-hero-image-top' className = '-hero-image-outer-wrapper'>
            <div className = '-hero-image-inner-wrapper'>
                <div className = '-hero-image-image-wrapper'>
                        <img className = '-hero-image-image' src = {heroImage} />
                        <div className = '-hero-image-overlay'></div>
                </div>

                <div className ="-hero-image-text-wrapper container-fluid">
                    <h1 id = '-hero-image-heading'>Liu's Research Group</h1>
                    <p id = '-hero-image-parag'>where Chemistry, Materials, and Biology meet to create unique nanoprobes for theranostic applications</p>
                    <div className = '-hero-image-button'>
                        Be a part of our network
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroImage;