import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {Header} from './components/Header/Header'
import {ChatList} from './components/ChatList/ChatList'

import './App.css'

export const App = () => {
    return (
        <div>
        <Header />
        <div className="MessageField">
        <ChatList />
        <ChatContainer />
        </div>
        </div>
    )
}