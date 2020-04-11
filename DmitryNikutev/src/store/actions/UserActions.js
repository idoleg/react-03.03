import {createActions} from 'redux-actions';

export const {initUser, setUser} = createActions({
   INIT_USER: () => ({}),
   SET_USER: (username) => ({username}),
});
