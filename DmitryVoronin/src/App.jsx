import React, {Component} from 'react';
import ChatContainer from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {initStore, history} from './store'
import {Provider} from 'react-redux'
import {initChats, sendMessage} from './store/chatActions'
import ChatListContainer from './containers/ChatListContainer';
import {ConnectedRouter} from 'connected-react-router';

const store = initStore();
store.dispatch(initChats());

export const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact>It's index page</Route>
                    <Route path="/chats"> 
                        <ChatListContainer/>
                        <Switch>
                            <Route path="/chats" exact component={ChatContainer} />
                            <Route path="/chats/:id" exact component={ChatContainer} />
                        </Switch>
                    </Route>
                    <Route path="/about">It's about page</Route>
                    <Route path="/contacts">It's contacts page</Route>
                    <Route path="/">It's 404 page. Not found.</Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}