import {loadingChats, initChats, failedLoadedChats} from "Actions/chatActions";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const fetchChats = () => async (dispatch, getState) => {
    dispatch(loadingChats());
    await sleep(2000);
    try {
        const response = await fetch('/api/chats.json');
        if (!response.ok){
            dispatch(failedLoadedChats(`Chats list can't load from server. Error status: ${response.status}`));
            return ;
        }
        const data = await response.json();
        dispatch(initChats(data));
    } catch (e) {
        dispatch(failedLoadedChats(`Chats list can't load from server. Error message: ${e.message}`))
    }
};