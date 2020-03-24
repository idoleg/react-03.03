import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {Header} from './components/Header/Header'
import {ChatList} from './components/ChatList/ChatList'
import {Profile} from './components/Profile/Profile'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import './App.css'

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="MessageField">
                    <ChatList />
            <Switch>
                <Route path= "/" exact> It's index page</Route>
                <Route path="/profile/" component={Profile}></Route>
                <Route path= "/chats/" exact component={ChatContainer}></Route>
                <Route path= "/chats/:id" exact component={ChatContainer}></Route>
            </Switch>
            </div>
        </div>
        </BrowserRouter>
        
    );
}