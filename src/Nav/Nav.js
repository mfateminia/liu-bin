import React from 'react';
import './Nav.css';
import logo from '../img/logo.png';

class Nav extends React.Component {
    state ={
        classNames: '-nav-inner-wrapper'
    };

    toggle = () => {
        if (this.state.classNames === '-nav-inner-wrapper') {
            this.setState({classNames: '-nav-inner-wrapper -nav-toggler'});
        } else {
            this.setState({classNames: '-nav-inner-wrapper'});
        }
    }

    render(){
        return(
            <div className='-nav-wrapper'>
            <div className = '-nav-brand'>
                <img src = {logo}/>
            </div>

            <a href="javascript:void(0);" className = '-nav-icon' onClick={this.toggle}>
                <i className = "fa fa-bars"></i>
            </a>
            <div className = {this.state.classNames}>

                    <a href="#home" className = '-nav-link'>HOME</a>
                    <a href="#news" className = '-nav-link'>PUBLICATIONS</a>
                    <a href="#contact" className = '-nav-link'>PEOPLE</a>
                    <a href="#about" className = '-nav-link'>CONTACT</a>

            </div>

        </div>
        );
    }




}

export default Nav;