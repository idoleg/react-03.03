import {createActions} from 'redux-actions';

export const {users: {initUsers, changeUser}} = createActions({
    USERS: {
        INIT_USERS: () => ({}),
        CHANGE_USER: (name) => ({name}),
    }
});