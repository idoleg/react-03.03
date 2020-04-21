import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import {PersistGate} from 'redux-persist/integration/react';
import initStore, { history } from "Utils/store";
import {initChats} from "Actions/chatActions";
import {initUsers} from "Actions/usersAction";
import {initMessages} from "Actions/messageActions";
import {Messenger} from "Components/Messenger/Messenger";
import ProfileContainer from "Containers/ProfileContainer";


const {store, persistor} = initStore();
store.dispatch(initChats());
store.dispatch(initUsers());
store.dispatch(initMessages());


export const App = (props) => {
    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor} >
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/" exact >
                            <Link to="/chats">Перейти к чатам</Link>
                        </Route>
                        <Route path="/chats" component={Messenger} />
                        <Route path="/profile/" exact component={ProfileContainer}/>
                    </Switch>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    )
};