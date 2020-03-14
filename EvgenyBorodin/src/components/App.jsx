import React, {Component} from 'react'
import { MessageList } from './MessageList/MessageList.jsx'

export class App extends Component {
    state = {
        messages: []
    }

    createMsg = ({user = 'Ivan', text = '1 new message sent'}) => {
        let messages = this.state.messages
        let newMsg = { user, text }
        //     user: 'Ivan', 
        //     text: '1 new message sent'
        // }
        this.setState((state) => ({messages: [...messages, newMsg]}))
    }

    componentDidUpdate () {
        let num = this.state.messages.length - 1
        let userBot = 'Robot'
        if (this.state.messages[num].user !== userBot) {
            this.createMsg ({user: userBot, text: 'Bot is busy, it will answer soon...'})
        }
    }

    render () {
        let msgs = this.state.messages
        return (
            <div className="container">
                <button onClick={this.createMsg}>Create message</button>
                <MessageList messages={msgs}/>
            </div>
        )
    }
}