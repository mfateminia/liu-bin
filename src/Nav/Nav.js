import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import './Nav.css';

class Nav extends React.Component {
    state ={
        classNames: {
            toggler: '-nav-inner-wrapper',
            contact: 'd-none'
        },
    };

    /*This is to toggle the navigation bar in collapsed mode
    Arg: closeOnly is added to use toggler to close the nav when moving to another page only in collapsed mode
    in this case we just want to close the toggler if it is open
    if we don't have the closeOnly option, the toggler will work when changing page in expanded version as well.
    */
    toggle = (closeOnly) => {
        if (!closeOnly && (this.state.classNames.toggler === '-nav-inner-wrapper')) {
            this.setState({classNames: {toggler: '-nav-inner-wrapper -nav-toggler', contact: 'd-none'}});
        } else {
            this.setState({classNames: {toggler: '-nav-inner-wrapper', contact: 'd-none'}});
        }
    }

    //Need this to make sure a new instance of the <Contact> is created each time updating state
    keyToRestart = true;

    openContact = () => {
        this.setState({classNames: {toggler:'-nav-inner-wrapper', contact: ''}});

        //To make sure key in <Contact> different each time this function is called
        this.keyToRestart = !this.keyToRestart;
    }

    render(){
        return(
            <div className='-nav-wrapper'>

                {/* Need key to make sure a new instance of the <Contact> is created each time updating state */}
                <Contact displayState = {this.state.classNames.contact} key = {this.keyToRestart}/>
                <div className = '-nav-brand'>
                    <img src = {process.env.PUBLIC_URL + '/img/logo.png'} alt = 'not found!'/>
                </div>

                <a href="javascript:void(0);" className = '-nav-icon' onClick={this.toggle.bind(this, false)}>
                    <i className = "fa fa-bars"></i>
                </a>
                <div className = {this.state.classNames.toggler}>
                        <Link to = {'/'} className = '-nav-link' onClick={this.toggle.bind(this, true)}>HOME</Link>
                        <Link to = '/publications' className = '-nav-link' onClick={this.toggle.bind(this, true)}>PUBLICATIONS</Link>
                        <Link to = '/people' className = '-nav-link' onClick={this.toggle.bind(this, true)}>PEOPLE</Link>
                        <a className = '-nav-link' onClick = {this.openContact}>CONTACT</a>
                </div>
            </div>
        );
    }
}

export default Nav;