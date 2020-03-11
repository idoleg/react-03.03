import React, {Component} from "react";
import {MessageList} from "../../components/MessageList/MessageList";
import {Input} from "../../components/Input/Input";


export class ChatContainer extends Component {

   state = {
      messages: INITIAL_MESSAGES,
   };

   addMessage = (message, name = this.props.username, automatic) => {
      this.setState((state) => ({
         messages: [
            ...state.messages,
            {name: name, text: message, automatic: automatic}
         ]
      }));
   };

   componentDidUpdate() {
      if (!this.state.messages[this.state.messages.length - 1].automatic ) {
         const answer = this.props.username === BOT_NAME ?
            "You can`t be bot! You are just a bag of bones." :
            BOT_MESSAGE + ", " + this.props.username;
         // delayed response so it feels more natural
         // bot will answer each message even if there were two of them passed within the delay time
         // it can be fixed using prevState, but this will be kind of awkward logic
         setTimeout(() => this.addMessage(answer, BOT_NAME, true), 300)
      }
   }

   render() {
      return (
         <>
            <MessageList messages={this.state.messages}/>
            <Input addMessage={this.addMessage}/>
         </>
      )
   }
}

const BOT_NAME = "Bot";

const BOT_MESSAGE = "Thank you for your message";

const INITIAL_MESSAGES = [{
   name: BOT_NAME,
   text: "Hello, I`m polite bot, send me something",
   automatic: true
}];
