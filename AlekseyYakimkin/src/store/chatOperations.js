import {addNewChat} from './chatActions'

export const createChat = (name) => (dispatch, getState) => {
    const id = Date.now()
    dispatch(addNewChat(id, name))
}