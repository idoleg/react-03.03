import React from 'react';
import Message from './Message/Message';


export default class MessageField extends React.Component {
    state = {
        messages: [
            { name: "Oleg", text: "Hi, all!" },
            { name: "Anton", text: "Hello!" },
            { name: "Oleg", text: "Interesting lesson? )" },
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

    componentDidUpdate() {
        if (!this.state.robot) {
            setTimeout(() =>
                this.setState(
                    {
                        messages: [...this.state.messages, {name: "Robot", text: 'Здравствуйте, '+ this.state.lastChatName+'! Как Ваши дела?'}],
                        robot: true
                    }), 1000);
        }
    }


    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index }  {...message} />));

        return <div>
            { messageElements }
            <form onSubmit={ this.handleClick }>
                <input
                    type="text"
                    name="name"
                    placeholder="Введите Имя"
                    required
                /><br/>
                <input
                    type="text"
                    name="text"
                    placeholder="Сообщение"
                    required
                /><br/>
            <button >Отправить сообщение</button>
            </form>
        </div>
    }
}
