import {BotMiddleware} from "./BotMiddleware";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import {ChatListMiddleware} from "./ChatListMiddleware";
import thunk from "redux-thunk";


export const history = createBrowserHistory();

export default [
   BotMiddleware,
   ChatListMiddleware,
   routerMiddleware(history),
   thunk
];
