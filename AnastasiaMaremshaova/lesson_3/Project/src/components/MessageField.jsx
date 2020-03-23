import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
   state = {

    answersRobot :[{name: "Robot", question: 'Hello!', answer: 'Good afternoon'},
                {name: "Robot", question: 'How are you?', answer: 'I feel great'},
                {name: "Robot", question: 'Goodbye!', answer: 'Have a good day'} ],

    messagesUser: [
            {id: 1, name: "Ivan", content: "Hello!"},
            {id: 2, name: "Igor", content: "How are you?"},
            {id: 3, name: "Ivan", content: "Goodbye!"}
        ],
    
    messages: [],
    count: 0

   };

   componentDidUpdate() {
    console.log(this.state.messages); 
    let lastCount = this.state.messages.length - 1; 
    if (Number(this.state.messages[lastCount].id) != 0) {
        let nameUser = this.state.messages[lastCount].name; 
    this.setState({
            messages: [...this.state.messages, {id : 0, name : "Robot",  
            content : this.state.answersRobot[this.state.count].answer + ',  ' + nameUser}] 
    });
            this.state.count = (this.state.count != this.state.answersRobot.length - 1) ? (++this.state.count) : 0;
            console.log(this.state.count);

     }
    }

   handleClick = () => {
       
       this.setState({ messages: [ ...this.state.messages, this.state.messagesUser[this.state.count] ] });
   };

   render() {
       const messageElements = this.state.messages.map((message, index) => (
           <Message key={ index } {...message}/>));

       return <div>
           <h4><strong>Добро пожаловать в чат-бот! Отправьте сообщение, нажав на кнопку!</strong></h4>
           {messageElements}
           <button onClick={ this.handleClick }>Отправить сообщение</button>
           
       </div>
   }
}
