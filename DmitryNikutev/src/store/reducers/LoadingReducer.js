import {handleActions} from 'redux-actions';
import {FETCHING} from "../../utils/Constants";
import {setChatsLoading, setUserLoading} from "../actions/LoadingActions";


const initialState = {
   chats: {
      state: FETCHING,
      message: ""
   },
   user: {
      state: FETCHING,
      message: ""
   }
};

export default handleActions({
   [setChatsLoading]: (store, action) => {
      const {state, message} = action.payload;
      return {
         ...store,
         chats: {state, message}
      };
   },
   [setUserLoading]: (store, action) => {
      const {state, message} = action.payload;
      return {
         ...store,
         user: {state, message}
      };
   },
}, initialState)
