import React, {Component} from 'react';
import ChatContainer from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {initStore, history} from './store'
import {Provider} from 'react-redux';
import {fetchChats} from './store/chatOperation';
import ChatListContainer from './containers/ChatListContainer';
import {ConnectedRouter} from 'connected-react-router';


const store = initStore();
store.dispatch(fetchChats());


export const App = () => {
    return (
        <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact>
                    <Header/>
                </Route>
                <Route path="/chats"> 
                    <Header/>
                    <ChatListContainer/>
                    <Switch>
                        <Route path="/chats" exact component={ChatContainer} />
                        <Route path="/chats/:id" exact component={ChatContainer} />
                    </Switch>
                </Route>
                <Route path="/about">It's about page</Route>
                <Route path="/profile"><Header/> <Profile/></Route>
                <Route path="/contacts">It's contacts page</Route>
                <Route path="/">It's 404 page. Not found.</Route>
            </Switch>
        </ConnectedRouter>
        </Provider>
    )
}