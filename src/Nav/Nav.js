import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import './Nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navTogglerVisible: false,
            isContactVisible: false
        };
    }

    toggleNav = () => this.setState({navTogglerVisible: !this.state.navTogglerVisible});

    handleContact = () => {
        if(this.state.isContactVisible){
            return <Contact contactVisibility = {this.toggleContact.bind(this)}/>
        }
        else return null;
    }

    toggleContact = (contactVisibilityNewStatus) => {
        this.setState({isContactVisible: contactVisibilityNewStatus});
    }

    render(){
        return(
            <div className='-nav-wrapper'>
                {this.handleContact()}
                <div className = '-nav-brand'>
                    <img src = {process.env.PUBLIC_URL + '/img/logo.png'} alt = 'not found!'/>
                </div>

                <a href="javascript:void(0);" className = '-nav-icon' onClick = {this.toggleNav}>
                    <i className = "fa fa-bars"></i>
                </a>
                {this.handleNav}
                <div className = {this.state.navTogglerVisible? '-nav-inner-wrapper -nav-toggler' : '-nav-inner-wrapper'}>
                        <Link to = {'/'} className = '-nav-link' onClick = {this.closeToggler}>HOME</Link>
                        <Link to = '/publications' className = '-nav-link' onClick = {this.closeToggler}>PUBLICATIONS</Link>
                        <Link to = '/people' className = '-nav-link' onClick = {this.closeToggler}>PEOPLE</Link>
                        <a className = '-nav-link' onClick = {this.toggleContact}>CONTACT</a>
                </div>
            </div>
        );
    }
}

export default Nav;