import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

export const NavBar = ({selectedPath}) => {
    return (<nav>
        { selectedPath === 'Main' ? <span className="selectedPath">Main</span> : <Link to="/">Main</Link> }
        { selectedPath === 'Chats' ? <span className="selectedPath">Messenger</span> : <Link to="/chats">Messenger</Link> }
        { selectedPath === 'Profile' ? <span className="selectedPath">Profile</span> : <Link to="/profile">Profile</Link> }
        { selectedPath === 'About' ? <span className="selectedPath">About...</span> : <Link to="/about">About...</Link> }
    </nav>)
}
