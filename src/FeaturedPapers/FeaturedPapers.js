import React from 'react';
import FeaturedPapersAPI from '../API/FeaturedPapers';
import './FeaturedPapers.css';

const buildFeaturedPapers = () => {
    return FeaturedPapersAPI.map(paper => {
        return (
            <div className = 'row'>                
                <div className = '-card-body'>
                    <div className = '-card-title-wrapper'>
                        <p className = '-card-title font-weight-bold'>
                            {paper.title}
                        </p>
                        <p className = '-card-subtitle font-italic'>
                            {paper.subtitle}
                        </p>
                    </div>

                    <p className = '-card-text'>
                        {paper.text}
                    </p>

                    <div className = '-card-button btn btn-primary'>
                        Read More
                    </div>
                </div>
            </div>
        )
    })
}

const HorizCard = () => {
    return (
        <div className = '-card-wrapper container clearfix p-4 bg-secondary'>
            {buildFeaturedPapers()}
        </div>
    );
}

export default HorizCard;