import React from "react"
import {Header} from '../Header/Header'
import {ChatContainer} from '../containers/ChatContainer'
import {ChatList} from '../ChatList/ChatList'
import './Layout.css'

export const Layout = () => {
	return (
        <div>
        	<Header />
        	<div className="chat-field">
        		<ChatList />
        		<div className="chat-container"><ChatContainer /></div>
        	</div>
        </div>
    )
}

