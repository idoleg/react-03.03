import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ChatList} from './components/ChatList/ChatList';
import {Header} from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Grid from '@material-ui/core/Grid';


export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Header/>
                </Route>
                <Route path="/chats"> 
                    <Header/>
                    <ChatList/>
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
    )
}