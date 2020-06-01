import {handleActions} from 'redux-actions';
import {initUsers, changeUser} from 'Actions/usersAction';

const USER_ID = 1;
const initialStore = [];

export default handleActions({
    [initUsers]: (store, action) => ([
        {id: 1, name: 'Vladislav'},
        {id: 2, name: 'Bot'},
    ]),
    [changeUser]: (store, action) => {
        const name = action.payload.name || store[1].name;
        const currentUser = store.find(user => user.id===USER_ID);
        return [
            ...store.filter(user => user.id !==USER_ID),
            {
                ...currentUser,
                name: name,
            },
        ]
    }
}, initialStore)