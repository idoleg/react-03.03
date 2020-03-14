import React from 'react';
import MessageList from './components/MessageList';
import SendForm from './components/SendForm';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { author: 'Ivan', text: 'Hi Guys' },
                { author: 'Stephan', text: 'Hiya' },
                { author: 'Alex', text: 'Do you wanna chat with?' }
            ]
        };

        this.updateMessagesList = this.updateMessagesList.bind(this);
    }

    updateMessagesList(message) {
        const array = [...this.state.messages, message];

        this.setState({ messages: array });
    }

    render() {
        const { messages } = this.state;

        return (
            <div className="app">
                <h1 className="app__title">Chat with People</h1>
                <div className="content">
                    <MessageList messages={messages} />
                    <SendForm updateMessagesList={this.updateMessagesList} />
                </div>
            </div>
        );
    }
}
