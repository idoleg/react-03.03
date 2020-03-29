import React from 'react';

import { NavBar } from '../NavBar/NavBar.jsx'

import './Main.css';

export const Main = () => {
    return (<div>
        <NavBar selectedPath="Main" />
        <h1>Main Page</h1>
    </div>)
}