import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Layout} from '~/contaners/Layout'


export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>It's index page</Route>
                {/* <Route path="/chats">
                    
                    <Switch>
                        <Route path="/chats" exact component={ChatContainer} />
                        <Route path="/chats/:id" exact component={ChatContainer} />
                    </Switch>
                </Route>
                <Route path="/about">It's about page</Route>
                <Route path="/contacts">It's contacts page</Route>
                <Route path="/">It's 404 page. Not found.</Route> */}
            </Switch>
        </BrowserRouter>
    )

}