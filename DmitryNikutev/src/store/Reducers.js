import {combineReducers} from "redux";
import ChatReducer from "./ChatReducer";

export const initReducers = combineReducers({
   chats: ChatReducer
});
