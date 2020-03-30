import React from 'react';
import ChatContainer from './containers/ChatContainer/ChatContainer.jsx';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {ChatList} from "./components/ChatList/ChatList";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {initStore} from "./store/index.js";
import {Provider} from  'react-redux';
import {initChats} from "./store/chatActions";

import './styles/styles.css';

const store = initStore();
store.dispatch(initChats());

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact> It;s index page</Route>
                    <Route path="/about">it's about page</Route>
                    <Route path="/profile"exact component={Profile} />
                    <Route path="/chats/" >
                        <Header />
                        <div className="chat">
                            <ChatList />
                            <Switch>
                                <Route path="/chats" exact component={ChatContainer} />
                                <Route path="/chats/:id" exact component={ChatContainer} />
                            </Switch>
                        </div>
                        <Footer />
                    </Route>
                    <Route path="/" >it's 404 page</Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}