import { createActions } from 'redux-actions';

export const { initChats, sendMessage, addChat } = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name, content) => ({ id, name, content }),
    ADD_CHAT: (id, name) => ({ id, name }),
})

// export const sendMessage = (name, text) => ({
//     type: "SEND_MSG",
//     payload: ({ name, text })
// })

// export const {initChats, sendMessage} = createActions({
//     INIT_CHATS: () => ({}),
//     SEND_MESSAGE: (id, name, content) => ({id, name, content}),
// })