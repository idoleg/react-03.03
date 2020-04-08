import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
    <ul className="Header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chats">Chats</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
    </ul>
    );
};
