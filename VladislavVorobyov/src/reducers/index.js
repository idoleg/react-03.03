import {combineReducers} from 'redux'
import chatReducer from "./chatListReducer";
import usersReducer from "Reducers/usersReducer";
import messagesReducer from "Reducers/messagesReducer";

export default combineReducers({
    chats: chatReducer,
    users: usersReducer,
    messages: messagesReducer,
});