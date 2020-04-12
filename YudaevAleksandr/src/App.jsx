import React, {Component} from 'react';
import ChatContainer from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {initStore, history} from './store';
import {Provider} from 'react-redux';
import {initChats} from "./store/chatActions";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Header} from "./components/Header/Header";
import {ChatList} from "./components/ChatList/ChatList";
import ChatListContainer from "./containers/ChatListContainer";
import {ConnectedRouter} from "connected-react-router";

const store = initStore();
store.dispatch(initChats());

export const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <CssBaseline/>
                <Header/>
                <ChatListContainer/>
                <Switch>
                    <Route path="/" exact component={ChatContainer} />
                    <Route path="/chats" exact component={ChatContainer} />
                    <Route path="/chats/:id" exact component={ChatContainer} />
                    <Route path="/">404</Route>
                </Switch>
                {/*<ChatContainer />*/}
            </ConnectedRouter>
        </Provider>
        )
};
