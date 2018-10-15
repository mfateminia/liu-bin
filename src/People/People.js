import React from 'react';
import './People.css';
import Supervisor from './Supervisor/Supervisor';
import Researchers from './Researchers/Researchers';

const People = () => {
    return (
        <div className = '-people-wrapper'>
            <Supervisor />
            <Researchers />
        </div>
    );
}

export default People;