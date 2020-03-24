import React, {useState} from "react"
import Messenger from "./containers/MessengerContainer.js";
import {AppToolbar} from "./components/AppToolbar/AppToolbar";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import {AUTH_PATH, CHATS, CHATS_PATH} from "./utils/Constants";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {Provider as ReduxProvider} from "react-redux";
import {initStore} from "./store/Store";
import {initChats} from "./store/ChatActions";

import "./main.css";


const store = initStore();
store.dispatch(initChats());

export const App = () => {
   const [username, setUsername] = useState("Guest");

   return (
      <ReduxProvider store={store}>
         <BrowserRouter>
            <AppToolbar username={username}/>
            <Switch>
               <Route path="/" exact><Redirect to={CHATS_PATH}/></Route>
               <Route path={AUTH_PATH}
                      render={(props) => <LoginForm {...props} username={username} setUsername={setUsername}/>}/>
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
