import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '~/contaners/Layout/Layout';
import {Profile} from '~/contaners/Profile/Profile';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>It's index page</Route>
                <Route path="/chats">
                    <Switch>
                        <Route path="/chats" exact component={Layout}/>
                        <Route path="/chats/:id" exact component={Layout} />
                    </Switch>
                </Route>
                <Route path='/profile/' exact component={Profile}></Route>
                {/* <Route path="/about">It's about page</Route>
                <Route path="/contacts">It's contacts page</Route> */}
                <Route path="/">It's 404 page. Not found.</Route>
            </Switch>
        </BrowserRouter>
    )

}