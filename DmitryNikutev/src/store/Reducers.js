import {combineReducers} from "redux";
import ChatReducer from "./reducers/ChatReducer";
import UserReducer from "./reducers/UserReducer";

export const initReducers = combineReducers({
   chats: ChatReducer,
   user: UserReducer
});
