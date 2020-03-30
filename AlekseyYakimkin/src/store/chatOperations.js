import {initChats,addNewChat} from './chatActions'

export const fetchChats = () => async (dispatch) => {
    const res = await fetch('/api/chats.json')
    const data = await res.json()
    dispatch(initChats(data))
}

export const createChat = (name) => (dispatch, getState) => {
    const id = Date.now()
    dispatch(addNewChat(id, name))
}