import React, {useState} from "react"
import {Provider as ReduxProvider} from "react-redux";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import Messenger from "./containers/MessengerContainer";
import AppToolbar from "./containers/ToolbarContainer";
import LoginForm from "./containers/LoginFormContainer";
import {initStore} from "./store/Store";
import {initChats} from "./store/actions/ChatActions";
import {initUser} from "./store/actions/UserActions";
import {AUTH_PATH, CHATS, CHATS_PATH} from "./utils/Constants";

import "./main.css";


const store = initStore();
store.dispatch(initChats());
store.dispatch(initUser());

export const App = () => {
   return (
      <ReduxProvider store={store}>
         <BrowserRouter>
            <AppToolbar/>
            <Switch>
               <Route path="/" exact><Redirect to={CHATS_PATH}/></Route>
               <Route path={AUTH_PATH} component={LoginForm}/>
               <Route path={CHATS_PATH + "/:chatId"} component={Messenger}/>
               <Route path={CHATS_PATH} component={Messenger}/>
               <Route path="/">
                  Hmm, something went wrong. Try clicking your username above or go <Link to={CHATS_PATH}>here</Link>
               </Route>
            </Switch>
         </BrowserRouter>
      </ReduxProvider>
   );
};
