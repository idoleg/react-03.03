import chatMiddleware from './chatMiddleware'
import { loadingChats, sendMessage, fire } from './chatActions';

describe('chatMiddleware', () => {

    it('if user send message in current chat', () => {
        const id = 1;
        const name = "Ivan";
        const content = "Hello!";

        const store = { 
            dispatch: jest.fn(),
            getState: () => ({router: {location: {pathname: '/chats/'+id}}}),
        }
        const next = jest.fn();
        const action = sendMessage(id, name, content);

        chatMiddleware(store)(next)(action)

        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });

    it('if user send message in other chat', () => {
        const id = 1;
        const name = "Ivan";
        const content = "Hello!";

        const store = { 
            dispatch: jest.fn(),
            getState: () => ({router: {location: {pathname: '/chats/2'}}}),
        }
        const next = jest.fn();
        const action = sendMessage(id, name, content);
        const expactedAction = fire(id);

        chatMiddleware(store)(next)(action)

        expect(store.dispatch).toHaveBeenCalledWith(expactedAction)
    });
});