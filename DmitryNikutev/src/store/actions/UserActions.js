import {createActions} from 'redux-actions';

export const {setUser} = createActions({
   SET_USER: (username) => ({username}),
});
