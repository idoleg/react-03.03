import React from "react"
import {Message} from './../Message/Message'


export class MessageList extends React.Component {

	state = {
        messages: [
			{name: "Ivan", text: "Hello, world!"}
		]
    }

	handleClick = () => {
        this.setState((state) => ({messages: [...this.state.messages,  {name: "Petr", text: "Hello! How are you?"}]}))
	}

	componentDidUpdate() {
    	const lastName = this.state.messages[this.state.messages.length - 1].name
    	if(lastName !== "Robot") {
     		setTimeout(() =>
      		this.setState(
        	{messages: [...this.state.messages, {name: "Robot", text: lastName + ", I'm a robot"}]}
      		), 1000)
    	}
 	}

	render () {
		return (
			<>
			<div>
          	{ this.state.messages.map((message, index) => <Message key={index} {...message} />) }
        	</div>
            <button onClick={this.handleClick}>Send message</button>
			</>
        )
    }
}

