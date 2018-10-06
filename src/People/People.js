import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import './People.css';
import Supervisor from './Supervisor/Supervisor';
import Researchers from './Researchers/Researchers';

const People = () => {
    return (
        <Router>
            <ScrollToTop>
                <div className = '-people-wrapper'>
                    <Supervisor />
                    <Researchers />
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default People;