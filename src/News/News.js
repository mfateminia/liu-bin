import React from 'react';
import './News.css';

const News = () => {
    return (
        <div className = '-news-outer-wrapper container'>
            <div className = '-news-border'></div>
            <div className = '-news-inner-wrapper'>
                <p className = '-news-date'>02 Mar 2016</p>
                <p className = '-news-text'>
                We look for creative candidates to join our team as Ph.D students or postdoctoral fellows. If interested, please send your CV to Prof Liu at cheliub@nus.edu.sg
                </p>           
            </div>
        </div>
    );
}

export default News;