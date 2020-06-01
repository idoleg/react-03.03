import {createActions} from 'redux-actions';

export const {setChatsLoading, setUserLoading} = createActions({
   SET_CHATS_LOADING: (state, message = "") => ({state, message}),
   SET_USER_LOADING: (state, message = "") => ({state, message}),
});
