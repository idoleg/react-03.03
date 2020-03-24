import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer'
import {ChatListContainer} from './containers/ChatListContainer'
import {Header} from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router'
import './css/style.css'

{/* <Header/>
                <ChatListContainer />
                <ChatContainer />  */}
export const App = () => {
    return ( 
        <div className="AppContainer">
            <BrowserRouter>
                
                {/* <ChatListContainer /> */}
                {/* <ChatContainer module="ChatList" /> */}
                <Router/>
            </BrowserRouter>
        </div>
    )
}