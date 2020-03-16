import React, { Component } from "react";
import {Chat} from "../components/Chat/Chat"
import CssBaseline from "@material-ui/core/CssBaseline";
import {Header} from "../components/Header/Header";
import {ChatList} from "../components/ChatList/ChatList";

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "RobotAlex", content: "Hello!", isRobot: true},
            {name: "Me", content: "Hi, how are you?", isRobot: false},
            {name: "RobotAlex", content: "I am well! And you?", isRobot: true},
            {name: "Me", content: "Me too", isRobot: false},
        ],
        textFieldDisabled:false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.state.messages[this.state.messages.length - 1].isRobot){
            setTimeout(() => {
                let message = {name: "RobotAlex", content: "Stupid robot message", isRobot: true};
                this.setState((state) => ({
                    messages: [...state.messages, message],
                    textFieldDisabled: false
                }));
                //this.textInput.current.focus();
            }, 2000);
        }
    }

    handleSendMessage = (message) => {
        this.setState((state) => ({
            messages: [...state.messages, {name: 'Me', content: message}],
            textFieldDisabled: true
        }));
    };

    handleKeyDown = (event, message) => {
        if (event.keyCode === 13 && event.ctrlKey) { // ctrl + Enter
            this.handleSendMessage(message);
        }
    };

    render() {
        return (
            <div style={{display: 'flex'}}>
                <CssBaseline />
                <Header />
                <ChatList />
                <Chat
                    messages={this.state.messages}
                    active = {this.state.textFieldDisabled}
                    onSendMessage={this.handleSendMessage}
                    onKeyDown = {this.handleKeyDown}
                />
            </div>
            );
    }
}