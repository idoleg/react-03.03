import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {Header} from './components/Header/Header'
import {ChatListContainer} from './containers/ChatListContainer'
import {Profile} from './components/Profile/Profile'
import {IndexPage} from './components/IndexPage/IndexPage'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import './App.css'

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="MessageField">
                <ChatListContainer/>

            
            <Switch>
                <Route path= "/" exact component={IndexPage}></Route>
                <Route path="/profile/" exact component={Profile}></Route>
                <Route path= "/chats/" exact component={ChatListContainer}></Route>
                <Route path= "/chats/:id" exact component={ChatListContainer}></Route>
            </Switch>
            </div> 
        </div>
        </BrowserRouter>
        
    );
}