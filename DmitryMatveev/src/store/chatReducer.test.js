import chatReducer from './chatReducer';
import { loadingChats, sendMessage } from './chatActions';

describe('chatReducer', () => {

    it('loadingChats', () => {
        const store = { isLoading: false };
        const action = loadingChats();

        expect(chatReducer(store, action))
            .toMatchObject({ isLoading: true });
    });

    it('sendMessage', () => {
        const name = 'Ivan';
        const text = "Hello!";
        const store = { chats: { 1: { messages: [] } } };
        const action = sendMessage(1, name, text);

        expect(chatReducer(store, action))
            .toMatchObject({ chats: { 1: { messages: [{ name, text }] } } })
    })

    it('sendMessage add message to end of array', () => {
        const testMessage = {name: 'Petr', text: "Test"};
        const name = 'Ivan';
        const text = "Hello!";
        const store = { chats: { 1: { messages: [testMessage] } } };
        const action = sendMessage(1, name, text);

        expect(chatReducer(store, action))
            .toMatchObject({ chats: { 1: { messages: [testMessage, { name, text }] } } })
    })
}) 