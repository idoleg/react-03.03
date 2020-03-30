import React from "react";
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
    return <header>
        <div className='header_title'>{title}</div>
        <button><Link to='/profile/'>Профиль</Link></button>
        </header>;
};

export {Header};