import {handleActions} from 'redux-actions';
import {initChats, sendMessage} from './chatActions';

const initialState = {
};

export default handleActions({
    [initChats]: (store, action) => {
        console.log('initChats action',action);
        return {
            1: {
                name: "RobotAlex",
                messages: [
                    {name: "RobotAlex", content: "Hello!", isRobot: true},
                    {name: "Me", content: "Hi, how are you?", isRobot: false},
                    {name: "RobotAlex", content: "I am well! And you?", isRobot: true},
                    {name: "Me", content: "Me too", isRobot: false},
                ],
            },
            2: {
                name: "Sarah",
                messages: [
                    {name: "Sarah", content: "Hello!", isRobot: true},
                    {name: "Me", content: "Hi, how are you?", isRobot: false},
                    {name: "Sarah", content: "I am well! And you?", isRobot: true},
                    {name: "Me", content: "Me too", isRobot: false},
                ],
            },
            3: {
                name: "Michael",
                messages: [

                ],
            },
        };
    },
    [sendMessage]: (store, action) => {
        const {id, name, content} = action.payload;
        return {
            ...store,
            [id]: {
                ...store[id],
                messages: [
                    ...store[id].messages,
                    {name, content}
                ]
            }
        };
    }
}, initialState);