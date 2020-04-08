import React from "react"
import {Link} from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
		<header>
       		<nav>
           		<div className="nav-item"><Link to="/profile/">Profile</Link></div>
            	<div className="nav-item"><Link to="/chats/">Chats</Link></div>
       		</nav>

        	<h1>Messenger</h1>
    	</header>
	)
}

