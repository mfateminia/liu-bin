import React from 'react';
import './HorizCard.css';

//props has imgUrl, title, subtitle, text, btnLabel
const HorizCard = (props) => {
    return (
        <div className = 'card-wrapper clearfix p-4 bg-secondary'>
            <img className = 'img-fluid' width = '300' src = {props.imgUrl} alt = 'Image not found!'/>
            <div className = 'card-body'>
                <div className = 'card-title'>
                    <h3 className = 'title'>
                        {props.title}
                    </h3>
                    <h4 className = 'subtitle'>
                        {props.subtitle}
                    </h4>
                </div>

                <p className = 'card-text'>
                    {props.text}
                </p>

                <div className = 'card-button'>
                    {props.btnLabel}
                </div>
            </div>
        </div>
    );
}

export default HorizCard;