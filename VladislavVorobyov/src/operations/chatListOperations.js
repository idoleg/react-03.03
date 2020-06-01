import {loadingChats, initChats, failedLoadedChats} from "Actions/chatActions";
import {sleep} from "Utils/sleep";


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