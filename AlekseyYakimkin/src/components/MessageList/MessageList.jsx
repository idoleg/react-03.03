import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';

// export class MessageList extends Component {
//     state = {
//         messages: [
//             // { name: "Ivan", content: "Hello, world!" },
//             // { name: "Petr", content: "Helo, how are you?" },
//             // { name: "Ivan", content: "I'm well" },
//         ],
//         thirstUpdate: true
//     }
//     static propTypes = {
//         messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),

//     };
//     componentDidMount(){
//         //const {props:{messages}} = this;
//         //console.dir({messages})
//         console.log("mount")
//         console.dir(this.props.messages)
//         this.setState((state)=>({messages: [ ...this.props.messages]}))
//     }
//     componentDidUpdate() {
//         if(this.state.messages[this.state.messages.length - 1].name !== 'Robot' && !this.state.thirstUpdate){
//             setTimeout(() =>
//                 this.setState(
//                     { messages: [ ...this.state.messages, {name:'Robot', content:'Не приставай ко мне, я робот!'} ] }), 1000);
//         } 
//     }
//     pushNewMessage = (e) => {
//         console.log('Click');
//         console.dir(this.state.messages)
//         this.setState((state)=>({ messages: [ ...this.state.messages, {name:"Alex", content: "Hi there!"} ],thirstUpdate: false }));
        
//     //     messages.push(newMessage)
//     //     ReactDOM.render(<MessageList messages={messages} /> , document.getElementById("root"))
//     }
//     render() {
//         //const {props:{messages}} = this;
//         //console.dir({messages})
//         return  <div>
//                     <ul>
//                         {this.state.messages.map((item, index) => <Message {...item} key={index} />)}
//                     </ul>
//                     <button id="newmessage" name="newmessage" val="newmessage" onClick={this.pushNewMessage}>Новое сообщение</button>
//                 </div>
//     }
// }

export const MessageList = ({messages}) => {
    return  <div>
                <ul>
                    {messages.map((item, index) => <Message {...item} key={index} />)}
                </ul>
            </div>
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),

};