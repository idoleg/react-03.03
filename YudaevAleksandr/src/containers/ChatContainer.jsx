import React, { Component } from "react";
import {Chat} from "../components/Chat/Chat"
import CssBaseline from "@material-ui/core/CssBaseline";
import {Header} from "../components/Header/Header";
import {ChatList} from "../components/ChatList/ChatList";

const ROBOT = "RobotAlex";

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "RobotAlex", content: "Hello!", isRobot: true},
            {name: "Me", content: "Hi, how are you?", isRobot: false},
            {name: "RobotAlex", content: "I am well! And you?", isRobot: true},
            {name: "Me", content: "Me too", isRobot: false},
        ],
        chats: {
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
        },
    };

    timeoutId = null;

    handleRobotAnswer = () => {
        const {id} = this.props.match.params;
        const currentMessage = this.state.chats[id].messages;
        const lastMessage = currentMessage[currentMessage.length - 1];

        if (lastMessage && lastMessage.name !== ROBOT){
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
                name: ROBOT,
                content: "Stupid robot message",
                isRobot: true
            }), 2000);
        }
    }

    handleSendMessage = (id) => (message) => {
        this.setState((state) => ({
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages, message],
                }
            },
        }), this.handleRobotAnswer);
    };

    handleKeyDown = (id) => (event, message) => {
        if (event.keyCode === 13 && event.ctrlKey) { // ctrl + Enter
            this.handleSendMessage(id)(message);
        }
    };

    render() {
        console.log(this.props);
        const {id} = this.props.match.params;
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined;

        return (
            <div style={{display: 'flex'}}>
                <CssBaseline />
                <Header />
                <ChatList />
                <Chat
                    messages={messages}
                    onSendMessage={this.handleSendMessage(id)}
                    onKeyDown = {this.handleKeyDown(id)}
                />
            </div>
            );
    }
}