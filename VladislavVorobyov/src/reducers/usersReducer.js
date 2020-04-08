import {handleActions} from 'redux-actions';
import {initUsers, changeUser} from 'Actions/usersAction';


const initialStore = {};

export default handleActions({
    [initUsers]: (store, action) => ({
        1: {name: 'Vladislav'},
        2: {name: 'Bot'},
    }),
    [changeUser]: (store, action) => {
        const name = action.payload.name || store[1].name;
        return {
            ...store,
            1: {
                ...store[1],
                name: name,
            }
        }
    }
}, initialStore)