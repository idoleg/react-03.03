import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


export const Header = () => {
    return (<header className="header">
                <h1>Messenger</h1>
                <Link className="header--link" to={"/profile"}>Profile</Link>
                <Link className="header--link" to={"/chats"}>Chats</Link>
            </header>
    )
}
