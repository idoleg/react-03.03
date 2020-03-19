import React, { Component } from 'react';
import { ChatContainer } from './containers/ChatContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChatList } from './components/ChatList/ChatList'

// StaticRouter
// MemoryRouter
// HashRouter www.test.com/#about
// BrowserRouter www.test.com/index

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>It's index page</Route>
                <Route path="/chats">
                    <ChatList />
                    <Switch>
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