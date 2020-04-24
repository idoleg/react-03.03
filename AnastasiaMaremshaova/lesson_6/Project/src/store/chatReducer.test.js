import chatReducer from './chatReducer';
import { loadingChats, sendMessage, addChat, deleteChat } from './chatActions';

describe('chatReducer', () => {

    it('addChat', () => {
        const store = { chats: { 1: { messages: [] } } };
        const action = addChat(2, 'Chat', 123456);
        const testChat = {name: 'Chat', botId: 123456, messages:[], fire: false,  fill: false };

        expect(chatReducer(store, action))
            .toMatchObject( { chats: { 1: { messages: [] },  2: testChat } });
    });

    it('deleteChat', () => {

        const action = deleteChat(1);
        const testChat = {name: 'Chat', botId: 123456, messages:[], fire: false,  fill: false };
        const store = { chats: { 1: { messages: [] }, 2: testChat } };
        expect(chatReducer(store, action))
            .toMatchObject( { chats: {  2: testChat } });
    });

    it('loadingChats', () => {
        const store = { isLoading: false };
        const action = loadingChats();

        expect(chatReducer(store, action))
            .toMatchObject({ isLoading: true });
    });

    it('sendMessage', () => {
        const name = 'Ivan';
        const content = "Hello!";
        const store = { chats: { 1: { messages: [] } } };
        const action = sendMessage(1, name, content);

        expect(chatReducer(store, action))
            .toMatchObject({ chats: { 1: { messages: [{ name, content }] } } })
    })

    it('sendMessage add message to end of array', () => {
        const testMessage = {name: 'Petr', content: "Test"};
        const name = 'Ivan';
        const content = "Hello!";
        const store = { chats: { 1: { messages: [testMessage] } } };
        const action = sendMessage(1, name, content);

        expect(chatReducer(store, action))
            .toMatchObject({ chats: { 1: { messages: [testMessage, { name, content }] } } })
    })
})