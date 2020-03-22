import React, {useState} from "react"
import {Messenger} from "./containers/Messenger/Messenger";
import {AppToolbar} from "./components/AppToolbar/AppToolbar";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import {AUTH_PATH, CHATS, CHATS_PATH} from "./utils/Constants";
import {LoginForm} from "./components/LoginForm/LoginForm";

import "./main.css";


export const App = () => {
   const [username, setUsername] = useState("Guest");
   const [chats, setChats] = useState(new Map(CHATS));

   return (
      <BrowserRouter>
         <AppToolbar username={username}/>
         <Switch>
            <Route path="/" exact><Redirect to={CHATS_PATH}/></Route>
            <Route path={AUTH_PATH} render={(props) => <LoginForm {...props} username={username} setUsername={setUsername}/>} />
            <Route path={CHATS_PATH + "/:chatId"} render={(props) => <Messenger {...props} username={username} chats={chats} setChats={setChats}/>} />
            <Route path={CHATS_PATH} render={(props) => <Messenger {...props} chats={chats} setChats={setChats}/>} />
            <Route path="/">
               Hmm, something went wrong. Try clicking your username above or go <Link to={CHATS_PATH}>here</Link>
            </Route>
         </Switch>
      </BrowserRouter>
   );
};
