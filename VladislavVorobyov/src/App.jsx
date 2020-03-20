import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {MessengerContainer} from 'Containers/MessangerContainer';
export const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MessengerContainer}/>
                <Route path="/chats/" exact component={MessengerContainer}/>
                <Route path="/chats/:id/" exact component={MessengerContainer}/>
                <Route path="/profile/" exact component={MessengerContainer}/>
            </Switch>
        </BrowserRouter>
    )

};