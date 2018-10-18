import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import './Nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isTogglerOpen: false,
            isContactOpen: false
        };

        this.classNames = {
            toggler: '-nav-inner-wrapper',
            contact: 'd-none'
        }

        this.keyToRestart = true;
    }

    toggleNav = () => {
        if (this.state.isTogglerOpen) {
            this.closeToggler();
        } else {
            this.openToggler();            
        }
    }

    openToggler = () => {
        this.classNames.toggler =  '-nav-inner-wrapper -nav-toggler';
        this.setState({isTogglerOpen: true});        
    }

    closeToggler = () => {
        this.classNames.toggler =  '-nav-inner-wrapper' ;      
        this.setState({isTogglerOpen: false});
    }

    openContact = () => {
        this.classNames.contact = 'd-block';
        this.keyToRestart = !this.keyToRestart;
        this.closeToggler();
    }

    render(){
        return(
            <div className='-nav-wrapper'>
                <Contact displayState = {this.classNames.contact} key = {this.keyToRestart}/>
                <div className = '-nav-brand'>
                    <img src = {process.env.PUBLIC_URL + '/img/logo.png'} alt = 'not found!'/>
                </div>

                <a href="javascript:void(0);" className = '-nav-icon' onClick={this.toggleNav}>
                    <i className = "fa fa-bars"></i>
                </a>
                <div className = {this.classNames.toggler}>
                        <Link to = {'/'} className = '-nav-link' onClick = {this.closeToggler}>HOME</Link>
                        <Link to = '/publications' className = '-nav-link' onClick = {this.closeToggler}>PUBLICATIONS</Link>
                        <Link to = '/people' className = '-nav-link' onClick = {this.closeToggler}>PEOPLE</Link>
                        <a className = '-nav-link' onClick = {this.openContact}>CONTACT</a>
                </div>
            </div>
        );
    }
}

export default Nav;