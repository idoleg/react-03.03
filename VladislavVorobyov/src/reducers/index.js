import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router";
import chatReducer from "./chatListReducer";
import usersReducer from "Reducers/usersReducer";
import messagesReducer from "Reducers/messagesReducer";

export default (history) => combineReducers({
    router: connectRouter(history),
    chats: chatReducer,
    users: usersReducer,
    messages: messagesReducer,
});