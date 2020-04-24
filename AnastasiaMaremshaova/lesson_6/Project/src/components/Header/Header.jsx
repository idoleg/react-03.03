import React from "react";
import './Header.css';
import {Link} from 'react-router-dom'
import {SvgIcon} from './SvgIcon'
import PushToggle from '../PushToggle/index.jsx'
export const Header = () => {
    return (
        <header>

            <PushToggle/>
            <div className="icon">
                <ul>
                    <Link to="/">
                        <SvgIcon/>
                        <h1 className="h1-header">CatsMessenger</h1>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
