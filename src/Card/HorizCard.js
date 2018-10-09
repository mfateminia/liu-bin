import React from 'react';
import './HorizCard.css';

//props has imgUrl, title, subtitle, text, btnLabel
const HorizCard = (props) => {
    return (
        <div className = '-card-wrapper container clearfix p-4 bg-secondary'>
            <div className = 'row'>
                <div className = 'col-md-4'>
                    <img className = 'img-fluid' src = {props.imgUrl} alt = 'not found!'/>
                </div>
                
                <div className = '-card-body col-md-8'>
                    <div className = '-card-title-wrapper'>
                        <p className = '-card-title font-weight-bold'>
                            {props.title}
                        </p>
                        <p className = '-card-subtitle font-italic'>
                            {props.subtitle}
                        </p>
                    </div>

                    <p className = '-card-text'>
                        {props.text}
                    </p>

                    <div className = '-card-button btn btn-primary'>
                        {props.btnLabel}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorizCard;