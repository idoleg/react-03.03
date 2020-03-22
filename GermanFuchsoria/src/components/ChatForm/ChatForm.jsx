import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class ChatForm extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired
  };

  clearInput(input) {
    input.value = '';
  }

  sendMessage = e => {
    e.preventDefault();
    const { name, message } = e.target;

    this.props.onSendMessage({ author: name.value, text: message.value, authorAccess: 'user' });
    this.clearInput(message);
  };

  render() {
    return (
      <form className="chat__form" onSubmit={this.sendMessage}>
        <TextField
          type="text"
          name="name"
          className="chat__input chat__input_name"
          placeholder="Write your Name"
          label="Name"
          required
        />
        <TextField
          type="text"
          name="message"
          className="chat__input chat__input_message"
          placeholder="Write your Message"
          label="Message"
          required
        />
        <Button className="chat__submit" type="submit" variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
          Send Message
        </Button>
      </form>
    );
  }
}
