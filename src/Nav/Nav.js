import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../img/logo.png';

class Nav extends React.Component {
    state ={
        classNames: '-nav-inner-wrapper',
    };

    scroll = () => {
        console.log('fired');
    }

    toggle = () => {
        if (this.state.classNames === '-nav-inner-wrapper') {
            this.setState({classNames: '-nav-inner-wrapper -nav-toggler'});
        } else {
            this.setState({classNames: '-nav-inner-wrapper'});
        }
    }

    render(){
        return(
            <div className='-nav-wrapper' onScroll = {this.scroll}>
            <div className = '-nav-brand'>
                <img src = {logo}/>
            </div>

            <a href="javascript:void(0);" className = '-nav-icon' onClick={this.toggle}>
                <i className = "fa fa-bars"></i>
            </a>
            <div className = {this.state.classNames}>
                    <Link to = {'/'} className = '-nav-link'>HOME</Link>
                    <Link to = '/publications' className = '-nav-link'>PUBLICATIONS</Link>
                    <Link to = '/people' className = '-nav-link'>PEOPLE</Link>
                    <Link to = '/contact' className = '-nav-link'>CONTACT</Link>
            </div>

        </div>
        );
    }




}

export default Nav;