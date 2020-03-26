import React, {Component} from 'react';
import ChatContainer from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {initStore} from './store';
import {Provider} from 'react-redux';
import {initChats} from './store/chatActions';
import ChatListContainer from './containers/ChatListContainer';


const store = initStore();
store.dispatch(initChats());


export const App = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
        </Provider>
    )
}