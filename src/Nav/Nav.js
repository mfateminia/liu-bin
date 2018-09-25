import React from 'react';
import './Nav.css';

const Nav = () => {

    const navItems = [
        {
            text: 'Home',
            url: './index.html'
        },
        {
            text: 'Research',
            url: './research.html'
        },
        {
            text: 'Publications',
            url: './publications.html'
        },
        {
            text: 'People',
            url: './people.html'
        },
        {
            text: 'Contact Us',
            url: './contact.html'
        }
    ];

    const assembleNav = (items) => {
        return (
            <ul className = 'nav-items'>{
                items.map((item, index) => <li className = 'nav-item'>{item.text}</li>)
                }
            </ul>);

    }

    return (
        <div className = 'nav-container'>{assembleNav(navItems)}</div>
    );
}

export default Nav;