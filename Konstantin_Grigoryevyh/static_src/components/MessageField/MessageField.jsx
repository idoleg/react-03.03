import React from 'react';
import Message from './Message/Message.jsx';
import TextField from '@material-ui/core/TextField';

export class MessageField extends React.Component {
    state = {
        messages: [
            { name: "Oleg", text: "Hi, all!", className: "" },
            { name: "Anton", text: "Hello!", className: "" },
            { name: "Oleg", text: "Interesting lesson? )", className: "" },
        ],
        robot: false,
        lastChatName: false,
    };

    handleClick = (e) => {
        e.preventDefault();
        const { name , text} = e.target;
        this.setState ({lastChatName: name.value, messages: [ ...this.state.messages, {name: name.value, text: text.value}], robot: false});
        text.value = "";
    };

    timeoutID = null;

    componentDidUpdate() {
        if (!this.state.robot) {
            clearTimeout(this.timeoutID);
            this.timeoutID = setTimeout(() =>
                this.setState(
                    {
                        messages: [...this.state.messages, {name: "Robot", text: 'Здравствуйте, '+ this.state.lastChatName+'! Как Ваши дела?', className: "robot" }],
                        robot: true
                    }), 3000);
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (            
        <Message key={ index }  {...message} />));            
        return <div className="chat__main-chat">
            <div className="chat__messages">
            { messageElements }
            </div>
            <div className="form-wrapper">
            <form onSubmit={ this.handleClick } className="form">
                <TextField
                    label="Введите Имя"
                    id="standard-basic"
                    type="text"
                    name="name"
                    required
                />
                <br/>
                <TextField
                label="Введите cообщение"
                    type="text"
                    id="standard-basic"
                    name="text"
                    required
                /><br/>
            <button >Отправить сообщение</button>
            </form>
            </div>
        </div>
    }
}