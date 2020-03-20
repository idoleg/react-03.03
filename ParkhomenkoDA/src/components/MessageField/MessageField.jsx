import React from 'react';
import Message from './../Message/Message';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { name: "Ivan", content: "Hello, world!" },
            { name: "Petr", content: "Helo, how are you?" },
            { name: "Ivan", content: "I'm well" },
        ]
    };

    handleClick = () => {
        this.setState({ messages: [... this.state.messages, { name: "Кнопка", content: "Нормально"}] });
    };

    render() {
        const messageElements = this.state.messages.map((mess, index) => (
            <Message key={index} name={mess.name} content={mess.content} />));
        return <div>
            {messageElements}
            <button onClick={this.handleClick} > Отправить сообщение </button>
        </div>
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
                this.setState(
                    {
                        messages: [... this.state.messages, {name: "Робот", content: "Не приставай ко мне, я робот!"}]
                    }),
                1000);
        }
    }
}