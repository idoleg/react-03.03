import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import {PersistGate} from 'redux-persist/integration/react';
import initStore, { history } from "Utils/store";
import {fetchChats} from "Operations/chatListOperations";
import {fetchMessages} from "Operations/messagesOperations";
import {initChats} from "Actions/chatActions";
import {initUsers} from "Actions/usersAction";
import {initMessages} from "Actions/messageActions";
import {Messenger} from "Components/Messenger/Messenger";
import ProfileContainer from "Containers/ProfileContainer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {InstallPopup} from "Components/InstallPopups";

// const {store, persistor} = initStore();
const store = initStore();
store.dispatch(fetchChats());
store.dispatch(fetchMessages());
store.dispatch(initUsers());


export const App = (props) => {
    return (
        <MuiThemeProvider>
            <Provider store={store} >
                {/*<PersistGate loading={null} persistor={persistor} >*/}
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route path="/" exact >
                                <Link to="/chats">Перейти к чатам</Link>
                            </Route>
                            <Route path="/chats" component={Messenger} />
                            <Route path="/profile/" exact component={ProfileContainer}/>
                        </Switch>
                    </ConnectedRouter>
                {/*</PersistGate>*/}
            </Provider>
            <InstallPopup/>
        </MuiThemeProvider>
    )
};