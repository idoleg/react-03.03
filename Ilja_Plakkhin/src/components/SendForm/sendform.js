import React from "react";
import ReactDOM from "react-dom";
import SendButton from "../Buttons/Submitbutton"

export default class SendForm extends React.Component {
  constructor(props) {
    super(props);

    this.updateMessagesList = this.props.updateMessagesList;
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(inputValue) {

    const { name, message } = inputValue.target;
    inputValue.preventDefault();
    Promise.resolve()
      .then(this.updateMessagesList({ author: name.value, text: message.value }))
  }
render() {
    return (
      <form className="chat-form" onSubmit={this.sendMessage}>
        <input
          type="text"
          name="name"
          className="input-field-content"
          placeholder="Кто вы?"
          required
        />
        <input
          type="text"
          name="message"
          className=""
          placeholder="...чапятать тут..."
          required
        />
        <SendButton />
      </form>
    );
  }
}
