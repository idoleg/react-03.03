import React, { Component } from 'react';
import {ChatContainer} from './container/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ChatList} from './components/ChatList/ChatList';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>It's index page</Route>
                <Route path="/chats">
                    <Header/>
                    <ChatList />
                    <Switch>
                        <Route path="chats/profile" exact component={Profile} />
                        <Route path="/chats" exact component={ChatContainer} />
                        <Route path="/chats/:id" exact component={ChatContainer} />
                    </Switch>
                </Route>
                <Route path="/about">It's about page</Route>
                <Route path="/contacts">It's contacts page</Route>
                <Route path="/">It's 404 page. Not found.</Route>
            </Switch>
        </BrowserRouter>
    )
}
