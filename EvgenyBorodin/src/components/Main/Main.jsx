import React from 'react';
import {Link} from 'react-router-dom';

import './Main.css';

export const Main = () => {
    return (<div>
        <nav>
            <Link to="/chats">Enter the messenger</Link>
            <Link to="/profile">Edit the profile</Link>
            <Link to="/about">About...</Link>
        </nav>
        <h1>Main Page</h1>
    </div>)
}