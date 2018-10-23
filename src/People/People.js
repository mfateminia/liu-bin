import React from 'react';
import './People.css';
import Supervisor from './Supervisor/Supervisor';
import Researchers from './Researchers/Researchers';
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const People = () => {
    ScrollToTop();
    return (
        <div className = '-people-wrapper'>
            <Supervisor />
            <Researchers />
        </div>
    );
}

export default People;