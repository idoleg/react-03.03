import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css'

export const Profile = () => {
    return (<div>
        <nav>
            <Link to="/chats">Enter the messenger</Link>
            <Link to="/">Main page</Link>
            <Link to="/about">About...</Link>
        </nav>
        <h1>Profile</h1>
        <label>Name
            <input type="text" name="user" placeholder="Input your name"/>
        </label>
    </div>)
}