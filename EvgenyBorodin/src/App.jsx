import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ChatContainer } from './containers/ChatContainer.jsx';
import { Main } from './components/Main/Main.jsx';
import { About } from './components/About/About.jsx';
import { Profile } from './components/Profile/Profile.jsx';

import './App.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/chats" component={ChatContainer} />
                <Route exact path="/chats/:id" component={ChatContainer} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/about" component={About} />
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    )
}

// export class App extends Component {
//     state = {
//         messages: []
//     }

//     createMsg = ({user = 'Ivan', text = '1 new message sent'}) => {
//         const messages = this.state.messages
//         // let newMsg = { user, text }
//         //     user: 'Ivan', 
//         //     text: '1 new message sent'
//         // }
//         this.setState((state) => ({messages: [...messages, {user , text}]}))
//     }

//     componentDidUpdate () {
//         const num = this.state.messages.length - 1
//         const userBot = 'Robot'
//         if (this.state.messages[num].user !== userBot) {
//             this.createMsg ({user: userBot, text: 'Bot is busy, it will answer soon...'})
//         }
//     }

//     render () {
//         const messages = this.state.messages
//         return (
//             <div className="container">
//                 <button onClick={this.createMsg}>Create message</button>
//                 <MessageList messages={messages}/>
//             </div>
//         )
//     }
// }