import React from "react";
import './Header.css';
import {Link} from 'react-router-dom'
import {SvgIcon} from './SvgIcon'

export const Header = () => {
    return (
        <header>

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
