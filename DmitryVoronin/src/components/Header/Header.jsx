import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Sidebar from '@material-ui/core/Sidebar ';

import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/profile">Profile Link</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/profile">Profile Link</Link></li>
            </ul>
        </div>
    )
}