import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Contact from '../Contact/Contact';
import './Nav.css';

class Nav extends React.Component {

    handleContact = () => {
        if(this.props.store.isContactVisible){
            return <Contact />
        }
        else return null;
    }

    render(){
        return(
            <div className='-nav-wrapper'>
                {this.handleContact()}
                <div className = '-nav-brand'>
                    <img src = {process.env.PUBLIC_URL + '/img/logo.png'} alt = 'not found!'/>
                </div>

                <a href="javascript:void(0);" className = '-nav-icon' onClick = {this.props.store.toggleNav}>
                    <i className = "fa fa-bars"></i>
                </a>
                {this.handleNav}
                <div className = {this.props.store.navTogglerVisible? '-nav-inner-wrapper -nav-toggler' : '-nav-inner-wrapper'}>
                        <Link to = {'/'} className = '-nav-link' onClick = {this.props.store.closeToggler}>HOME</Link>
                        <Link to = '/publications' className = '-nav-link' onClick = {this.props.store.closeToggler}>PUBLICATIONS</Link>
                        <Link to = '/people' className = '-nav-link' onClick = {this.props.store.closeToggler}>PEOPLE</Link>
                        <a className = '-nav-link' onClick = {this.props.store.showContact.bind(this, true)}>CONTACT</a>
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(Nav));