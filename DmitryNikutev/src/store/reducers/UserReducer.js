import {handleActions} from 'redux-actions';
import {setUser} from "../actions/UserActions";


const initialState = {};

export default handleActions({
   [setUser]: (store, action) => {
      const {username} = action.payload;
      return {username: username};
   },
}, initialState)
