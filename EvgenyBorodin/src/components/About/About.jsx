import React from 'react';
import { Link } from 'react-router-dom';

import './About.css'

export const About = () => {
    return (<div>
        <nav>
            <Link to="/chats">Enter the messenger</Link>
            <Link to="/profile">Edit the profile</Link>
            <Link to="/">Main page</Link>
        </nav>
        <h1>About</h1>
    </div>)
}