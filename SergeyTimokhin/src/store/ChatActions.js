import { createActions } from 'redux-actions';

export const { initChats, sendMessage } = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name, content) => ({ id, name, content }),
})

// export const sendMessage = (name, text) => ({
//     type: "SEND_MSG",
//     payload: ({ name, text })
// })

// export const {initChats, sendMessage} = createActions({
//     INIT_CHATS: () => ({}),
//     SEND_MESSAGE: (id, name, content) => ({id, name, content}),
// })