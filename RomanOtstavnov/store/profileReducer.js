import { handleActions } from 'redux-actions';
import { init } from './profileActions';

const initialState = {};

export default handleActions({
    [init]: (store, action) => {
        const { name, city } = action.payload;
        return {name, city };
    },
}, initialState)
