import React,{Component} from 'react';
import Button from './Button';

export default class FormForUser extends Component {
  constructor(props) {
    super(props);

    this.updateMessagesList = this.props.updateMessagesList;
    this.sendMessage = this.sendMessage.bind(this);
  }
  clearInput(input) {
    input.value = '';
  }
  sendMessage(e) {
    e.preventDefault();
    const { name, message } = e.target;

    Promise.resolve()
      .then(this.updateMessagesList({ author: name.value, text: message.value }))
      .then(this.clearInput(message))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form className="content__form" onSubmit={this.sendMessage}>
        <input
          type="text"
          name="name"
          className="content__input content__input_name"
          placeholder="Введите имя"
          required
        />
        <input
          type="text"
          name="message"
          className="content__input content__input_message"
          placeholder="Введите сообщение"
          required
        />
        <Button text="Отправить сообщение" />
      </form>
    );
  }
}
