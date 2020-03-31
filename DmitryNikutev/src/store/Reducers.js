import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import ChatReducer from "./reducers/ChatReducer";
import UserReducer from "./reducers/UserReducer";
import {history} from "./middlewares/Middlewares";

export const initReducers = combineReducers({
   chats: ChatReducer,
   user: UserReducer,
   router: connectRouter(history),
});
