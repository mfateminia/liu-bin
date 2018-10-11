import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
    state ={
        classNames: '-nav-inner-wrapper',
    };

    scroll = () => {
        console.log('fired');
    }

    /*This is to toggle the navigation bar in collapsed mode
    Arg: closeOnly is added to use toggler to close the nav when moving to another page only in collapsed mode
    in this case we just want to close the toggler if it is open
    if we don't have the closeOnly option, the toggler will work when changing page in expanded version as well.
    */
    toggle = (closeOnly) => {
        if (!closeOnly && (this.state.classNames === '-nav-inner-wrapper')) {
            this.setState({classNames: '-nav-inner-wrapper -nav-toggler'});
        } else {
            this.setState({classNames: '-nav-inner-wrapper'});
        }
    }

    render(){
        return(
            <div className='-nav-wrapper' onScroll = {this.scroll}>
            <div className = '-nav-brand'>
                <img src = {process.env.PUBLIC_URL + '/img/logo.png'} alt = 'not found!'/>
            </div>

            <a href="javascript:void(0);" className = '-nav-icon' onClick={this.toggle.bind(this, false)}>
                <i className = "fa fa-bars"></i>
            </a>
            <div className = {this.state.classNames}>
                    <Link to = {'/'} className = '-nav-link' onClick={this.toggle.bind(this, true)}>HOME</Link>
                    <Link to = '/publications' className = '-nav-link' onClick={this.toggle.bind(this, true)}>PUBLICATIONS</Link>
                    <Link to = '/people' className = '-nav-link' onClick={this.toggle.bind(this, true)}>PEOPLE</Link>
                    <Link to = '/contact' className = '-nav-link' onClick={this.toggle.bind(this, true)}>CONTACT</Link>
            </div>

        </div>
        );
    }




}

export default Nav;