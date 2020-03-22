import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ChatContainer} />
                <Route path="/chats" exact component={ChatContainer} />
                <Route path="/chats/:id" exact component={ChatContainer} />
                <Route path="/">404</Route>
            </Switch>
            {/*<ChatContainer />*/}
        </BrowserRouter>
        )
};
