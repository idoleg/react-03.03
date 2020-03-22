import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer'
import {ChatListContainer} from './containers/ChatListContainer'
import {Header} from './components/Header/Header'
import './css/style.css'

export const App = () => {
    return ( <div className="AppContainer">
        <Header/>
        <ChatListContainer />
        <ChatContainer /> 
        </div>
    )
}