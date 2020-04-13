import React from "react"
import {Provider as ReduxProvider} from "react-redux";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Messenger from "./containers/MessengerContainer";
import AppToolbar from "./containers/ToolbarContainer";
import LoginForm from "./containers/LoginFormContainer";
import {initStore} from "./store/Store";
import {initUser} from "./store/operations/UserOperations";
import {initChats} from "./store/operations/ChatOperations";
import {AUTH_PATH, CHATS_PATH} from "./utils/Constants";
import {ConnectedRouter} from "connected-react-router"
import {history} from "./store/middlewares/Middlewares";

import "./main.css";


const store = initStore();
store.dispatch(initChats());
store.dispatch(initUser());

export const App = () => {
   return (
      <ReduxProvider store={store}>
         <ConnectedRouter history={history}>
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
         </ConnectedRouter>
      </ReduxProvider>
   );
};
