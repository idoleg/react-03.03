import {handleActions} from 'redux-actions';
import {initUser, setUser} from "../actions/UserActions";
import {DEFAULT_USERNAME} from "../../utils/Constants";


const initialState = {};

export default handleActions({
   [initUser]: (store, action) => {
      return {username: DEFAULT_USERNAME};
   },
   [setUser]: (store, action) => {
      const {username} = action.payload;
      return {username: username};
   },
}, initialState)
