import {loadingMessages, initMessages, failedLoadedMessages} from "Actions/messageActions";
import {sleep} from "Utils/sleep";
import {createAction} from "redux-api-middleware";

export const fetchMessages = () => createAction({
    endpoint: '/api/messages.json',
    method: 'GET',
    types: [
        loadingMessages.toString(),
        initMessages.toString(),
        failedLoadedMessages.toString()
    ],
});
