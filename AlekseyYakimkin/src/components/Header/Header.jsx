import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export const Header = ({headerName}) => {
    console.log("chatName " + headerName)
    return  <div className="Header">
                <h1>{headerName}</h1>
                <Link to="/profile" >Профиль</Link>
            </div>
}