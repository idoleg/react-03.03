import React from "react";
import './Header.css';
import{Link} from 'react-router-dom'


export const Header = () => {
    return (<header>
        <ul><Link to="/profile/"><h1>Messenger</h1></Link></ul> 
        
    </header>)
}