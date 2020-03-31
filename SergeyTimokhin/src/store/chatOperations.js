import { loadingChats, failedLoading, initChats, addChat } from './chatActions';

export const fetchChats = () => async(dispatch) => {
    dispatch(loadingChats());
    try {
        const res = await fetch('api/test.json');
        if (res.status !== 200) {
            throw new Error("Error " + res.status + ". Page not found")
        }
        const data = await res.json();
        dispatch(initChats(data));
    } catch (e) {
        dispatch(failedLoading(e.message));
    }
}


export const createChat = (name) => (dispatch, getState) => {
    const id = Date.now();
    dispatch(addChat(id, name))
}