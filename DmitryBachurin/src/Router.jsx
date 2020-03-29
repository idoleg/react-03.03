import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '~/contaners/Layout/Layout';
import { Profile } from '~/contaners/Profile/Profile';
import { Provider } from 'react-redux';
import { initStore } from '~/store';
import {initChats} from '~/store/actions/chatActions'


const store = initStore();
store.dispatch(initChats());

export const Router = () => {
    return (
        <Provider store={store}​ >
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>It's index page</Route>
                    <Route path="/chats">
                        <Switch>
                            <Route path="/chats" exact component={Layout} />
                            <Route path="/chats/:id" exact component={Layout} />
                        </Switch>
                    </Route>
                    <Route path='/profile/' exact component={Profile}></Route>
                    {/* <Route path="/about">It's about page</Route>
                <Route path="/contacts">It's contacts page</Route> */}
                    <Route path="/">It's 404 page. Not found.</Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )

}